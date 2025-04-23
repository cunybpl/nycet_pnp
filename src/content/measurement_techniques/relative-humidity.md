---
title: Relative Humidity
type: measurement
layout: measurement_technique
measurement_technique_id: 8
excerpt: Use this technique to measure relative humidity (RH %) of various air streams in an air handling unit at one-hour intervals with data loggers.
borrow_equipment_url: "https://nycenergytools.com/equipment/temp-rh-mx2301/"
thumbnail_image: "/images/measurement-technique/relative-humidity/2024_0410_relative humidity MT_thumbnail.jpeg"
related_systems:
  - Air-to-air Energy Recovery
  - Condenser Water Loop
associated_components:
  - Air-to-air Heat Exchanger
  - Constant-speed, Constant-volume Fan and Motor
  - Variable-speed, Variable-volume Fan and Motor
related_calculations:
  - Air-to-air Heat Exchanger Heat Transfer
  - Cooling Tower Fans Energy Consumption
associated_calculations:
  - Air-to-air Heat Exchanger Heat Transfer
  - Cooling Tower Fans Energy Consumption
url: "/documents/measurement-technique/relative-humidity"
---

## Understanding Relative Humidity Measurements

This technique uses data loggers to take long-term measurements of relative humidity (% RH) at one-hour intervals. This technique can be used to characterize the performance of heat/energy recovery ventilators. Data is used for calculations such as regression models to estimate the heat and energy recovered by an air-to-air heat/energy recovery system. For a more detailed description of how relative humidity data is used in calculations, please refer to the <a href="/documents/systems/air-to-air-energy-recovery">Air-to-Air Energy Recovery System</a> and calculation methodology of the system or component being measured.

Relative humidity measurements should be taken at one-hour intervals and paired with the temperature of the system if both variables are required to characterize performance. Measurements should be taken at one-hour average intervals; do not use instantaneous values. When taking one-hour measurements, the logger detects humidity several times every hour and stores the average value. Sometimes humidity can fluctuate over a one-hour period, and the instantaneous value will not indicate that change.  

The duration of the long-term measurement should be a minimum of six weeks. Measurements should be when the system of interest is operating under normal conditions. 

### Type of Measurement

Humidity measurement is a **direct measurement** of ambient conditions.  

## Measurement Equipment

The measurement equipment required for this procedure is a humidity data logger.

The data loggers should be installed in the ductwork with the air stream. The relative humidity data measured by the logger should be collected as hourly average values; not as instantaneous values. When operating under this method, the logger detects humidity fluctuations across the hour and stores the average value of those fluctuations, rather than the measured relative humidity value at an instantaneous point in time (which does not account for those changes).

{{< admonition type="tip" >}}
Most loggers can simultaneously measure temperature and humidity. If both variables are needed, relative humidity and temperature should be recorded at the same time. The same data loggers can be used to measure humidity when monitoring outdoor air temperature or system air temperature.
{{< /admonition >}}

{{< admonition type="tip" >}}
**If you are NYC agency personnel** and you require measurement tools, data loggers, meters or sensors, we offer equipment lending through the [Field Equipment Lending Library](https://nycenergytools.com/equipment/).
{{< /admonition >}}

The contents of this guide are largely based off the following equipment available in the [Field Equipment Lending Library](https://nycenergytools.com/equipment/):

<div class="equip-grid">

{{< equipment_link borrow="yes" type="equip" url="https://nycenergytools.com/equipment/temp-rh-mx2301/" imgUrl="https://nycenergytools.com/wp-content/uploads/2021/05/MX2301-5-300x300.jpg" title="MX2301 Data Logger" excerpt="Weatherproof data logger that measures and records temperature and relative humidity in outdoor environments. Using bluetooth technology you can transmit your data wirelessly to your mobile device." >}}

</div>

{{< admonition type="note" >}}
Please note that loggers will require setup with a computer or phone using the manufacturer’s proprietary software prior to installation and measurement logging and that older loggers will require the use of a cable to connect to a computer. Refer to the measurement equipment’s user manual for a detailed description of setup requirements.
{{< /admonition >}}
 
## Measurement Procedure

### 1. Prepare for Data Acquisition 

Use the manufacturer’s software to set up and launch the logger(s). Refer to the equipment’s user manual for detailed instructions on how to set up the logger. 

- Logging interval: 1-hour
- Date and time to start logging
- Date and time to stop logging
- Value(s) to measure: Relative Humidity (%), Temperature (F) if necessary
- Sampling interval: 1-second

<iframe class ="video" src="https://www.youtube.com/embed/D178xIAkoUA?si=_I0O_PikttSolMbI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 1. How to configure the MX2301 logger on HOBOConnect (6 min).</figcaption>

### 2. Install Equipment 

To accurately measure relative humidity of outside air, use a weatherproof data logger only.

1. Place the logger inside of the air duct as close as possible to the outside air damper. Alternatively, install the logger on the roof or somewhere with little foot traffic but away from direct sunlight.
2. To measure relative humidity of the air streams inside of an AHU, place the loggers inside of the ductwork. AHUs typically have panels that open to reach inside of ductwork.
3. There are up to four air streams inside an AHU: outside air, return air, mixed air, and supply/discharge air. A separate data logger should be used for each air stream.

{{< admonition type="warning" >}}
Do not place the loggers near heating or cooling coils.
{{< /admonition >}}

4. Confirm that the logger is recording, and that the sensor is accurately identifying the airstream’s temperature. If the logger has a screen, check that the temperature value is displayed on the logger screen. If the logger does not have a screen, use the software to connect to the logger and check the temperature it detects.

{{< admonition type="tip" >}}
Mixed air relative humidity is particularly challenging to measure, as some mixed air chambers make it difficult to position a data logger for accurate readings. The measurement uncertainty introduced is unknown. Experiment with different logger placements within the air chamber to improve accuracy.
{{< /admonition >}}

<iframe class ="video" src="https://www.youtube.com/embed/R9MDkohMD-E?si=1TIgLJijpgreQOtV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 2. How to install the MX2301 MX1101 UX100 temperature loggers (6 min).</figcaption>

{{< admonition type="warning" >}}
<strong>Do not remove the logger or sensors.</strong> If you remove the logger, you may need to start over with the setup and installation process.
{{< /admonition >}}

### 3. Verify Data is Being Collected 

Wait 24-48 hours to verify data collection. Return to the location of the measured equipment and use a laptop or phone with the manufacturer’s proprietary software installed to do the following: 

1. If necessary, connect the logger to a laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth.
2. Analyze the data with a plot graph. This can be done with the proprietary software or Microsoft Excel after exporting the dataset as a .csv file.
3. Determine whether the measured results align with the expected operation of the system or component.

<iframe class ="video" src="https://www.youtube.com/embed/EOb9EqQcRXY?si=NgkTRObjdxEty-Dg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 3. How to check data of bluetooth loggers using HOBOConnect (6 min).</figcaption>


### 4. Retrieve Measurement Equipment and Download All Final Data 
After verifying the logger is collecting data, do the following: 

1. Allow the logger to collect data for the remainder of the measurement period.
2. After the measurement period has concluded, remove the logger.
3. If necessary, connect the logger to a laptop or phone via USB cable. Otherwise, use the software to connect with the logger via Bluetooth. 
4. Download all data from the logger and save the file in the .csv format for analysis.

<iframe class ="video" src="https://www.youtube.com/embed/sF_c_7LHR5s?si=OPxNERIQhQqBhAo_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 4. How to extract data from the logger and convert to csv on HOBOConnect (5 min).</figcaption>

### 5. Process and Analyze Measured Data

Use the collected measurement data in the corresponding calculator file based on the type of component you are measuring:

#### Heat Exchanger

{{< page_hyperlink page_title="Air-to-air Heat Exchanger" url="/documents/components/air-to-air-heat-exchanger/#how-to-quantify" >}}

## Troubleshooting

This section provides some troubleshooting tips for the most common issues with equipment installation.

{{< admonition type="note" >}}
Air handling units come in all sizes, and there is no single method for properly installing all relative humidity loggers. Installing at the mixing plenum/chamber is the most challenging because you are trying to measure the mixed air temperature, which is the combination of return air and outside air.
{{< /admonition >}}

{{< details summary="Unexpected readings" >}}
Verify that the logger is calibrated. Re-calibrate the equipment if necessary. Adjust the placement of the logger and ensure that the logger is installed correctly and that there is no interference from heating and cooling coils.
{{< /details >}}