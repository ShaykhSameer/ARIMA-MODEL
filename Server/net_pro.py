import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.arima.model import ARIMA
df = pd.read_csv("Physical Observation Compliance Monitoring percentage-5.csv")
import numpy as np
import base64
import io



df.head()

df.dtypes

df['date_of_data'] = pd.to_datetime(df['date_of_data'])
df.dtypes

df['data_point'] = df['data_point'] * 100
df.head()

# df.sort_values(by='date_of_data', ascending=True, inplace=True)

# most_recent_month = df['date_of_data'].iloc[0].strftime('%Y-%m')

# recent_month_data = df[df['date_of_data'].dt.strftime('%Y-%m') == most_recent_month]

# # Plot the graph
# plt.plot(recent_month_data['date_of_data'], recent_month_data['data_point'])
# plt.xlabel('Date of Data')
# plt.ylabel('Percentage')
# plt.title(f'Percentage Trend for {most_recent_month}')
# plt.xticks(rotation=45)
# plt.grid(True)

# # Get the highest percentage value
# max_percentage = recent_month_data['data_point'].max()

# # Filter the points with the highest percentage values
# highest_points = recent_month_data[recent_month_data['data_point'] == max_percentage]

# # Plot a straight line connecting the highest points
# plt.plot(highest_points['date_of_data'], highest_points['data_point'], linestyle='-', color='red', marker='o')

# # Add zones
# zone_a = 25
# zone_b = 50
# zone_c = 75

# # Set the projection line based on zone boundaries
# projection_line = 0
# if max_percentage >= zone_a:
#     projection_line = zone_a
# if max_percentage >= zone_b:
#     projection_line = zone_b
# if max_percentage >= zone_c:
#     projection_line = zone_c

# plt.axhline(projection_line, linestyle='--', color='gray')

# plt.fill_between(recent_month_data['date_of_data'], 0, zone_a, color='green', alpha=0.2, label='Zone A')
# plt.fill_between(recent_month_data['date_of_data'], zone_a, zone_b, color='yellow', alpha=0.2, label='Zone B')
# plt.fill_between(recent_month_data['date_of_data'], zone_b, zone_c, color='orange', alpha=0.2, label='Zone C')
# plt.fill_between(recent_month_data['date_of_data'], zone_c, 100, color='red', alpha=0.2, label='Zone D')

# plt.ylim(0, 100)  # Set the y-axis limits to 0 and 100

# plt.legend(loc='upper right')
# plt.show()

df.sort_values(by='date_of_data', inplace=True)

# Create the ARIMA model
model = ARIMA(df['data_point'], order=(2, 1, 0))

# Fit the model to the data
results = model.fit()

# Forecast the next 30 days (you can adjust the number of days as needed)
forecast = results.forecast(steps=40)


# Plot the original data and the forecast
plt.plot(df['date_of_data'], df['data_point'], label='Original Data')
plt.plot(pd.date_range(start=df['date_of_data'].max(), periods=40, freq='D'), forecast, label='Forecast', linestyle='--')
plt.xlabel('Date')
plt.ylabel('Percentage')
plt.title('ARIMA Forecast')
plt.legend()
plt.xticks(rotation=45)
plt.grid(True)
# plt.show()



#plt.savefig("cached1.png")
image_buffer = io.BytesIO()
plt.savefig(image_buffer, format='png')
image_buffer.seek(0)
plt.close()
base64_image = base64.b64encode(image_buffer.read()).decode('utf-8')
#print(base64_image)






forecast_df = pd.DataFrame({
    'Date': pd.date_range(start=df['date_of_data'].max() + pd.Timedelta(days=1), periods=40, freq='D'),
    'Forecast': forecast
})

# Print the table with the forecast
print(forecast_df)

plt.plot(forecast_df['Date'], forecast_df['Forecast'], label='Forecast', linestyle='--')
plt.xlabel('Date')
plt.ylabel('Percentage')
plt.title('ARIMA Forecast for Next 30 Days')
plt.legend()
plt.xticks(rotation=45)
plt.grid(True)
plt.ylim(0, 100)
#plt.show()

image_buffer2 = io.BytesIO()
plt.savefig(image_buffer2, format='png')
image_buffer2.seek(0)
plt.close()

base64_image2 = base64.b64encode(image_buffer2.read()).decode('utf-8')
#print(base64_image2)