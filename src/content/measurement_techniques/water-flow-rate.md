---
title: Water Flow Rate
type: measurement
layout: measurement_technique
measurement_technique_id: 11
excerpt: Use this technique to measure water flow rate in a piping system with an ultrasonic flow meter with logging capabilities.
borrow_equipment_url: "https://nycenergytools.com/equipment/ultrasonic-flow-meter-dxnp/"
thumbnail_image: "/images/measurement-technique/water-flow-rate/Water flow rate thumbnail image.JPG"
related_systems:
  - Air Cooled Chiller
  - Water-cooled Chiller
  - Waterside Economizer
associated_components:
  - Liquid-to-liquid Heat Exchanger
related_calculations:
  - Liquid-to-liquid Heat Exchanger Heat Transfer
associated_calculations:
  - Liquid-to-liquid Heat Exchanger Heat Transfer
url: "/documents/measurement-technique/water-flow-rate"
---

## Understanding Water Flow Rate Measurements 

This technique uses a flow meter to measure the flow rate of a fluid within a pipe. The technique is typically used on water loop systems to measure the flow through heating and cooling plants, but it can also be used to measure the flow rate of other fluids (e.g., glycol). Measurement data is used to calculate how much heat is added or removed by the heating or cooling plant, energy/heat recovered by a liquid-to-liquid heat recovery system, and heating energy for domestic hot water.

This measurement technique is preferred over the **pump curve method** because it measures flow rate directly and removes the need for additional calculations. The pump curve method requires the differential pressure between the discharge and suction of all pumps for a water loop system and the technical specifications of all pumps.

However, a major challenge with this technique is that measurements must be taken on a straight pipe; the flow meter should not be installed near elbows or T-shaped pipes. Additionally, piping systems are typically covered with thick layers of insulation to minimize heat losses. To install the flow meter, the insulation must be cut and removed (Figure 2). 

{{< admonition type="tip" >}}
Conduct a site survey to examine the piping system in the facility and determine whether taking a direct flow measurement is possible.
{{< /admonition >}} 

Measurements should be taken at **one-hour intervals**; not instantaneously. When taking one-hour measurements, the flow meter detects the flow several times every hour and stores the average value. Sometimes flow can fluctuate over a one-hour period, and the instantaneous flow value will not indicate that change.

The duration of the long-term measurement and when to measure is dependent on the system and the operation of the building. For water loop systems that operate year-round and are driven by outside air temperature (F), one full year of measurement (12 consecutive months, 52 consecutive weeks, or 365 consecutive days) is required for the baseline and one full year for the reporting period. For water loop systems that operate during a particular season, the full season must be measured for the baseline and reporting periods. For water loop systems that are not driven by OAT, it is recommended to measure flow rate for a minimum of six weeks. Measurements should be taken when the system or component is operating under normal conditions. 

### Type of Measurement

Measuring water flow rate is a **direct measurement**.

## Measurement Equipment

The measurement equipment needed for this procedure is an ultrasonic flow meter. Flow meters work by emitting ultrasonic sounds from the transducers to the pipe surface and into the fluid. Transducers operate in sets of two, and both transducers act as transmitters and receivers of ultrasonic sound. The time it takes for sound to travel from one transducer to the other is called transit time. Flow rate is calculated by the meter using the transit time. This is the commonly used method to measure water or other liquids in a pipe.

{{< admonition type="tip" >}}
To ensure proper installation and avoid signal interference or data loss, install the flow meter on a straight section of pipe, positioned at least 10 to 15 times the pipe’s external diameter away from an elbow.
{{< /admonition >}}

Certain fluids contain moving particles, such as bubbles or solid material. To accurately measure the flow rate of these fluids, some flow meters measure the transit time using the doppler effect. The moving particles in the fluid cause the ultrasonic sound to shift in frequency (Hz), and the shift in frequency is directly related to the speed of the moving particles. Transducers used in this scenario are known as doppler transducers.

{{< admonition type="tip" >}}
**If you are NYC agency personnel** and you require measurement tools, data loggers, meters or sensors, we offer equipment lending through the [Field Equipment Lending Library](https://nycenergytools.com/equipment/).
{{< /admonition >}}

The available ultrasonic flow meter sensors are clamp-on so there is no need to drill into the piping. By default, some flow meters are set to measure the properties of water. If glycol or other liquids will be measured, refer to the user manual and change the settings of the meter to measure the fluid in the system.

The contents of this guide are largely based off the following equipment available in the [Field Equipment Lending Library](https://nycenergytools.com/equipment/):

<div class="equip-grid">

{{< equipment_link type="equip" url="https://nycenergytools.com/equipment/ultrasonic-flow-meter-dxnp" imgUrl="https://nycenergytools.com/wp-content/uploads/2021/05/DXN-1.jpg" title="Ultrasonic Flow Meter" excerpt="Allows measurement of flows throughout the plumbing infrastructure without intrusion." >}}

</div>

{{< admonition type="note" >}}
Please note that certain flow meters offered require setup with a computer or phone using the manufacturer’s proprietary software prior to installation. Refer to the measurement equipment’s user manual for a detailed description of setup requirements.
{{< /admonition >}}

## Measurement Procedure

### 1. Prepare for Data Acquisition

Identify the location where the flow meter will be installed. Refer to the equipment’s user manual for detailed instructions on how to set up the meter(s).

- Logging interval: 1-hour (for variable speed pumps)
- Date and time to start logging
- Date and time to stop logging
- Value to measure: Water flow rate (GPM)
- Confirm if properties of fluid matches with the fluid to be measured

<figure class="figure mb-3 mt-3 mx-auto">
    <img src="/images/measurement-technique/water-flow-rate/2024_0430 water_flow_rate figure 1.jpeg" class="figure-img img-fluid rounded zoom" alt="Figure 1. Piping covered with insulation for a cooling plant. This is the location where the ultrasonic flow meter will be installed.">
    <figcaption class="figure-caption text-left">Figure 1. Piping covered with insulation for a cooling plant. This is the location where the ultrasonic flow meter will be installed.</figcaption>
</figure>

### 2. Install Equipment

1. Confirm that the equipment is operational. 
2. Some piping systems have a layer of insulation to minimize heat loss. There are scenarios in which the insulation must be cut to install the transducers of the flow meter.

{{< admonition type="note" >}}
Consult with personnel who work in the facility to determine if this is appropriate. See Figure 4 for reference.
{{< /admonition >}}

{{< admonition type="tip" >}}
If installing the flow meter is not possible, consider using the pump curve method to determine flow rate of the fluid.
{{< /admonition >}}

4. Refer to the user manual of the measurement equipment to determine how to install the transducers.

<figure class="figure mb-3 mt-3 mx-auto">
  <img src="/images/measurement-technique/water-flow-rate/2024_0430 water_flow_rate figure 2.jpeg" class="figure-img img-fluid rounded zoom" alt="Figure 2. Insulation is being removed and the piping is exposed.">
  <figcaption class="figure-caption text-left">Figure 2. Insulation is being removed and the piping is exposed.</figcaption>
</figure>

<figure class="figure mb-3 mt-3 mx-auto">
  <img src="/images/measurement-technique/water-flow-rate/2024_0430 water_flow_rate figure 3.jpeg" class="figure-img img-fluid rounded zoom" alt="Figure 3. Insulation is fully removed for a section of the piping.">
  <figcaption class="figure-caption text-left">Figure 3. Insulation is fully removed for a section of the piping.</figcaption>
</figure>

<figure class="figure mb-3 mt-3 mx-auto">
  <img src="/images/measurement-technique/water-flow-rate/2024_0430 water_flow_rate figure 4.jpeg" class="figure-img img-fluid rounded zoom" alt="Figure 4. The transducers of the ultrasonic flow meter are being installed on the exposed piping. The ultrasonic flow meter in use is the DXN Portable Ultrasonic Measurement System. FPO">
  <figcaption class="figure-caption text-left">Figure 4. The transducers of the ultrasonic flow meter are being installed on the exposed piping. The ultrasonic flow meter in use is the DXN Portable Ultrasonic Measurement System.</figcaption>
</figure>

{{< admonition type="warning" >}}
  <b>Do not remove the logger.</b> If you remove it, you may need to start over with the setup and installation process. 
{{< /admonition >}}

### 3. Verify Data is Being Collected

Wait 24-48 hours to verify data collection. Return to the location of the measured equipment to do the following:

1. If necessary, connect the logger to a laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth. 
2. Analyze the data with a plot graph. This can be done with the software or Microsoft Excel after exporting the dataset as a .csv file. Please note that the format file may vary based on the measurement equipment.
3. Determine whether measured results align with the expected operation of the system or component.

<figure class="figure mb-3 mt-3 mx-auto">
  <img src="/images/measurement-technique/water-flow-rate/2024_0430 water_flow_rate figure 5.jpeg" class="figure-img img-fluid rounded zoom" alt="Figure 5. Retrieve data screen on the DXN Portable Ultrasonic Measurement System. For this meter, a USB storage device is connected to the back of the meter. FPO">
  <figcaption class="figure-caption text-left">Figure 5. Retrieve data screen on the DXN Portable Ultrasonic Measurement System. For this meter, a USB storage device is connected to the back of the meter.</figcaption>
</figure>

### 4. Retrieve Measurement Equipment and Download All Final Data

After verifying the meter is collecting data do the following:

1. Allow the meter to collect data for the remainder of the measurement period.
2. After the measurement period has concluded, remove the meter. 
3. If necessary, connect the meter to a laptop or phone via USB cable. Otherwise, use the software to connect with the logger via Bluetooth. 
4. If applicable, use the proprietary software to stop the meter and end data collection. 
5. Download all data from the meter and convert to csv file format for analysis.

<figure class="figure mb-3 mt-3 mx-auto">
  <img src="/images/measurement-technique/water-flow-rate/2024_0430 water_flow_rate figure 6.jpeg" class="figure-img img-fluid rounded zoom" alt="Figure 6. Final data table in .csv format. Data was extracted from the DXN Portable Ultrasonic Measurement System and exported for analysis. FPO">
  <figcaption class="figure-caption text-left">Figure 6. Final data table in .csv format. Data was extracted from the DXN Portable Ultrasonic Measurement System and exported for analysis.</figcaption>
</figure>

### 5. Process and Analyze Measured Data

Use the collected measurement data in the corresponding calculator file based on the type of component you are measuring:

#### Heat Exchanger

{{< page_hyperlink page_title="Liquid-to-liquid Heat Exchanger" url="/documents/components/liquid-to-liquid-heat-exchanger/#how-to-quantify" >}}

## Troubleshooting

This section provides some troubleshooting tips for the most common issues with equipment installation.

{{< details summary="Presence of turbulence" >}}
Turbulence occurs when a fluid flows across an obstacle or a sharp corner. It can also occur if the fluid flows at a high speed due to drag forces between the fluid and the piping. The flow meter cannot accurately measure fluid flow if turbulence is present.

Install the flow meter away from elbow pipes, as the sharp corner will cause turbulence. A rule of thumb is to place the meter on straight piping at least 10 to 15 pipe diameters away from the elbow.
{{< /details >}}

{{< details summary="Data accuracy and measurement interferences" >}}
Depending on the type of flow measurement (i.e., transit time or doppler), the transducers must be installed in a specific position on the pipe. refer to the user manual for details. For transit time measurements, the transducers must be a certain distance from each other as determined by the size of the pipe. For doppler measurements, the placement of the transducers depends on how much solid material is in the fluid.

Remove any insulation from the pipe and wipe it with a rag to clean the surface.

Apply couplant to the sensor of the transducer. Couplant is a type of grease that allows sound to travel faster and is necessary for the flow meter to detect a stronger signal. Without couplant, the sound waves generated by the meter will travel through the air at a slower speed, causing the meter to detect a weaker signal. For more information, refer to the equipment user manual.
{{< /details >}}