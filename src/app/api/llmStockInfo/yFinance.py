# src/app/api/llmStockInfo/yFinance.py

import pip

def install(package):
    if hasattr(pip, 'main'):
        pip.main(['install', package])
    else:
        pip._internal.main(['install', package])

# Example
if __name__ == '__main__':
    install('yfinance pandas json ')


import yfinance as yf
import pandas as pd
import json
import sys
from datetime import datetime
# No need for timedelta if not used
# import pytz # You might need pytz if you want to robustly handle timezones,
            # but for yfinance .NS stocks, the index usually comes with Asia/Kolkata

# ... (safe_get function remains the same) ...
def safe_get(data_dict, key, default=None):
    # If key is an integer, assume iloc access for Series
    if isinstance(key, int) and isinstance(data_dict, pd.Series):
        try:
            val = data_dict.iloc[key]
        except IndexError:
            return default
    # If key is 'min' or 'max', assume aggregation for Series
    elif isinstance(key, str) and key in ['min', 'max'] and isinstance(data_dict, pd.Series):
        if data_dict.empty:
            return default
        val = getattr(data_dict, key)()
    # Original dictionary access
    elif isinstance(data_dict, dict):
        val = data_dict.get(key, default)
    else: # Fallback for other types or if series access failed.
        return default

    if pd.isna(val):
        return default
    if isinstance(val, (pd.Timestamp, datetime)):
        return val.strftime('%Y-%m-%d') # Keep dates as strings
    if isinstance(val, (float, int)):
        if pd.isna(val): # Check again for float NaN
            return default
        return val # Return numbers as numbers for JSON
    return str(val) # Convert other types to string as a fallback


def get_yfinance_summary(ticker_symbol_with_suffix):
    # ... (initial summary structure remains the same) ...
    summary = {
        "symbol": ticker_symbol_with_suffix,
        "infoAvailable": False,
        "currentPrice": None,
        "previousClose": None,
        "dayLow": None,
        "dayHigh": None,
        "fiftyTwoWeekLow": None,
        "fiftyTwoWeekHigh": None,
        "averageVolume": None,
        "marketCap": None,
        "priceActionSummary": {
            "lastClose": None,
            "oneMonthChangePercent": None,
            "threeMonthChangePercent": None,
            "oneYearChangePercent": None,
            "ytdChangePercent": None,
            "lastMonthLow": None,
            "lastMonthHigh": None,
        },
        "quarterlyPerformance": [],
        "monthlyPerformance": [],
        "keyTechnicals": {
            "sma50": None,
            "sma200": None,
        },
        "analystRecommendations": {
            "recommendationKey": None,
            "numberOfAnalystOpinions": None,
        },
        "upcomingEvents": [],
        "fetchTimestampUTC": datetime.utcnow().isoformat() + "Z",
        "error": None
    }

    try:
        ticker = yf.Ticker(ticker_symbol_with_suffix)
        info = ticker.info

        if not info or not any(info.get(k) for k in ["regularMarketPrice", "currentPrice", "previousClose"]):
            summary["error"] = f"Core info missing for {ticker_symbol_with_suffix}. Ticker might be invalid or delisted."
            # Try to fetch history anyway
        else:
            summary["infoAvailable"] = True
            summary["currentPrice"] = safe_get(info, "currentPrice", safe_get(info, "regularMarketPrice"))
            summary["previousClose"] = safe_get(info, "previousClose")
            summary["dayLow"] = safe_get(info, "dayLow")
            summary["dayHigh"] = safe_get(info, "dayHigh")
            summary["fiftyTwoWeekLow"] = safe_get(info, "fiftyTwoWeekLow")
            summary["fiftyTwoWeekHigh"] = safe_get(info, "fiftyTwoWeekHigh")
            summary["averageVolume"] = safe_get(info, "averageVolume")
            summary["marketCap"] = safe_get(info, "marketCap")

        hist_daily_long = ticker.history(period="15mo", interval="1d")

        if hist_daily_long.empty:
            error_msg = f"Could not retrieve historical data for {ticker_symbol_with_suffix}."
            summary["error"] = f"{summary['error']}. {error_msg}" if summary["error"] else error_msg
            # return summary # Decide if you want to return early

        if not hist_daily_long.empty:
            # Ensure index is datetime and timezone-aware (or make it consistently naive/UTC)
            if not isinstance(hist_daily_long.index, pd.DatetimeIndex):
                hist_daily_long.index = pd.to_datetime(hist_daily_long.index)
            
            # If the index has a timezone, use it. Otherwise, assume UTC or make it naive.
            # For yfinance .NS, it's usually Asia/Kolkata.
            # If index is naive, comparison with naive datetime is fine.
            # If index is aware, make comparison datetime aware too.

            idx_timezone = hist_daily_long.index.tz


            last_close_price = safe_get(hist_daily_long['Close'], -1)
            summary["priceActionSummary"]["lastClose"] = last_close_price

            if last_close_price is not None:
                if len(hist_daily_long) >= 22:
                    one_month_ago_price = safe_get(hist_daily_long['Close'], -22)
                    if one_month_ago_price and one_month_ago_price != 0:
                        summary["priceActionSummary"]["oneMonthChangePercent"] = round(((last_close_price - one_month_ago_price) / one_month_ago_price) * 100, 2)
                
                if len(hist_daily_long) >= 65:
                    three_months_ago_price = safe_get(hist_daily_long['Close'], -65)
                    if three_months_ago_price and three_months_ago_price != 0:
                        summary["priceActionSummary"]["threeMonthChangePercent"] = round(((last_close_price - three_months_ago_price) / three_months_ago_price) * 100, 2)

                if len(hist_daily_long) >= 252: # approx 1 trading year
                    one_year_ago_price = safe_get(hist_daily_long['Close'], -252)
                    if one_year_ago_price and one_year_ago_price != 0:
                        summary["priceActionSummary"]["oneYearChangePercent"] = round(((last_close_price - one_year_ago_price) / one_year_ago_price) * 100, 2)

                # YTD Change - CRITICAL FIX HERE
                current_year = datetime.now().year
                start_of_year_naive = datetime(current_year, 1, 1)

                if idx_timezone: # If history index is timezone-aware
                    start_of_year_aware = pd.Timestamp(start_of_year_naive, tz=idx_timezone)
                else: # If history index is naive (e.g. US stocks often are)
                    start_of_year_aware = pd.Timestamp(start_of_year_naive) # Keep it naive for comparison

                ytd_data_series = hist_daily_long[hist_daily_long.index >= start_of_year_aware]['Close']
                
                if not ytd_data_series.empty:
                    ytd_start_price = safe_get(ytd_data_series, 0)
                    ytd_current_price = safe_get(ytd_data_series, -1) # Should be same as last_close_price
                    if ytd_start_price and ytd_current_price and ytd_start_price != 0:
                         summary["priceActionSummary"]["ytdChangePercent"] = round(((ytd_current_price - ytd_start_price) / ytd_start_price) * 100, 2)
                
                last_30_trading_days_data = hist_daily_long.tail(22)
                if not last_30_trading_days_data.empty:
                    summary["priceActionSummary"]["lastMonthLow"] = safe_get(last_30_trading_days_data['Low'], 'min')
                    summary["priceActionSummary"]["lastMonthHigh"] = safe_get(last_30_trading_days_data['High'], 'max')
            
            # Quarterly Performance
            if isinstance(hist_daily_long.index, pd.DatetimeIndex):
                quarterly_data = hist_daily_long.resample('QE').agg(
                    Open=('Open', 'first'), Close=('Close', 'last'),
                    High=('High', 'max'), Low=('Low', 'min')
                ).dropna() # dropna before accessing row['Open']
                for index, row in quarterly_data.tail(5).iterrows():
                    open_val, close_val, high_val, low_val = safe_get(row, 'Open'), safe_get(row, 'Close'), safe_get(row, 'High'), safe_get(row, 'Low')
                    if open_val is not None and close_val is not None and open_val != 0:
                        change_percent = ((close_val - open_val) / open_val) * 100
                        summary["quarterlyPerformance"].append({
                            "quarter": index.to_period('Q').strftime('Q%q %Y'),
                            "open": open_val, "close": close_val,
                            "high": high_val, "low": low_val,
                            "changePercent": round(change_percent, 2)
                        })
            
            # Monthly Performance
            if isinstance(hist_daily_long.index, pd.DatetimeIndex):
                monthly_data = hist_daily_long.resample('ME').agg(
                    Open=('Open', 'first'), Close=('Close', 'last'),
                    High=('High', 'max'), Low=('Low', 'min')
                ).dropna()
                for index, row in monthly_data.tail(12).iterrows():
                    open_val, close_val, high_val, low_val = safe_get(row, 'Open'), safe_get(row, 'Close'), safe_get(row, 'High'), safe_get(row, 'Low')
                    if open_val is not None and close_val is not None and open_val != 0:
                        change_percent = ((close_val - open_val) / open_val) * 100
                        summary["monthlyPerformance"].append({
                            "month": index.strftime('%Y-%m'),
                            "open": open_val, "close": close_val,
                            "high": high_val, "low": low_val,
                            "changePercent": round(change_percent, 2)
                        })

            if len(hist_daily_long) >= 50:
                sma50 = hist_daily_long['Close'].rolling(window=50).mean().iloc[-1]
                summary["keyTechnicals"]["sma50"] = round(sma50, 2) if pd.notna(sma50) else None
            if len(hist_daily_long) >= 200:
                sma200 = hist_daily_long['Close'].rolling(window=200).mean().iloc[-1]
                summary["keyTechnicals"]["sma200"] = round(sma200, 2) if pd.notna(sma200) else None

        # Analyst Recommendations (robust fetching)
        try:
            reco_df = ticker.recommendations
            if reco_df is not None and not reco_df.empty:
                # Sort by date if 'Date' column exists and is datetime, to get the latest
                if 'Date' in reco_df.columns and pd.api.types.is_datetime64_any_dtype(reco_df['Date']):
                    reco_df = reco_df.sort_values(by='Date', ascending=False)
                
                latest_reco = reco_df.iloc[0] # Get the first row (latest if sorted)
                
                # Prefer 'strongBuy' etc. if present, fallback to 'To Grade' or 'Rating'
                reco_strength_map = {
                    'strongBuy': 'Strong Buy', 'buy': 'Buy', 
                    'hold': 'Hold', 'sell': 'Sell', 'strongSell': 'Strong Sell'
                }
                recommendation_text = None
                for key_col in reco_strength_map.keys():
                    if key_col in latest_reco and pd.notna(latest_reco[key_col]) and latest_reco[key_col] > 0 : # Check count for these columns
                        recommendation_text = reco_strength_map[key_col]
                        break
                if not recommendation_text:
                    for grade_col in ['To Grade', 'Rating', 'Action', 'Firm Grade']:
                        if grade_col in latest_reco and pd.notna(latest_reco[grade_col]):
                            recommendation_text = str(latest_reco[grade_col])
                            break
                summary["analystRecommendations"]["recommendationKey"] = recommendation_text
            summary["analystRecommendations"]["numberOfAnalystOpinions"] = safe_get(info, "numberOfAnalystOpinions")
            if summary["analystRecommendations"]["numberOfAnalystOpinions"] is None and reco_df is not None and 'Firm' in reco_df.columns:
                 summary["analystRecommendations"]["numberOfAnalystOpinions"] = len(reco_df['Firm'].unique())
        except Exception: pass


        # Upcoming Events
        try:
            cal_df = ticker.calendar
            if cal_df is not None and 'Earnings Date' in cal_df.columns:
                earnings_dates_series = cal_df['Earnings Date'].dropna()
                if not earnings_dates_series.empty:
                    raw_event_date = earnings_dates_series.iloc[0]
                    event_date_to_store = None
                    if isinstance(raw_event_date, list) and len(raw_event_date) > 0:
                        event_date_to_store = raw_event_date[0] # take first if range
                    elif pd.notna(raw_event_date):
                        event_date_to_store = raw_event_date
                    
                    if event_date_to_store and hasattr(event_date_to_store, 'strftime'):
                         summary["upcomingEvents"].append({"event": "Earnings", "date": event_date_to_store.strftime('%Y-%m-%d')})
        except Exception: pass

    except Exception as e:
        current_error = summary.get("error")
        detailed_error = f"Overall yfinance processing error: {str(e)}"
        summary["error"] = f"{current_error}. {detailed_error}" if current_error else detailed_error
        # Adding type of error for easier debugging
        summary["error_type"] = type(e).__name__


    # Final check to ensure all numerical values that should be numbers are, not strings from safe_get default
    for key, val in summary.items():
        if isinstance(val, dict):
            for sub_key, sub_val in val.items():
                if isinstance(sub_val, str) and sub_val.replace('.', '', 1).isdigit(): # basic check for number string
                    try:
                        summary[key][sub_key] = float(sub_val) if '.' in sub_val else int(sub_val)
                    except ValueError:
                        pass # keep as string if conversion fails
        elif isinstance(val, str) and val.replace('.', '', 1).isdigit():
             try:
                summary[key] = float(val) if '.' in val else int(val)
             except ValueError:
                pass


    return summary

if __name__ == "__main__":
    if len(sys.argv) > 1:
        ticker_symbol_input = sys.argv[1]
        data = get_yfinance_summary(ticker_symbol_input)
        try:
            print(json.dumps(data, indent=2, default=str))
        except Exception as json_e:
            print(json.dumps({"symbol": ticker_symbol_input, "error": f"JSON serialization error: {str(json_e)}", "error_type": type(json_e).__name__}))
    else:
        print(json.dumps({"error": "No ticker symbol provided to yFinance.py"}))
















