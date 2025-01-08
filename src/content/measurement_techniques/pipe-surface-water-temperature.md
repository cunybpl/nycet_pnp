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

This technique uses a 4-channel analog logger with a thermocouple sensor to take long-term measurements of water temperature (F) at one-hour intervals. This technique can be used to measure the fluid temperature from the surface of a pipe and not directly in the water stream. Data can be used to determine the cooling load and heat rejected to the outdoors by a cooling plant, the heat load delivered by a heating plant and heat recovered by an economizer. For more details on how collected data is used for calculations refer to the calculation methodology of the system being measured. 

Measurements should be taken at one-hour intervals and not instantaneous values. When taking one-hour measurements, the logger will detect the temperature several times every hour and store the average value. Sometimes temperature can fluctuate over a one-hour period, but the instantaneous temperature value will not indicate that change.  

The duration of the long-term measurement should be a minimum of six weeks. Measurements should be when the system of interest is operating under normal conditions. 

### Type of measurement 

<strong>Proxy</strong> 

### Measurement Equipment to Use

The measurement equipment needed for this procedure is a 4-channel analog logger that is compatible with thermocouple sensors. Thermocouple sensors are specially designed to measure very high temperatures such as the flue stack of a boiler and very low temperatures such as the surface of water pipes for a chiller system. Different thermocouple sensors are used to measure hot or cold pipes. Refer to the [FELL catalog](https://nycenergytools.com/equipment/) to identify the correct loggers and sensors for your project. The contents of this guide are largely based off the Onset HOBO UX120-14M logger and the TC6-T sensor, which can be found and borrowed through FELL. 
 
For sensors installed at a pipe surface the sensor must be secured with thermal tape and the pipe surface should be cleaned prior to installation. Please note that loggers will require setup with a computer or phone using the manufacturer’s proprietary software prior to installation and measurement logging and that older loggers will require the use of a cable to connect to a computer. Refer to the measurement equipment’s user manual for a detailed description of setup requirements.  

## Measurement steps 

### 1. Preparation for data acquisition 

Use the manufacturer’s software to set up and launch the logger(s). Refer to the equipment’s user manual for detailed instructions on how to set up the logger. 

- Logging interval: 1-hour4
- Date and time to start logging
- Date and time to stop logging
- Value(s) to measure: Temperature (oF)
- Activate input channels on the logger
- Type of thermocouple sensor (K-type or T-type)
- Sampling interval: 1-second

<iframe class ="video" src="https://www.youtube.com/embed/fUjz0qj7GVM?si=29uKvwk8x1thOh8X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Figure 1. How to configure 4-channel analog logger with CT on HOBOware. (Click to Start Video)</figcaption>


### 2. Installation of equipment 

1. Connect the sensors to the data logger.
2. Place the data logger near the pipes. Avoid adhering the logger to the pipe itself.
3. Clean the surface of the pipe where the sensor will be placed and remove any dust on the pipe surface.
4. Place the sensor on the clean surface and apply thermal tape to fully cover the sensor.

<iframe class ="video" src="https://www.youtube.com/embed/FWgM0-VSlEQ?si=jF6QAKaKCVq-TZEQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Figure 2. How to install the 4-channel analog logger with CT onsite. (Click to Start Video)</figcaption>

### 3. Verify data is being collected 

Wait 24-48 hours to verify data collection. Return to the location of the measured equipment and use a laptop or phone with the manufacturer’s proprietary software installed to do the following: 

<div class="alert alert-warning" role="alert">
<strong>Do not remove the logger or sensors.</strong> If you remove the logger, you may need to start over with the setup and installation process.
</div>

1. If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth.
2. Analyze the data with a plot graph. This can be done with proprietary software or Microsoft Excel after exporting the dataset as a .csv file.
3. Determine if measured results align with the expected operation of the system or component.

<iframe class ="video" src="https://www.youtube.com/embed/KyLO5ARQbuA?si=Xg596FGRsPzI_FGD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Figure 3. How to check data of loggers using HOBOware. (Click to Start Video)</figcaption>


### 4. Retrieve measurement equipment and download all final data 

After verifying that the logger is collecting data, do the following:

1. Allow the logger to collect data for the remainder of the measurement period.
2. After the measurement period has concluded, remove the logger.
3. If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the logger via Bluetooth.
4. Use the proprietary software to Stop the logger and end data collection.
5. Download all data from the logger and save the file in the.csv file format for analysis.

<iframe class ="video" src="https://www.youtube.com/embed/47hqmeOh5X4?si=sMOFZCL0J-D6wtmD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Figure 4. How to extract data from the logger using HOBOware. (Click to Start Video)</figcaption>


## Troubleshooting Our Measurement Equipment

<strong>Problem:</strong> the logger is measuring unexpected values 

<div class="alert alert-warning" role="alert">
<strong>Solution:</strong> Verify that the logger is calibrated and re-calibrate the equipment if necessary. The surface of the pipe should be cleaned with a damp cloth to wipe off any dirt and grime. The sensor should be covered with thermal tape to prevent measurement of the ambient air around the pipe.
</div>
