---
title: Motor Runtime
type: measurement
layout: measurement_technique
measurement_technique_id: 4
excerpt: This technique uses data loggers to measure the duration a motor remains on. This is applicable to any motor including compressor, fan and pump motors.
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
borrow_equipment_url: "https://nycenergytools.com/equipment/motor-on-off-logger-ux90-004/"
url: "/documents/measurement-technique/motor-runtime"
---

## Description of Motor Runtime

This technique uses data loggers to take long-term measurements of the runtime duration for a constant or dual-speed motor. This technique can be used on motors with any end-use, including both air and water distribution. Accurate measurements can only be taken when data loggers are properly placed on the motor enclosure. The equipment’s on/off status is detected based on the AC magnetic field that is generated when the motors are running.

Measurements should be taken at one-hour intervals and will provide insight into the hours of operation of the motor. Motor runtime measurements should be paired with the spot measurement of true RMS power draw (kW) to calculate the energy consumption of the equipment. 

The duration of the long-term measurement should be a minimum of six weeks and data should be collected at one-hour intervals. Measurements should be taken when the system or component is operating under normal conditions.

### Type of Measurement

<strong>Direct</strong>

This is a direct measurement of motor runtime and determines the operating schedule of the motor.

### Equipment

The measurement equipment needed for this procedure is a motor on/off data logger. Refer to the [FELL catalog](https://nycenergytools.com/equipment/) to identify data loggers that measure motor runtime. The contents of this guide are largely based off of the [UX90-004 Onset HOBO Motor runtime logger](https://nycenergytools.com/equipment/motor-on-off-logger-ux90-004/), which can be found and borrowed through NYC Energy Tools. 

When a motor turns on, it generates a magnetic field. The motor on/off sensor operates by detecting the field and recording the length of time for which it is detected. The runtime period is considered complete once the motor turns off, the magnetic field weakens, and the sensor no longer detects the field. The logger will record the amount of time the field was detected for (i.e., the motor was running) and document the duration in its internal storage for each hour interval. A separate data logger should be used for each motor if more than one is measured. 

Please note that loggers will require setup with a computer or phone using the manufacturer’s proprietary software prior to installation and measurement logging and that older loggers will require the use of a cable to connect to a computer.  Refer to the measurement equipment’s user manual for a detailed description of setup requirements.

## Measurement Steps

### 1. Preparation for Data Acquisition

Use the manufacturer’s software to set up and launch the logger(s). Refer to the equipment’s user manual for detailed instructions on how to set up the logger.

- Logging interval: 1-hour
- Date and time to start logging
- Date and time to stop logging
- Value to measure: Runtime (minutes)

An example of how to setup the UX90-004 Onset HOBO Motor runtime logger is shown in the video below.

<a href="https://www.youtube.com/embed/J472dkp5D3g?si=vlqnvQ-ophL4v08h">
<figure class="figure mb-3 mt-3 mx-auto">
  <img src="/images/measurement-technique/motor-runtime/Motor Runtime Figure 1 Updated.png" class="figure-img img-fluid rounded zoom" alt="Video on how to set up HOBO Motor Runtime Logger.">
  <figcaption class="figure-caption text-left">Figure 1. Video on how to set up HOBO Motor Runtime Logger.</figcaption>
</figure>
</a>

### 2. Installation of Equipment

1. Confirm that the motor is operational.
1. Place the data logger on the motor casing in a non-hazardous location.
1. When the motor is running, calibrate the data logger (refer to the data logger’s user manual for instructions and requirements for calibration).
1. Visually confirm that the logger is recording, and that the sensor is accurately identifying whether or not the motor is running.

<a href="https://www.youtube.com/watch?v=zQBLq7Wonqw">
<figure class="figure mb-3 mt-3 mx-auto">
  <img src="/images/measurement-technique/motor-runtime/Motor Runtime Figure 2 Updated.png" class="figure-img img-fluid rounded zoom" alt="Figure 1. Onset HOBO UX90-004 installed on a pump motor casing and measuring runtime.">
  <figcaption class="figure-caption text-left">Figure 2. Onset HOBO UX90-004 installed on a pump motor casing and measuring runtime.</figcaption>
</figure>
</a>

### 3. Verify Data is Being Collected

Wait 24-48 hours to verify data collection. Return to the location of the measured equipment and use a laptop or phone with the manufacturer’s proprietary software installed to do the following:

<div class="alert alert-warning" role="alert">
  <b>Do not remove the logger.</b> If you remove the logger, you may need to start over with the setup and installation process.
</div>

1. If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth. 
1. Analyze the data with a plot graph. This can be done with the proprietary software or Microsoft Excel after exporting the dataset as a csv file.
1. Determine if the results align with the expected operation of the system or component based on observed operational patterns or known equipment schedules.

<a href="https://www.youtube.com/watch?v=JkNpQ81sdcQ">
<figure class="figure mb-3 mt-3 mx-auto">
  <img src="/images/measurement-technique/motor-runtime/Motor Runtime Figure 3 Updated.png" class="figure-img img-fluid rounded zoom" alt="Figure 2. Plot graph of motor runtime data from the Onset HOBO UX90-004 data logger. Software used is HOBOware Free.">
  <figcaption class="figure-caption text-left">Figure 3. Plot graph of motor runtime data from the Onset HOBO UX90-004 data logger. Software used is HOBOware Free.</figcaption>
</figure>
</a>

### 4. Retrieve Measurement Equipment and Download All Final Data

After verifying that the logger is collecting data, do the following:
1. Allow the logger to collect data for the remainder of the measurement period.
1. After the measurement period has concluded, remove the logger from the motor.
1. If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth. 
1. Use the proprietary software to Stop the logger and end data collection. 
1. Download all data from the logger and save the file in the .csv format for analysis.

<a href="https://www.youtube.com/watch?v=M_ky5lMORBk">
<figure class="figure mb-3 mt-3 mx-auto">
  <img src="/images/measurement-technique/motor-runtime/Motor Runtime Figure 4 Updated.png" class="figure-img img-fluid rounded zoom" alt="Figure 3. Final data table in .csv format. Data was extracted from the logger using HOBOware Free and exported for analysis.">
  <figcaption class="figure-caption text-left">Figure 4. Final data table in .csv format. Data was extracted from the logger using HOBOware Free and exported for analysis.</figcaption>
</figure>
</a>

## Troubleshooting 

<strong>Problem 1: </strong>Detecting the Signal from Another Motor

<div class="alert alert-warning" role="alert">
<strong>Solution: </strong>If the logger is detecting the signal from another motor that is close to the motor of interest, wait until that motor turns off before calibrating the logger to avoid detecting the electromagnetic field that is generated by a larger motor.
</div>

<strong>Problem 2: </strong>Unexpected Readings

<div class="alert alert-warning" role="alert">
<strong>Solution: </strong>Confirm with building staff that the motor has been operating as expected. Verify that the logger is calibrated and re-calibrate the equipment if necessary. Ensure that the logger is installed correctly (i.e., placed directly on the motor housing, and not on the base of the motor).
</div>