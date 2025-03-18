---
title: Electrical Spot Measurement
type: measurement
layout: measurement_technique
measurement_technique_id: 2
excerpt: Use this technique to take one-time measurements of different electrical properties such as voltage, current, power draw, and power factor with a handheld power meter.
borrow_equipment_url: "https://nycenergytools.com/equipment/power-quality-clamp-meter-2/"
thumbnail_image: "/images/measurement-technique/electrical-spot-measurement/2024_0410_electrical spot measurement MT_thumbnail.jpeg"
related_systems:
  - Boiler
  - Chilled Water Loop
  - Condenser Water Loop
  - Constant-speed, Constant-volume Air Handling Unit
  - Electrical Distribution
  - Hot Water Loop
  - Steam Condensate Recovery
  - Steam Distribution
associated_components:
  - Constant-speed, Constant-volume Fan and Motor
  - Constant-speed, Constant-volume Pump and Motor
related_calculations:
  - Lighting Plant and Systems Energy Consumption
  - Pump Motor Energy Consumption
associated_calculations:
  - Lighting Plant and Systems Energy Consumption
  - Pump Motor Energy Consumption
url: "/documents/measurement-technique/electrical-spot-measurement"
---

## Understanding Electrical Spot Measurements

This technique uses a handheld power meter to take one-time measurements of various electrical properties such as true RMS power, voltage, current, and power factor. Measurements are taken at the electrical distribution systems such as the panel board, power panel or switchgear. One-time measurements provide a snapshot of power draw, voltage, current, and power factor for a system or component, such as lighting fixtures, chillers, and fan or pump motors. This technique is commonly used for loads with a constant power draw, including constant-speed fans, pumps, and certain lighting fixture systems.

{{< admonition type="note" >}}
If power draw changes over time, use a data logger to take direct measurements of [electrical energy consumption](/documents/measurement-technique/electrical-current).
{{< /admonition >}}  

Power meters use instantaneous measurements of current and voltage to calculate the instantaneous power draw. As the meter remains connected to the distribution system, it calculates the average power draw, which is displayed on the meter’s screen. Manufacturers of power meters and data loggers use different calculation methodologies to calculate the power draw. In order to compare power draw data obtained from different loggers and meters, refer to the user manual to understand the calculation methodology used by the equipment. 

{{< admonition type="tip" >}}
It is advised to take a minimum of three measurements 1-2 minutes apart while the system or component is in operation. The average of the three measurements (true RMS power, voltage, current and power factor) should be calculated, as averaging the values helps to reduce the measurement uncertainty. 
{{< /admonition >}}  

Electrical distribution systems can have different configurations, such as three-phase delta, three-phase wye, single-phase, and split phase on a delta configuration. It is important to first identify the configuration of the system before taking any measurements. The configuration of the system will determine the connections to make with the measurement equipment. Refer to the Measurement Steps section for more details on the different configurations. 

### Type of Measurement

This is a **proxy measurement** of electrical energy consumption of a system or component. Energy consumption is calculated with true RMS power draw and the runtime (operating schedule) of the system or component. 

## Measurement Equipment

The measurement equipment needed for this procedure is a handheld power meter with a current transformer and voltage cables. A power meter typically measures AC voltage, current, and power factor, and can display all values simultaneously. 

The contents of this guide are largely based off the following equipment available in the [Field Equipment Lending Library](https://nycenergytools.com/equipment/):

<div class="equip-grid">

{{< equipment_link borrow="yes" type="equip" url="https://nycenergytools.com/equipment/power-quality-clamp-meter/" imgUrl="https://nycenergytools.com/wp-content/uploads/2021/05/Fluke-345-300x300.jpeg" title="Clamp Meter" excerpt="Measures Power factor (PF), Reactive Power (VAR), Watt Hours (Wh), Kilowatt hours (kWh), AC Current, AC Voltage and more." >}}

{{< equipment_link borrow="yes" type="equip" url="https://nycenergytools.com/equipment/power-quality-clamp-meter-2/" imgUrl="https://nycenergytools.com/wp-content/uploads/2022/07/Power-Quality-Clamp-Meter-PQ2071-300x300.jpeg" title="Power Quality Clamp Meter" excerpt="Measures Power factor (PF), Reactive Power (VAR), Watt Hours (Wh), Kilowatt hours (kWh), AC Current, AC Voltage and more." >}}

</div>

While some power meters can measure true three-phase power by measuring each phase, other meters with fewer wire connections can only estimate three-phase power. The Fluke 345 PQ Clamp Meter is an example of a meter that only estimates three-phase power. The Extech PQ20711 is an example of a meter that can measure three phases without estimation. Both meters should only be used on a balanced load, meaning the currents and voltages on each phase are equal. If the load is not balanced, three-phase power cannot be accurately measured with a handheld meter and a data logger with the capacity to measure three phases at the same time (such as the [Dent EliteProXC2](https://nycenergytools.com/equipment/energy-logger-2/)) should be used instead.

{{< admonition type="note" >}}
Please note that some power meters can log data for a short amount of time or take a screen shot of the measurements while the meter is connected to the load. Taking a picture with a phone is another option for saving measurement data.
{{< /admonition >}}

## Measurement Procedure

### 1. Prepare for Data Acquisition

The following sections discusses the most common wire configurations found in a distribution system and assume a handheld power meter is being used, for details on how to install data loggers refer to the [True RMS Power measurement technique](/documents/measurement-technique/true-rms-power).</strong>  

Values to measure:  

- True RMS power (kW)
- Voltage (V)
- Current (Amps)
- Power Factor

### 2. Install Equipment

1. Confirm that the equipment is operational. 
2. Identify whether the distribution system supplies electricity to other loads that are not relevant to the project (to avoid measuring unwanted loads).
3. Identify the wiring configuration of the distribution system. This will determine how to set up the logger and sensors.
4. Based on the wiring configuration and instructions from the equipment’s user manual, install the sensor and logger to measure the current, voltage, and power factor to the system.

An example of how to connect the Fluke 345 PQ Clamp Meter is shown below

<iframe class="video" src="https://www.youtube.com/embed/FaWG8QRf7pE?si=mAjHxyWZ5hJOPmNK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 1. How to install the fluke 345 PQ clamp meter (1 min).</figcaption> 

{{< admonition type="note" >}}
Some power meters can measure three-phase power with different calculation methods. Carefully read the user manual of the power meter to identify the calculations used to estimate three-phase power.
{{< /admonition >}}

#### Single-phase Wire Configurations

A single-phase electrical distribution system typically consists of a hot wire and a neutral wire. The hot wire provides current to the load, while the neutral wire returns the current to the supply in order to complete the circuit. To measure the power draw of a single-phase system, measure the voltage across the hot wire and neutral wire, and measure the current of the hot wire. Figures 2 and 3 are examples of how measurement equipment offered by the FELL are connected on a single-phase system.

<figure class="figure">
  <img src="/images/measurement-technique/electrical-spot-measurement/rms-figure2.png" class="figure-img img-fluid rounded" alt="Figure 2. Single-phase power measurement connections for the Fluke 345 Power Quality Clamp Meter. Image courtesy of Fluke Corporation.">
  <figcaption class="figure-caption text-left">Figure 1. Single-phase power measurement connections for the Fluke 345 Power Quality Clamp Meter. Image courtesy of Fluke Corporation.</figcaption>
</figure>

<figure class="figure">
  <img src="/images/measurement-technique/electrical-spot-measurement/rms-figure3.png" class="figure-img img-fluid rounded" alt="Figure 3. Single-phase, three wire or split-phase connections for the Extech Instruments Clamp meter, model PQ2071. Image courtesy of Extech Instruments.">
  <figcaption class="figure-caption text-left">Figure 2. Single-phase, three wire or split-phase connections for the Extech Instruments Clamp meter, model PQ2071. Image courtesy of Extech Instruments.</figcaption>
</figure>

#### Three-phase Wire Configurations

For a three-phase distribution system, there are two common wire configurations: the three wire (delta) and four wire (wye). Both wire configurations require slightly different connections of the voltage leads. Manufacturers of power meters have specific instructions for making connections for a given wire configuration. Refer to the power meter’s user manual for detailed instructions. Figures 3, 4, and 5 are examples of how some of the meters offered by the FELL are connected to three-phase systems.  

<figure class="figure">
  <img src="/images/measurement-technique/electrical-spot-measurement/rms-figure4.png" class="figure-img img-fluid rounded" alt="Figure 4. Three-phase power measurement using the Fluke 345 Power Quality Clamp Meter. Image courtesy of Fluke Corporation. ">
  <figcaption class="figure-caption text-left">Figure 3. Three-phase power measurement using the Fluke 345 Power Quality Clamp Meter. Image courtesy of Fluke Corporation.</figcaption>
</figure>

{{< admonition type="note" >}}
For the connection illustrated in Figure 3, this power meter can only measure line-to-line voltage of two phases and the current of the third phase to estimate True RMS power.
{{< /admonition >}}

<figure class="figure">
  <img src="/images/measurement-technique/electrical-spot-measurement/rms-figure5.png" class="figure-img img-fluid rounded" alt="Figure 5. Three-phase, three wire (delta) power measurement connections using the Extech Instruments Clamp meter, model PQ2071.">
  <figcaption class="figure-caption text-left">Figure 4. Three-phase, three wire (delta) power measurement connections using the Extech Instruments Clamp meter, model PQ2071.</figcaption>
</figure>

<figure class="figure">
  <img src="/images/measurement-technique/electrical-spot-measurement/rms-figure6.png" class="figure-img img-fluid rounded" alt="Figure 6: Three-phase, four wire (wye) power measurement connections using the Extech Instruments Clamp meter, model PQ2071.">
  <figcaption class="figure-caption text-left">Figure 5: Three-phase, four wire (wye) power measurement connections using the Extech Instruments Clamp meter, model PQ2071.</figcaption>
</figure>

### 3. Process and Analyze Measured Data

Use the collected measurement data in the corresponding calculator file based on the type of component you are measuring:

#### Lighting

{{< page_hyperlink page_title="Lighting Fixture" url="/documents/systems/lighting-fixture/#how-to-quantify" >}}

#### Fan and Motor

{{< page_hyperlink page_title="Constant-speed, Constant-volume Fan and Motor" url="/documents/components/constant-speed-constant-volume-fan-and-motor/#how-to-quantify" >}}

{{< page_hyperlink page_title="Variable-speed, Variable-volume Fan and Motor" url="/documents/components/variable-speed-variable-volume-fan-and-motor/#how-to-quantify" >}}

#### Pump and Motor

{{< page_hyperlink page_title="Constant-speed, Constant-volume Pump and Motor" url="/documents/components/constant-speed-constant-volume-pump-motor/#how-to-quantify" >}}

{{< page_hyperlink page_title="Variable-speed, Variable-volume Pump and Motor" url="/documents/components/variable-speed-variable-volume-pump-and-motor/#how-to-quantify" >}}

#### Compressor and Motor

{{< page_hyperlink page_title="Constant-speed Compressor and Motor" url="/documents/components/constant-speed-compressor-and-motor/#how-to-quantify" >}}

## Troubleshooting

This section provides some troubleshooting tips for the most common issues with equipment installation.

{{< details summary="Unclear how power is distributed" >}}
It can be difficult or confusing to know how to connect a power meter to a panelboard because panelboards can have many different colored wires. Older panelboards might not have clear or accurate labeling at the circuit breakers, making it challenging to make proper connections.

In cases where it is unclear how the power is distributed, do not touch the panel or install any sensors without first having someone from the facility identify the power distribution.
{{< /details >}}

{{< details summary="The panelboard is too small, and connections cannot be made within the space constraints" >}}
Connect the sensors at the panelboard’s input or measure at the switchgear.
{{< /details >}}

{{< details summary="A voltage connection cannot be made because the alligator clips are too large or contact cannot be made with the metal lugs in the panelboard" >}}
Voltage connection can be difficult if you are not using the correct attachments. Voltage cables can have alligator clips or leads to accommodate for space constraints. In a case where connection cannot be made, use different size voltage leads or investigate alternative attachments for the panelboard’s configuration.
{{< /details >}}

{{< details summary="Unexpected negative values" >}}
At times, measurements will return as negative values because of how the voltage cables are connected. Connect voltage cables in different ways until you obtain positive values. Make sure the connections are correct for accurate power measurements. If you are not sure about the connections, consult a certified electrician.
{{< /details >}}