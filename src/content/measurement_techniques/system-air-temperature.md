---
title: System Air Temperature
type: measurement
layout: measurement_technique
measurement_technique_id: 7
excerpt: Use this technique to measure the air temperature of various air streams in an air handling unit at one-hour intervals with data loggers.
borrow_equipment_url: "https://nycenergytools.com/equipment/temp-rh-logger-mx1101/"
thumbnail_image: "/images/measurement-technique/system-air-temperature/2024_0410_system air temperature MT_thumbnail.jpeg"
related_systems:
  - Air-to-air Energy Recovery
associated_components:
  - Air-to-air Heat Exchanger
related_calculations:
  - Air-to-air Heat Exchanger Heat Transfer
associated_calculations:
  - Air-to-air Heat Exchanger Heat Transfer
url: "/documents/measurement-technique/system-air-temperature"
---

## Understanding System Air Temperature Measurements

This technique uses data loggers to take long-term measurements of air temperature (F) at one-hour intervals. This technique can be used to characterize air handling unit (AHU) performance; supply/discharge air, return air, exhaust air, and mixed air temperatures are measured with this technique. Each air stream requires a different logger for data collection. This data is used to estimate the thermal loads of the system during the heating and cooling seasons. For a more detailed description of how to characterize an AHU, please refer to the <a href="/documents/plants/air-handling-plant">Air Handling Plant</a>.

Measurements should be taken at one-hour average intervals; not instantaneously. When taking one-hour measurements, the logger detects the temperature several times over every hour and stores the average value. Sometimes temperature can fluctuate over a one-hour period, but the instantaneous temperature value will not indicate that change.  

The duration of the long-term measurement should be a minimum of six weeks. Measurements should be taken when the system is operating under normal conditions. Although AHUs typically operate year-round, the heating and cooling seasons affect their schedules. To calculate the annual energy consumption of a unit, six weeks of measurements should be taken for each season. To calculate only the heating or cooling season energy consumption, six weeks of measurements for that season should be taken. 

### Type of Measurement 

Air temperature measurements are <strong>direct measurements</strong> of environmental conditions. 

## Measurement Equipment

The measurement equipment needed for this procedure is a temperature logger (or a combined temperature and humidity data logger). 
 
The data loggers should be installed in the ductwork with the air stream The temperature data measured by the logger should be collected as **hourly average values**; not instantaneously. Operating under this method, the logger detects temperature fluctuations across the hour and stores the average value of those fluctuations rather than the measured temperature value at an instantaneous point in time (which does not account for those changes).

{{< admonition type="warning" >}}
Avoid placing the loggers near heat exchangers, such as the heating or cooling coils within the air handling unit, because the logger will detect the temperature of air around those components instead of the true air temperature.
{{< /admonition >}}

{{< admonition type="tip" >}}
**If you are NYC agency personnel** and you require measurement tools, data loggers, meters or sensors, we offer equipment lending through the [Field Equipment Lending Library](https://nycenergytools.com/equipment/).
{{< /admonition >}}

This measurement technique can makes use of either of the following equipment available in the [Field Equipment Lending Library](https://nycenergytools.com/equipment/):

<div class="equip-grid">

{{< equipment_link borrow="yes" type="equip" url="https://nycenergytools.com/equipment/temp-rh-logger-mx1101/" imgUrl="https://nycenergytools.com/wp-content/uploads/2021/05/MX1101-5-300x300.jpg" title="MX1101 Data Logger" excerpt="Measures and records temperature and relative humidity. Using bluetooth technology you can transmit your data wirelessly to your mobile device." >}}

</div>

{{< admonition type="note" >}}
Please note that loggers will require setup with a computer or phone using the manufacturer’s proprietary software prior to installation and measurement logging and that older loggers will require the use of a cable to connect to a computer. Refer to the measurement equipment’s user manual for a detailed description of setup requirements.
{{< /admonition >}} 

## Measurement Procedure

### 1. Preparation for data acquisition 

Use the manufacturer’s software to set up and launch the logger(s). Refer to the equipment’s user manual for detailed instructions on how to set up the logger. 

- Logging interval: 1-hour
- Date and time to start logging
- Date and time to stop logging
- Value(s) to measure: Temperature (F), Relative Humidity (%) if necessary
- Sampling interval: 1-second

<iframe class ="video" src="https://www.youtube.com/embed/sbUBDB2eg_U?si=e2hwK0QFusNwQSX9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 1. How to configure the MX1101 logger on HOBOConnect (7 min).</figcaption>

### 2. Installation of equipment 

1. To measure temperature of the air streams inside of an AHU, place the loggers inside of the ductwork. Mixed air temperature is the most difficult data to collect because some mixed air chambers make it difficult to install a data logger to accurately capture mixed air. The measurement uncertainty introduced is unknown.

{{< admonition type="tip" >}}
Experiment with different logger placements within the air chamber to minimize measurement uncertainty.
{{< /admonition >}}

{{< admonition type="warning" >}}
Do not place the loggers near heating and/or cooling coils.
{{< /admonition >}}

2. Confirm that the logger is recording, and that the sensor is accurately identifying the airstream’s temperature. If the logger has a screen, ensure that the temperature value is displayed on the logger screen. If the logger does not have a screen, use the software to connect to the logger and check the temperature it detects.
3. Do not move the logger after it has been installed.

<iframe class ="video" src="https://www.youtube.com/embed/R9MDkohMD-E?si=odLhnqUNiW_KlZgU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 2. How to install the MX2301 MX1101 UX100 temperature loggers (5 min).</figcaption>

### 3. Verify Data is Being Collected

Wait 24-48 hours to verify data collection. Return to the location of the measured equipment and use a laptop or phone with the manufacturer’s proprietary software installed to do the following: 

{{< admonition type="warning" >}}
<strong>Do not remove the logger or sensors.</strong> If you remove the logger, you may need to start over with the setup and installation process{{< /admonition >}}

1. If necessary, connect the logger to a laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth.
2. Analyze the data with a plot graph. This can be done with the proprietary software or Microsoft Excel after exporting the dataset as a .csv file.
3. Determine whether the measured results align with the expected operation of the system or component based on observed equipment schedules.

<iframe class ="video" src="https://www.youtube.com/embed/EOb9EqQcRXY?si=IEUp1L86en5LPqyf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 3. How to check data of bluetooth loggers using HOBOConnect (6 min).</figcaption>

### 4. Retrieve Measurement Equipment and Download All Final Data 

After verifying that the logger is collecting data, do the following:

1. Allow the logger to collect data for the remainder of the measurement period.
2. After the measurement period has concluded, remove the logger.
3. If necessary, connect the logger to a laptop or phone via USB cable. Otherwise, use the software to connect with the logger via Bluetooth.
4. Use the proprietary software to stop the logger and end data collection.
5. Download all data from the logger and save the file in the.csv file format for analysis.

<iframe class ="video" src="https://www.youtube.com/embed/-vxr8pnguIQ?si=ViyTyV2-lHhgWwb-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 4. How to extract data from the logger and convert to csv on HOBOConnect (4 min).</figcaption>

### 5. Process and Analyze Measured Data

Use the collected measurement data in the corresponding calculator file based on the type of component you are measuring:

#### Heat Exchanger

{{< page_hyperlink page_title="Air-to-air Heat Exchanger" url="/documents/components/air-to-air-heat-exchanger/#how-to-quantify" >}}

## Troubleshooting

This section provides some troubleshooting tips for the most common issues with equipment installation.

{{< admonition type="note" >}}
Air handling units come in all sizes, and there is no single method for properly installing all temperature loggers. Installing at the mixing plenum/chamber is the most challenging because you are trying to measure the mixed air temperature, which is the combination of return air and outside air.
{{< /admonition >}}

{{< details summary="Unexpected values" >}}
Verify that the logger is calibrated. Re-calibrate the equipment if necessary.
{{< /details >}}

{{< details summary="Temperature readings are higher than expected" >}}
Adjust the placement of the logger, ensuring that the logger is installed correctly and that there is no interference from heating and cooling coils.
{{< /details >}}