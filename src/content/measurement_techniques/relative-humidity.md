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

This technique uses data loggers to take long-term measurements of relative humidity (% RH) at one-hour intervals. This technique can be used to characterize the performance of heat/energy recovery ventilators. Data is used for calculations such as regression models to estimate the heat and energy recovered by an air-to-air heat/energy recovery system. For a more detailed description of how relative humidity data is used in calculations please refer to the <a href="/documents/systems/air-to-air-energy-recovery">Air-to-Air Energy Recovery System</a> and calculation methodology of the system being measured.

Relative humidity measurements should be taken at one-hour intervals and should be paired with the temperature of the system if both variables are required to characterize performance. Measurements should be taken at one-hour average interval and not instantaneous values. When taking one-hour measurements, the logger will detect humidity several times every hour and store the average value. Sometimes humidity can fluctuate over a one-hour period, but the instantaneous value will not indicate that change.  

The duration of the long-term measurement should be a minimum of six weeks. Measurements should be when the system of interest is operating under normal conditions. 

### Type of Measurement

<strong>Direct</strong> 

### Measurement Equipment to Use 

The measurement equipment needed for this procedure is a humidity data logger. Most loggers offered at the FELL can measure temperature and humidity at the same time. Relative humidity and temperature measurements should be taken at the same time if both variables are required. If outside air temperature or system air temperature, the same data loggers can be used to measure humidity. Refer to the [FELL catalog](https://nycenergytools.com/equipment/) to identify temperature/humidity data loggers. The contents of this guide are largely based off the [Onset HOBO MX2301 logger](https://nycenergytools.com/equipment/temp-rh-mx2301/), which can be found and borrowed through FELL. 
 
The data loggers should be installed in the ductwork with the air stream. The relative humidity data measured by the logger should be collected as hourly average values and not instantaneous. With this method, the logger will detect humidity fluctuations across the hour and store the average value of those fluctuations, rather than the measured relative humidity value at an instantaneous point in time (which does not account for those changes).

Please note that loggers will require setup with a computer or phone using the manufacturer’s proprietary software prior to installation and measurement logging and that older loggers will require the use of a cable to connect to a computer. Refer to the measurement equipment’s user manual for a detailed description of setup requirements. 
 
## Measurement Steps

### 1. Preparation for data acquisition 

Use the manufacturer’s software to set up and launch the logger(s). Refer to the equipment’s user manual for detailed instructions on how to set up the logger. 

- Logging interval: 1-hour
- Date and time to start logging
- Date and time to stop logging
- Value(s) to measure: Relative Humidity (%), Temperature (F) if necessary
- Sampling interval: 1-second

<iframe class ="video" src="https://www.youtube.com/embed/D178xIAkoUA?si=_I0O_PikttSolMbI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Figure 1. How to configure the MX2301 logger on HOBOConnect. (Click to Start Video)</figcaption>

### 2. Installation of equipment 

1. To accurately measure relative humidity of outside air, use a weatherproof data logger only.
2. Place the logger inside of the air duct as close as possible to the outside air damper. Alternatively install the logger on the roof or somewhere with little foot traffic and away from direct sunlight.
3. To measure relative humidity of the air streams inside of an AHU, place the loggers inside of the ductwork. AHUs typically have panels that open to reach inside of ductwork.
4. There are up to four air streams inside an AHU: outside air, return air, mixed air and supply/discharge air. To measure some or all the air streams a different data logger should be used for each air stream.
5. Confirm that the logger is recording, and that the sensor is accurately identifying the airstream’s temperature. If the logger has a screen check the temperature value on the logger screen. If the logger does not have a screen, then use the software to connect to the logger and check the temperature it detects.

<div class="alert alert-warning" role="alert">
<strong>Do not place the loggers near the heating and cooling coils.</strong> Mixed air relative humidity is the most difficult data to collect because some mixed air chambers make it difficult to install a data logger to accurately capture mixed air. The measurement uncertainty introduced is unknown and CUNY BPL suggests experimenting with different logger placements within the air chamber.
</div>

<iframe class ="video" src="https://www.youtube.com/embed/R9MDkohMD-E?si=1TIgLJijpgreQOtV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Figure 2. How to install the MX2301 MX1101 UX100 temperature loggers. (Click to Start Video)</figcaption>

### 3. Verify data is being collected 

Wait 24-48 hours to verify data collection. Return to the location of the measured equipment and use a laptop or phone with the manufacturer’s proprietary software installed to do the following: 

<div class="alert alert-warning" role="alert">
<strong>Do not remove the logger or sensors.</strong> If you remove the logger, you may need to start over with the setup and installation process.
</div>

1. If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth.
2. Analyze the data with a plot graph. This can be done with the proprietary software or Microsoft Excel after exporting the dataset as a .csv file.
3. Determine if the measured results align with the expected operation of the system or component.

<iframe class ="video" src="https://www.youtube.com/embed/EOb9EqQcRXY?si=NgkTRObjdxEty-Dg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Figure 3. How to check data of bluetooth loggers using HOBOConnect. (Click to Start Video)</figcaption>


### 4. Retrieve measurement equipment and download all final data 
After verifying the logger is collecting data, do the following: 

1. Allow the logger to collect data for the remainder of the measurement period.
2. After the measurement period has concluded, remove the logger.
3. If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the logger via Bluetooth. 
4. Download all data from the logger and save the file in the .csv format for analysis.

<iframe class ="video" src="https://www.youtube.com/embed/sF_c_7LHR5s?si=OPxNERIQhQqBhAo_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Figure 4. How to extract data from the logger and convert to csv on HOBOConnect. (Click to Start Video)</figcaption>

## Troubleshooting Our Measurement Equipment

Air handling units come in all sizes and there is no single method on how to properly install the relative humidity loggers. Installing at the mixing plenum/chamber is the most challenging because you are trying to measure the mixed air temperature which is the combination of return air and outside air.

<strong>Problem:</strong> the logger is measuring unexpected values 

<div class="alert alert-warning" role="alert">
<strong>Solution:</strong> Verify that the logger is calibrated and re-calibrate the equipment if necessary. Readjust the placement of the logger and ensure that the logger is installed correctly (i.e., there is no interference from heating and cooling coils).   
</div>
