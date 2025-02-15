---
title: True RMS Power
type: measurement
layout: measurement_technique
measurement_technique_id: 1
excerpt: Use this technique to measure power draw (true RMS power) at one-hour intervals using a data logger.
borrow_equipment_url: "https://nycenergytools.com/equipment/energy-logger-2/"
thumbnail_image: "/images/measurement-technique/true-RMS-power/2024_0410_true RMS power MT_thumbnail.jpeg"
related_systems:
  - Air-to-air Energy Recovery
  - Air-cooled Chiller
  - Boiler
  - Chilled Water Loop
  - Condenser Water Loop
  - Electrical Distribution
  - Hot Water Loop
  - Steam Condensate Recovery
  - Steam Distribution
  - Water-cooled Chiller
  - Variable-speed, Variable-volume Air Handling Unit
associated_components:
  - Air-to-air Heat Exchanger
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
url: "/documents/measurement-technique/true-rms-power"
---

## Understanding Hourly True RMS Power Measurements

This technique uses a data logger to take long- term measurements of the electrical energy (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>) and power draw (kW) of a system or component at one- hour intervals. Measurements are taken at the electrical distribution system (more specifically at a panelboard , power panel or switchgear) that serves the system or component. Measurement data is used to estimate the annual energy consumption of the system or component. 

Data loggers and power meters use instantaneous measurements of current and voltage to calculate the instantaneous power draw. Over time, the logger or meter calculates the average power draw. Manufacturers of measurement equipment use different calculations for power draw. In order to compare data obtained from different measurement equipment it is important to understand the calculation used by the equipment. The manufacturer’s user manual or technical specifications discuss these features in detail. 

The duration of the long-term measurement and when to measure is dependent on the system and the operation of the building. The best practice is a minimum of six weeks and data should be collected at one-hour intervals; longer measurement periods are encouraged for deeper analysis of the equipment. Measurements should be taken when the system or component is operating under normal conditions. 

### Type of Measurement

<strong>Electrical energy measurements are direct measurements of energy</strong>, and the obtained data can be used to calculate the annual energy consumption of the system or component.

This methodology can also be used as a <strong>proxy measurement</strong> of operational hours of the system or component. Daily or weekly models can be developed to better characterize the equipment. 

## Measurement Equipment

The measurement equipment needed for this procedure is an energy data logger that has the capacity to measure AC voltage and current.

The sensors used to measure AC current are known as current transformers. This is because they operate like the transformers used by utility companies to step-up and step-down voltage. Alternating current in the conductor (the wire that is being measured) induces a voltage on the current transformer which then produces a current signal that the data logger detects and records. However, unlike utility transformers, the measurement equipment only transforms a tiny portion of the current flowing through the wire that is being measured. AC voltage is measured with voltage leads (usually alligator clips).

If you are NYC agency personnel and you require measurement tools, data loggers, meters or sensors, NYC Energy Tools offers equipment lending through it's [Field Equipment Lending Library](https://nycenergytools.com/equipment/). The following equipment is available for gathering the data outlined in this measurement technique:

<div class="equip-grid">

{{< equipment_link url="https://nycenergytools.com/equipment/energy-logger-2/" imgUrl="https://nycenergytools.com/wp-content/uploads/2021/05/Energy_Logger_-_Elite_Pro-5-300x300.jpg" title="Enegry Data Logger" excerpt="Provides a measurement of true RMS power from voltage and current inputs and records long-term power (kW) and energy (kWh) measurements. Requires ELOG19 software and a USB connection cable for programming and downloading data files." >}}

{{< equipment_link url="https://nycenergytools.com/equipment/energy-logger-2/" imgUrl="https://nycenergytools.com/wp-content/uploads/2021/05/Energy_Logger_-_Elite_Pro-5-300x300.jpg" title="Enegry Data Logger" excerpt="Provides a measurement of true RMS power from voltage and current inputs." >}}

{{< equipment_link url="https://nycenergytools.com/equipment/energy-logger-2/" imgUrl="https://nycenergytools.com/wp-content/uploads/2021/05/Energy_Logger_-_Elite_Pro-5-300x300.jpg" title="Enegry Data Logger" excerpt="Provides a measurement of true RMS power from voltage and current inputs and records long-term power (kW) and energy (kWh) measurements." >}}

</div>

{{< admonition type="note" message="Please note that loggers will require setup with a computer or phone using the manufacturer’s proprietary software prior to installation and measurement logging and that older loggers will require the use of a cable to connect to a computer. Refer to the measurement equipment’s user manual for a detailed description of setup requirements." >}}

{{< admonition type="warning" message="Please note that loggers will require setup with a computer or phone using the manufacturer’s proprietary software prior to installation and measurement logging and that older loggers will require the use of a cable to connect to a computer. Refer to the measurement equipment’s user manual for a detailed description of setup requirements." >}}

{{< admonition type="tip" message="Some kind of tip in this message box" >}}

## Measurement Steps

### 1. Preparation for Data Acquisition

The following sections assume a data logger is being used, for details on measurement with a power meter refer to the <strong>One-time true RMS power</strong> guide. 

Use the manufacturer’s software to set up and launch the logger(s). Refer to the equipment’s user manual for detailed instructions on how to set up the logger. 

- Logging interval: 1-hour
- Date and time to start logging
- Date and time to stop logging
- Values to measure: Power (kW), Energy (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>)

An example of how to setup the Dent EliteProXC power data logger is shown in the video below.

<iframe class ="video" src="https://www.youtube.com/embed/HS9k_L59IX8?si=u0v1ic6UIHQZa1wm" title="YouTube video player" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Figure 1. How to configure the Dent EliteProXC Power Meter on ELOG software. (Click to Start Video)</figcaption>

### 2. Installation of Equipment

1.  Confirm that the equipment is operational.
2.  Identify if the distribution system supplied electricity to other loads that are not relevant to the project (to avoid measuring unwanted loads).
3. Identify the wiring configuration of the distribution system. This will determine how to set up the logger and sensors.
4. Clamp the sensors around the electrical wires. Make sure they are facing the right direction, or else the current may be recorded with negative values.
5. Based on the wiring configuration and instructions from the equipment’s user manual, install the sensor and logger to measure the power and energy to the system.

This section illustrates the most common wire configurations for a panelboard and how the Dent EliteProXC data logger is connected.  

<iframe class ="video" src="https://www.youtube.com/embed/Fel5t-KzTO0?si=HERY5bBQEBAfEknK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Figure 2. How to install the Dent EliteProXC Power Meter. (Click to Start Video)</figcaption>

### 3. Verify Data is Being Collected

Wait 24-48 hours to verify data collection. Return to the location of the measured equipment and use a laptop or a phone with the manufacturer’s proprietary software installed to do the following: 

<div class="alert alert-warning" role="alert">
<strong>Do not remove the logger or sensors.</strong> If you remove the logger, you may need to start over with the setup and installation process.
</div>

1. If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth.
2. Analyze the data with a plot graph. This can be done with the proprietary software or Microsoft Excel after exporting the dataset as a .csv file.
3. Determine if the results align with the expected operation of the system or component based on observed operational patterns or known equipment schedules.

<iframe class ="video" src="https://www.youtube.com/embed/gbChGMLI7W8?si=2yRIMQ0PCGEJHRpq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Figure 3. How to check data on the power meter using ELOG19. (Click to Start Video)</figcaption>

### 4. Retrieve Measurement Equipment and Download Data

After verifying that the logger is collecting data, do the following: 

1. Allow the logger to collect data for the remainder of the measurement period.
2. After the measurement period has concluded, remove the logger from the panel.
3. If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth.
4. Use the proprietary software to stop the logger and end data collection.
5. Download all data from the logger and save the file in the .csv file format for analysis.

<iframe class ="video" src="https://www.youtube.com/embed/fLDJ8E2pa9A?si=E3pn5GmWDnfA0c5I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Figure 4. How to extract data from the power meter and convert to .csv on ELOG software. (Click to Start Video)</figcaption>

### 5. Process and Analyze Measured Data

Use the collected measurement data in the corresponding calculator file based on the type of component you are measuring:

{{< downloadable_file url="https://www.dropbox.com/scl/fi/kyy1x5bkp1yeobfj8af9n/air_to_air_heat_transfer_calculator_2023_0706.xlsx?rlkey=q0gqlcskk7aa3ffclirfx2el5&st=m32n6yzd&dl=1" title="Air to Air Heat Transfer" excerpt="Uses measured air flow rate, fan power and runtime, and temperature to calculate total annual heat transfer and energy savings for an ERV." >}}

## Troubleshooting Our Measurement Equipment

<strong>Problem 1:</strong> Unexpected Negative Readings

<div class="alert alert-warning" role="alert">
<strong>Solution:</strong> Confirm that all current transformers (CTs) are facing the correct direction.
</div>

<strong>Problem 2:</strong> Unexpected Low Values

<div class="alert alert-warning" role="alert">
<strong>Solution:</strong> Confirm that the current rating for the electrical distribution system is within the range of the current rating for the CTs.
</div> 

<strong>Problem 3:</strong> CTs Do Not Fit in Panelboard Casing

<div class="alert alert-warning" role="alert">
<strong>Solution:</strong> If it is safe to do so, trace the wires outside the panel board and install the sensors there. If this is unsafe or not possible to do, consider following an alternative approach of measuring current to the system with either instantaneous true power or nameplate data as a proxy for total power draw and energy consumption.
</div>
