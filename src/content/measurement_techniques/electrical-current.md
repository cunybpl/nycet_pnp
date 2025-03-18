---
title: Electrical Current
type: measurement
layout: measurement_technique
measurement_technique_id: 3
excerpt: Use this technique to measure electrical current (Amps) at one-hour intervals with a data logger.
borrow_equipment_url: "https://nycenergytools.com/equipment/4-channel-analog-data-logger/"
thumbnail_image: "/images/measurement-technique/electrical_current/2024_0410_electrical current MT_thumbnail.jpeg"
associated_systems:
  - Lighting Fixture
  - Electrical Distribution
associated_components:
  - Constant-speed, Constant-volume Fan and Motor
related_calculations:
  - Cooling Tower Fans Energy Consumption
associated_calculations:
  - Cooling Tower Fans Energy Consumption
url: "/documents/measurement-technique/electrical-current"
---

## Understanding Electrical Current Measurements

This technique uses a data logger and current transformers to take long-term measurements of electrical current (Amps) at one-hour intervals. This data provides insight on the operating schedule of the system or component and can be used to calculate energy consumption of the target equipment at the power panel or electrical panelboard. A system or component that is running (i.e., consuming energy) will have high current draw. A system or component that is not running (i.e., has no energy consumption) will have low or no current draw.  

Data loggers and current sensors use instantaneous measurements of current over the course of an hour to calculate the average amperage. As such, current data should be recorded as hourly average values, not instantaneous. When taking one-hour measurements, the logger detects current over the course of every hour and store that value. Occassionally, current can fluctuate over a one-hour period (motors turn off or change speed), but the instantaneous current value will not indicate that change.  

The duration of the long-term measurement and when to measure is dependent on the system and the operation of the building. The best practice is a **minimum of six weeks** with data being collected at **one-hour intervals**; longer measurement periods are encouraged for deeper analysis of the equipment.

{{< admonition type="note" >}}
Measurements should be taken when the system or component is operating under normal conditions.
{{< /admonition >}} 

### Type of Measurement

This methodology is a **direct measurement of current**; however, it is also considered a **proxy measurement of power and energy**, as well as operational hours of the system or component.

## Measurement Equipment

The measurement equipment needed for this procedure is an energy data logger with capacity to measure AC current over time and record measurement data in its internal storage.

Current transformers are sensors that detect the magnetic field induced by an electrical current through a wire. As the current increases or decreases, the magnetic field strength changes, and the current transformers detect this change. The data logger calculates current through the wire based on the signal from the transformers and record the AC current value in its internal storage. A data logger can have multiple current transformers connected to it, allowing a user to measure multiple wires with a single logger. 

{{< admonition type="tip" >}}
It is important to know how many wires will be measured and the current rating of those wires, so the appropriate current transformers are used.
{{< /admonition >}}

{{< admonition type="tip" >}}
**If you are NYC agency personnel** and you require measurement tools, data loggers, meters or sensors, we offer equipment lending through the [Field Equipment Lending Library](https://nycenergytools.com/equipment/).
{{< /admonition >}}

The contents of this guide are largely based off the following equipment available in the [Field Equipment Lending Library](https://nycenergytools.com/equipment/):

<div class="equip-grid">

{{< equipment_link borrow="yes" type="equip" url="https://nycenergytools.com/equipment/4-channel-analog-data-logger/" imgUrl="https://nycenergytools.com/wp-content/uploads/2021/05/4-channel-logger-1-300x300.jpg" title="4-channel analog logger" excerpt="Standalone data logger that monitors a motor’s on and off conditions using an internal AC magnetic field sensor." >}}

{{< equipment_link borrow="yes" type="equip" url="https://nycenergytools.com/equipment/?_search_equipment=split%20core" imgUrl="https://nycenergytools.com/wp-content/uploads/2025/03/split-cire_cts.jpg" title="Split-Core AC Current Transformers" excerpt="Standalone data logger that monitors a motor’s on and off conditions using an internal AC magnetic field sensor." >}}

</div>

{{< admonition type="note" >}}
Please note that loggers require setup with a computer or phone using the manufacturer’s proprietary software prior to installation and measurement logging, and that older loggers require the use of a cable to connect to a computer. Refer to the measurement equipment’s user manual for a detailed description of setup requirements.
{{< /admonition >}} 

## Measurement Procedure

### 1. Prepare for Data Acquisition

Use the manufacturer’s software to set up and launch the logger(s). Refer to the equipment’s user manual for detailed setup instructions. Before proceeding, identify the current rating(s) of the wires to be measured to ensure the selection of a properly sized current transformer for this measurement approach. For further guidance on selecting the appropriate current transformer for the target system or component, consult the equipment’s instruction manual.  

- Logging interval: 1-hour
- Date and time to start logging
- Date and time to stop logging
- Sampling interval: 1-second
- Value to measure: AC current (Amps)
- Activate input channels of the logger
- Select the current rating of transformers being used

An example of how to setup the Onset HOBO 4-channel analog logger (UX120-006M) is shown in the video below 

<iframe class ="video" src="https://www.youtube.com/embed/fUjz0qj7GVM?si=tSIiXYE0bUuRB5LX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 1. How to configure the 4-channel analog logger with CT on HOBOware (6 min).</figcaption>

### 2. Install Equipment

1. Confirm that the equipment is operational.
2. Connect the sensors to the data logger.
3. Determine whether the distribution system supplies electricity to other loads unrelated to the project to avoid measuring unintended energy consumption.
4. Identify the wiring configuration of the distribution system. This will determine how to set up the logger and sensors.
5. Based on the wiring configuration and instructions from the equipment’s user manual, install the sensor and logger to measure the current draw by the system. The current transformers are clamps that open and surround the wire, see Figure 2.
6. Clamp the sensors around the electrical wires. Make sure they are facing the right direction, or the current may be recorded with negative values.
7. Adhere the data logger to the panelboard. Some loggers have magnets that allow for placement on the panelboard itself, while others do not.

<iframe class ="video" src="https://www.youtube.com/embed/FWgM0-VSlEQ?si=B_0BwGasy2X2L-pc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 2. How to install the 4-channel analog logger with CT onsite (5 min).</figcaption>

{{< admonition type="warning" >}}
**Do not remove the logger or sensors**. If you remove the logger, you may need to start over with the setup and installation process.
{{< /admonition >}}

### 3. Verify Data is Being Collected

Wait 24-48 hours to verify data collection. Return to the location of the measured equipment and use a laptop or a phone with the manufacturer’s proprietary software installed to do the following:

1. If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth.
2. Analyze the data with a plot graph. This can be done with the proprietary software or Microsoft Excel after exporting the dataset as a .csv file.
3. Determine whether the results align with the expected operation of the system or component based on observed operational patterns or known equipment schedules.

<iframe class ="video" src="https://www.youtube.com/embed/KyLO5ARQbuA?si=y6RlF5ZOMLpWvEB2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 3. How to check data of logger using HOBOware (10 min).</figcaption>

### 4. Retrieve Measurement Equipment and Download Data

After verifying that the logger is collecting data, do the following: 

1. Allow the logger to collect data for the remainder of the measurement period.
2. After the measurement period has concluded, remove the logger from the panel.
3. If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth.
4. Use the proprietary software to stop the logger and end data collection.  
5. Download all data from the logger and save the file in the .csv file format for analysis.

<iframe class ="video" src="https://www.youtube.com/embed/47hqmeOh5X4?si=VMH71cMG6C5e9jmc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 4. How to extract data from the logger using HOBOware (6 min).</figcaption>

### 5. Process and Analyze Measured Data

Use the collected measurement data in the corresponding calculator file based on the type of component you are measuring:

#### Lighting

{{< page_hyperlink page_title="Lighting Fixture" url="/documents/systems/lighting-fixture/#how-to-quantify" >}}

<!-- Add any others-->

## Troubleshooting

This section provides some troubleshooting tips for the most common issues with equipment installation.

{{< details summary="Unexpected negative readings" >}}
Confirm that all current transformers (CTs) are facing the correct direction.
{{< /details >}}

{{< details summary="Unexpected low values" >}}
Confirm that the current rating for the electrical distribution system is within the range of the current rating for the CTs.
{{< /details >}}

{{< details summary="CTs Do not fit in panelboard casing" >}}
If it is safe to do so, trace the wires outside the panelboard and install the sensors there. If this is unsafe or not possible to do, consider seeking the help of a certified electrician.
{{< /details >}}  