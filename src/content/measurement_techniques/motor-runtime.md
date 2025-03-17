---
title: Motor Runtime
type: measurement
layout: measurement_technique
measurement_technique_id: 4
excerpt: Use this technique to measure the hours of operation of a pump, fan or compressor motor with a data logger.
borrow_equipment_url: "https://nycenergytools.com/equipment/motor-on-off-logger-ux90-004/"
thumbnail_image: "/images/measurement-technique/motor-runtime/2024_0410_motor runtime MT_thumbnail.jpeg"
related_systems:
  - Boiler
  - Chilled Water Loop
  - Condenser Water Loop
  - Constant-speed, Constant-volume Air Handling Unit
  - Hot Water Loop
  - Steam Condensate Recovery System
  - Steam Distribution
associated_components:
  - Constant-speed, Constant-volume Fan and Motor
  - Constant-speed, Constant-volume Pump and Motor
related_calculations:
  - Pump Motor Energy Consumption
associated_calculations:
  - Pump Motor Energy Consumption
borrow_equipment_url: "https://nycenergytools.com/equipment/motor-on-off-logger-ux90-004/"
url: "/documents/measurement-technique/motor-runtime"
---

## Understanding Motor Runtime Measurements

This technique uses data loggers to take long-term measurements of the runtime duration for a constant or dual-speed motor. This technique can be used on motors with any end-use, including both air and water distribution. Accurate measurements can only be taken when data loggers are properly placed on the motor enclosure. The equipment’s on/off status is detected based on the AC magnetic field that is generated when the motors are running.

Measurements provide insight into the hours of operation of the motor. They should be taken at one-hour intervals. Motor runtime measurements should be paired with the spot measurement of true RMS power draw (kW) to calculate the energy consumption of the equipment. 

The duration of the long-term measurement should be a **minimum of six weeks** and data should be collected at **one-hour intervals**. Measurements should be taken when the system or component is operating under normal conditions.

### Type of Measurement

Measurement of the motor runtime is a **direct measurement** and determines the operating schedule of the motor.

## Measurement Equipment

The measurement equipment needed for this procedure is a motor on/off data logger. 

When a motor turns on, it generates a magnetic field. The motor on/off sensor operates by detecting the field and recording the length of time for which it is detected. The runtime period is considered complete once the motor turns off, the magnetic field weakens, and the sensor no longer detects the field. The logger records the amount of time the field was detected for (i.e., the motor was running) and documents the duration in its internal storage for each hour interval.

{{< admonition type="note" >}}
A separate data logger should be used for each motor if more than one is measured.
{{< /admonition >}} 

The contents of this guide are largely based off the following equipment available in the [Field Equipment Lending Library](https://nycenergytools.com/equipment/):

<div class="equip-grid">

{{< equipment_link type="equip" url="https://nycenergytools.com/equipment/motor-on-off-logger-ux90-004/" imgUrl="https://nycenergytools.com/wp-content/uploads/2021/04/HOBO-UX90-Motor-On-Off-Logger_UX90-004-300x300.jpg" title="Motor runtime logger" excerpt="Standalone data logger that monitors a motor’s on and off conditions using an internal AC magnetic field sensor." >}}

</div>

{{< admonition type="note" >}}
Please note that loggers require setup with a computer or phone using the manufacturer’s proprietary software prior to installation and measurement logging, and that older loggers require the use of a cable to connect to a computer. Refer to the measurement equipment’s user manual for a detailed description of setup requirements.
{{< /admonition >}}

## Measurement Procedure

### 1. Prepare for Data Acquisition

Use the manufacturer’s software to set up and launch the logger(s). Refer to the equipment’s user manual for detailed instructions on how to set up the logger.

- Logging interval: 1-hour
- Date and time to start logging
- Date and time to stop logging
- Value to measure: Runtime (minutes)

An example of how to setup the UX90-004 Onset HOBO Motor runtime logger is shown in the video below.

<iframe class ="video" src="https://www.youtube.com/embed/J472dkp5D3g?si=vVdPlas5NFqchzyf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 1. How to configure the motor on/off data logger on HOBOware (5 min).</figcaption>


### 2. Install Equipment

1. Confirm that the motor is operational.
2. Place the data logger on the motor casing in a non-hazardous location.
3. When the motor is running, calibrate the data logger (refer to the data logger’s user manual for instructions and requirements for calibration).
4. Visually confirm that the logger is recording, and that the sensor is accurately identifying whether the motor is running.

<iframe class ="video" src="https://www.youtube.com/embed/zQBLq7Wonqw?si=mIv92t7EOPY5994W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 2. How to calibrate and install the motor on/off data logger on a motor (4 min).</figcaption>

{{< admonition type="warning" >}}
**Do not remove the logger or sensors**. If you remove the logger, you may need to start over with the setup and installation process.
{{< /admonition >}}

### 3. Verify Data is Being Collected

Wait 24-48 hours to verify data collection. Return to the location of the measured equipment and use a laptop or phone with the manufacturer’s proprietary software installed to do the following:

1. If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth. 
2. Analyze the data with a plot graph. This can be done with the proprietary software or Microsoft Excel after exporting the dataset as a csv file.
3. Determine whether the results align with the expected operation of the system or component based on observed operational patterns or known equipment schedules.

<iframe class ="video" src="https://www.youtube.com/embed/JkNpQ81sdcQ?si=VUmDNF8eaWuB45n8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 3. How to check data of runtime loggers using HOBOware (8 min).</figcaption>

### 4. Retrieve Measurement Equipment and Download All Final Data

After verifying that the logger is collecting data, do the following:
1. Allow the logger to collect data for the remainder of the measurement period.
2. After the measurement period has concluded, remove the logger from the motor.
3. If necessary, connect the logger to a laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth. 
4. Use the proprietary software to stop the logger and end data collection. 
5. Download all data from the logger and save the file in the .csv format for analysis.

<iframe class ="video" src="https://www.youtube.com/embed/M_ky5lMORBk?si=EmUoRsGYXoxIzaqr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 4. How to extract data from the logger and convert to .csv file on HOBOware (5 min).</figcaption>

### 5. Process and Analyze Measured Data

Use the collected measurement data in the corresponding calculator file based on the type of component you are measuring:

#### Fan and Motor

{{< page_hyperlink page_title="Constant-speed, Constant-volume Fan and Motor" url="/documents/components/constant-speed-constant-volume-fan-and-motor/#how-to-quantify" >}}

#### Pump and Motor

{{< page_hyperlink page_title="Constant-speed, Constant-volume Pump and Motor" url="/documents/components/constant-speed-constant-volume-pump-motor/#how-to-quantify" >}}

## Troubleshooting

This section provides some troubleshooting tips for the most common issues with equipment installation.

{{< details summary="Detecting a signal from another motor" >}}
If the logger detects a signal from a nearby motor instead of the motor of interest, wait until the nearby motor turns off before calibrating the logger. This prevents interference from the electromagnetic field generated by the larger motor.
{{< /details >}}

{{< details summary="Unexpected readings" >}}
Confirm with building staff that the motor has been operating as expected. Verify that the logger is calibrated and re-calibrate the equipment if necessary. Ensure that the logger is installed correctly (i.e., placed directly on the motor housing, and not on the base of the motor).
{{< /details >}}