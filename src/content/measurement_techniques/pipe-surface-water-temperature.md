---
title: Pipe Surface Water Temperature
type: measurement
layout: measurement_technique
measurement_technique_id: 16
excerpt: Use this technique to measure the temperature of water inside a piping system at one-hour intervals with a data logger.
borrow_equipment_url: ""
thumbnail_image: "/images/measurement-technique/pipe-surface-water-temperature/2024_0410_pipe surface water temperature MT_thumbnail.jpeg"
related_systems:
  - Air-cooled Chiller
  - Water-cooled Chiller
  - Waterside Economizer
associated_components: 
  - Liquid-to-liquid Heat Exchanger
related_calculations:
  - Liquid-to-liquid Heat Exchanger Heat Transfer
associated_calculations:
  - Liquid-to-liquid Heat Exchanger Heat Transfer
url: "/documents/measurement-technique/pipe-surface-water-temperature"
---

## Understanding Pipe Surface Water Temperature Measurements

This technique uses a 4-channel analog logger with a thermocouple sensor to record long-term water temperature (°F) measurements at one-hour intervals. It measures fluid temperature from the surface of a pipe rather than directly in the water stream. The collected data can be used to determine the cooling load and heat rejected by a cooling plant, the heat load delivered by a heating plant, and the heat recovered by an economizer. For more details on how collected data is used for calculations, refer to the calculation methodology of the system being measured. 

Measurements should be taken at **one-hour intervals** rather than as instantaneous values. When recording hourly measurements, the logger captures multiple temperature readings throughout the hour and stores the average value. Since temperature can fluctuate within an hour, an instantaneous reading may not accurately reflect these variations.  

The duration of the long-term measurement should be a minimum of six weeks. Measurements should be taken when the system of interest is operating under normal conditions. 

### Type of measurement 

Measuring pipe surface temperature is a **proxy measurement** of the fluid temperature.

## Measurement Equipment

The measurement equipment needed for this procedure is a 4-channel analog logger that is compatible with thermocouple sensors. Thermocouple sensors are specially designed to measure very high temperatures, such as as those within the flue stack of a boiler, and very low temperatures, such as those on the surface of water pipes for a chiller system. Different thermocouple sensors are used to measure hot or cold pipes.

{{< admonition type="note" >}}
For sensors installed at a pipe surface, the sensor must be secured with thermal tape and the pipe surface should be cleaned prior to installation.
{{< /admonition >}} 

{{< admonition type="tip" >}}
**If you are NYC agency personnel** and you require measurement tools, data loggers, meters or sensors, we offer equipment lending through the [Field Equipment Lending Library](https://nycenergytools.com/equipment/).
{{< /admonition >}}

The contents of this guide are largely based off the following equipment available in the [Field Equipment Lending Library](https://nycenergytools.com/equipment/):

<div class="equip-grid">

{{< equipment_link borrow="yes" type="equip" url="https://nycenergytools.com/equipment/4-channel-analog-data-logger/" imgUrl="https://nycenergytools.com/wp-content/uploads/2021/05/4-channel-logger-1-300x300.jpg" title="4-Channel Analog Data Logger" excerpt="An analog logger that supports up to four external sensors for measuring temperature, current, voltage, air flow, pressure and more in one single logger." >}}

{{< equipment_link borrow="yes" type="equip" url="https://nycenergytools.com/equipment/thermocouple-sensor/" imgUrl="https://nycenergytools.com/wp-content/uploads/2021/05/Type-T-6-ft-Beaded-Thermocouple-Sensor_TC6-T-5-300x225.jpg" title="Thermocouple Sensor" excerpt="Beaded thermocouple probe, teflon-insulated and responsive over a range of -200 to 100℃ (-328 to 212℉) with an initial accuracy of +/- 1.5℃ (+/-2.7℉)." >}}

</div>

{{< admonition type="note" >}}
Please note that loggers require setup with a computer or phone using the manufacturer’s proprietary software prior to installation and measurement logging, and that older loggers require the use of a cable to connect to a computer. Refer to the measurement equipment’s user manual for a detailed description of setup requirements.
{{< /admonition >}}

## Measurement Procedure 

### 1. Prepare for Data Acquisition 

Use the manufacturer’s software to set up and launch the logger(s). Refer to the equipment’s user manual for detailed instructions on how to set up the logger. 

- Logging interval: 1-hour4
- Date and time to start logging
- Date and time to stop logging
- Value(s) to measure: Temperature (oF)
- Activate input channels on the logger
- Type of thermocouple sensor (K-type or T-type)
- Sampling interval: 1-second

<iframe class ="video" src="https://www.youtube.com/embed/fUjz0qj7GVM?si=29uKvwk8x1thOh8X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 1. How to configure 4-channel analog logger with CT on HOBOware (6 min).</figcaption>

### 2. Install Equipment 

1. Connect the sensors to the data logger.
2. Place the data logger near the pipes. Avoid adhering the logger to the pipe itself.
3. Clean the surface of the pipe where the sensor will be placed, removing any dust.
4. Place the sensor on the clean surface and apply thermal tape to fully cover the sensor.

<iframe class ="video" src="https://www.youtube.com/embed/FWgM0-VSlEQ?si=jF6QAKaKCVq-TZEQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 2. How to install the 4-channel analog logger with CT onsite (5 min).</figcaption>

### 3. Verify Data is Being Collected 

Wait 24-48 hours to verify data collection. Return to the location of the measured equipment and use a laptop or phone with the manufacturer’s proprietary software installed to do the following:

{{< admonition type="warning" >}}
**Do not remove the logger or sensors**. If you remove the logger, you may need to start over with the setup and installation process.
{{< /admonition >}}

1. If necessary, connect the logger to a laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth.
2. Analyze the data with a plot graph. This can be done with proprietary software or Microsoft Excel after exporting the dataset as a .csv file.
3. Determine whether measured results align with the expected operation of the system or component.

<iframe class ="video" src="https://www.youtube.com/embed/KyLO5ARQbuA?si=Xg596FGRsPzI_FGD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 3. How to check data of loggers using HOBOware (9 min).</figcaption>


### 4. Retrieve Measurement Equipment and Download All Final Data 

After verifying that the logger is collecting data, do the following:

1. Allow the logger to collect data for the remainder of the measurement period.
2. After the measurement period has concluded, remove the logger.
3. If necessary, connect the logger to a laptop or phone via USB cable. Otherwise, use the software to connect with the logger via Bluetooth.
4. Use the proprietary software to stop the logger and end data collection.
5. Download all data from the logger and save the file in the.csv file format for analysis.

<iframe class ="video" src="https://www.youtube.com/embed/47hqmeOh5X4?si=sMOFZCL0J-D6wtmD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 4. How to extract data from the logger using HOBOware (5 min).</figcaption>

### 5. Process and Analyze Measured Data

Use the collected measurement data in the corresponding calculator file based on the type of component you are measuring:

#### Heat Exchanger

{{< page_hyperlink page_title="Liquid-to-liquid Heat Exchanger" url="/documents/components/liquid-to-liquid-heat-exchanger/#how-to-quantify" >}}


## Troubleshooting

This section provides some troubleshooting tips for the most common issues with equipment installation.

{{< details summary="Logger measures unexpected values" >}}
Verify that the logger is calibrated. Re-calibrate the equipment if necessary. Clean the surface of the pipe with a damp cloth to wipe off any dirt and grime. Ensure the sensor is covered with thermal tape to prevent measurement of the ambient air around the pipe.
{{< /details >}}
