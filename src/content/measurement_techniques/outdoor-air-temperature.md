---
title: Outdoor Air Temperature
type: measurement
layout: measurement_technique
measurement_technique_id: 6
excerpt: Use this technique to measure outdoor air temperature (OAT) at one-hour intervals with a data logger.
borrow_equipment_url: "https://nycenergytools.com/equipment/temp-rh-mx2301/"
thumbnail_image: "/images/measurement-technique/outside-air-temperature/2024_0410_outdoor air temperature MT_thumbnail.jpeg"
related_systems:
  - Air-cooled Chiller
  - Air-to-air Energy Recovery
  - Boiler
  - Chilled Water Loop
  - Condenser Water Loop
  - Hot Water Loop
  - Steam Condensate Recovery
  - Steam Distribution
  - Variable-speed, Variable-volume Air Handling Unit
  - Water-cooled Chiller
associated_components: 
  - Air-to-air Heat Exchanger
  - Constant-speed, Constant-volume Fan and Motor
  - Variable-speed, Variable-volume Fan and Motor
  - Variable-speed, Variable-volume Pump and Motor
related_calculations:
  - Air-to-air Heat Exchanger Heat Transfer
  - Fan Motor Energy Consumption
  - Pump Motor Energy Consumption
associated_calculations:
  - Air-to-air Heat Exchanger Heat Transfer
  - Fan Motor Energy Consumption
  - Pump Motor Energy Consumption
url: "/documents/measurement-technique/outdoor-air-temperature"
---

## Understanding Outdoor Air Temperature Measurements

This technique uses weatherproof data loggers to take long-term measurements of the outdoor air (OAT) at one-hour intervals. This technique can be used to characterize the cooling or heating load for any temperature-dependent system such as chillers, boilers, variable-speed air handling units, and ventilation systems. Accurate measurements can only be taken when data loggers are properly installed.  

Measurements should be taken at one-hour intervals to provide insight into the temperature values that are driving the control mechanisms of the building equipment. Pair OAT with other information about the specific system’s operating conditions in order to calculate annual energy consumption.

The duration of the long-term measurement should be a minimum of six weeks with data being collected at one-hour intervals. Measurements should be taken when the system of interest is operating under normal conditions. 

{{< admonition type="note" >}}
For more information about how this data is used to estimate annual energy consumption, please refer to the calculation methodology of the type of equipment that relies on OAT.
{{< /admonition >}}

### Type of Measurement

Outdoor air temperature measurements are <strong>direct measurements</strong>.

### Measurement Equipment

The measurement equipment needed for this procedure is a temperature logger (or a combined temperature and humidity data logger).

Data loggers can be installed inside the ductwork of an air handling unit (AHU) or ventilation system so long as the airstream entering the unit is outside air. The logger must be placed as close as possible to the location where the outside air stream is entering the ductwork.

{{< admonition type="warning" >}}
If the logger is installed outdoors, **avoid locations that receive with too much direct sunlight** which can cause the logger to measure higher temperatures.  
{{< /admonition>}}

The temperature data measured by the logger should be collected as **hourly average values--not instantaneously**. With this method, the logger will detect temperature fluctuations across the hour and store the average value of those fluctuations, rather than the measured temperature value at a single point in time (which does not account for those changes).

{{< admonition type="tip" >}}
**If you are NYC agency personnel** and you require measurement tools, data loggers, meters or sensors, we offer equipment lending through the [Field Equipment Lending Library](https://nycenergytools.com/equipment/).
{{< /admonition >}}

This measurement technique makes use of the following equipment available in the [Field Equipment Lending Library](https://nycenergytools.com/equipment/):

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
- Values to measure: Temperature (OF), Relative Humidity (%) if necessary
- Sampling interval: 1-second

<iframe class ="video" src="https://www.youtube.com/embed/D178xIAkoUA?si=HH-cfaJJ3UuHsgjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 1. How to configure the MX2301 logger on HOBOConnect (6 min).</figcaption>


### 2. Install Equipment

1. Confirm that the outside air dampers are open and that there is outside air intake in the duct (if installing the logger directly in an AHU).
2. Place the logger in the outside air duct or outdoors, staying away from direct sunlight.
3. Confirm that the logger is recording, and that the sensor is accurately identifying the outside air temperature. If the logger has a screen, check the temperature value displayed there. If the logger does not have a screen, use the software to connect to the logger and check the temperature it detects
4. <strong>Do not move the logger after it has been installed.</strong>

<iframe class ="video" src="https://www.youtube.com/embed/R9MDkohMD-E?si=esVdMaU9A7nZe9oH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 2. How to install MX2301 MX1101 UX100 temperature loggers  (5 min).</figcaption>


### 3. Verify Data is Being Collected

Wait 24-48 hours to verify data collection. Return to the location of the measured equipment and use a laptop or phone with the manufacturer’s proprietary software installed to do the following: 

{{< admonition type="warning" >}}
<strong>Do not remove the logger or sensors.</strong> If you remove the logger, you may need to start over with the setup and installation process.
{{< /admonition >}}

1. If necessary, connect the logger to a laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth.
2. Analyze the data with a plot graph. This can be done with the proprietary software or Microsoft Excel after exporting the dataset as a .csv file.
3. Determine whether the measured results align with the expected OAT values based on observed weather trends or known outside air damper schedules.

<iframe class ="video" src="https://www.youtube.com/embed/EOb9EqQcRXY?si=tYwBZA5VY4FKKueW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 3. How to check data of bluetooth loggers using HOBOConnect (6 min).</figcaption>


### 4. Retrieve Measurement Equipment and Download All Final Data

After verifying that the logger is collecting data, do the following:  

1. Allow the logger to collect data for the remainder of the measurement period.
2. After the measurement period has concluded, remove the logger.
3. If necessary, connect the logger to a laptop or phone via USB cable. Otherwise, use the software to connect with the logger via Bluetooth.
4. Use the proprietary software to stop the logger and end data collection.
5. Download all data from the logger and save the file in the.csv file format for analysis.

<iframe class ="video" src="https://www.youtube.com/embed/sF_c_7LHR5s?si=2Gv23-7aOxzBf51F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 4. How to extract data from the logger and convert to csv on HOBOConnect (5 min).</figcaption>

### 5. Process and Analyze Measured Data

Use the collected measurement data in the corresponding calculator file based on the type of component you are measuring:

#### Heat Exchanger

{{< page_hyperlink page_title="Air-to-air Heat Exchanger" url="/documents/components/air-to-air-heat-exchanger/#how-to-quantify" >}}

#### Compressor and Motor

{{< page_hyperlink page_title="Compressor and Motor" url="/documents/components/compressor-and-motor/#how-to-quantify" >}}

#### Fan and Motor

{{< page_hyperlink page_title="Variable-speed, Variable-volume Fan and Motor" url="/documents/components/variable-speed-variable-volume-fan-and-motor/#how-to-quantify" >}}

#### Pump and Motor

{{< page_hyperlink page_title="Variable-speed, Variable-volume Pump and Motor" url="/documents/components/variable-speed-variable-volume-pump-and-motor/#how-to-quantify" >}}

## Troubleshooting

This section provides some troubleshooting tips for the most common issues with equipment installation. 

{{< details summary="Logger measures unexpected values" >}}
If the ambient temperature reading is higher or lower than expected, adjust the placement of the logger.
{{< /details >}}

{{< details summary="Logger screen is blank" >}}
The logger might have an energy saving feature that conserves battery life by turning off the screen. Try pressing one of the logger buttons or connecting to it with your phone or laptop.​ If the screen remains blank, try replacing the battery. If it remains blank, reach out to our equipment specialist for a replacement.
{{< /details >}}