---
title: Electrical Distribution
type: system
system_id: 6
excerpt: This system regulates the amount of electricity supplied to different areas of the facility. This is the primary measurement location of lighting fixture systems.
thumbnail_image: "/images/systems/electrical-distribution/2024_0701_electrical distribution_system_thumbnail_RESIZED-01.jpg"
related_measurements:
  - Electrical Current
borrow_equipment_url: "https://nycenergytools.com/equipment-kits/lighting-measurement-kit/"
layout: guide
url: "/documents/systems/electrical-distribution"
---

## General Overview

An electrical distribution system is made up of switchgear and panelboards connected by wires. Switchgear is used to disaggregate the power coming from the utility grid to serve various aggregate loads in a facility, such as lights, motors, receptacle circuits, or miscellaneous equipment. A panelboard is used as the final disconnect and protection point for individual circuits in a space. A lighting panelboard is connected to the light fixture system in one or more spaces, typically on a single floor of a facility, or the outdoor light fixture system. Panelboards may either be dedicated to the lighting system or “mixed”, serving both lighting loads and other circuits.

## Components

Figure 1 shows the main components associated with the electrical distribution system: switchgear and panelboard.

<a href="/images/systems/electrical-distribution/2024_0507_ELECTRICAL DIST_figure 1 updated.jpg">
    <figure class="figure mb-4 mt-3">
        <img src="/images/systems/electrical-distribution/2024_0507_ELECTRICAL DIST_figure 1 updated.jpg" class="figure-img img-fluid rounded" alt="Figure 1. Diagram of an electrial distribution system.">
        <figcaption class="figure-caption text-left">Figure 1. Diagram of an electrial distribution system.</figcaption>
    </figure>
</a>

### Switchgear

Switchgear is an assembly that contains circuit breakers, fuses, and other accessories to interrupt current flow and protect electrical equipment and occupants. The electricity delivered by a utility company is passed through a step-down transformer and then to a switchgear as the first layer of protection in a facility. Then, electricity is distributed among other assemblies, such as a secondary switchgear or panelboards. The configuration of primary and secondary switchgears is dependent on the facility. Not all facilities have secondary switchgear.

### Dedicated Panelboard

A dedicated electrical panelboard supplies electricity only to the light fixture system. Figure 2 shows a dedicated panelboard without a panel cover to show how the electrical wiring is distributed. The electricity from the primary or secondary switchgear enters from the top (or bottom) of the panelboard, and then splits across all of the branch circuits.

<a href="/images/systems/electrical-distribution/electrical distribution figure2.png">
    <figure class="figure mb-4 mt-3">
        <img src="/images/systems/electrical-distribution/electrical distribution figure2.png" class="figure-img img-fluid rounded" alt="Figure 2. Dedicated panelboard system.">
        <figcaption class="figure-caption text-left">Figure 2. Dedicated panelboard system.</figcaption>
    </figure>
</a>

Figure 3 is an example of a schedule of circuits on a dedicated panelboard. The schedule typically describes the type of load (e.g., lights) and the space that is served by the breaker. There is no standard naming convention for circuits.

<a href="/images/systems/electrical-distribution/electrical distribution figure3.png">
    <figure class="figure mb-4 mt-3">
        <img src="/images/systems/electrical-distribution/electrical distribution figure3.png" class="figure-img img-fluid rounded" alt="Figure 3. Example of a dedicated panelboard schedule.">
        <figcaption class="figure-caption text-left">Figure 3. Example of a dedicated panelboard schedule.</figcaption>
    </figure>
</a>

### Mixed Panelboard

A Mixed electrical panelboard supplies electricity to the lighting fixture system and other loads (typically receptacle circuits). Mixed panelboards typically exist in small or older facilities. The electricity from the primary or secondary switchgear enters from the top or bottom of the panelboard and then splits across all of the branch circuits. The interior of a mixed panelboard looks similar to Figure 2, but the panel schedule highlights a collection of different loads as shown in Figure 4.

<figure class="figure mb-4 mt-3">
    <a href="/images/systems/electrical-distribution/electrical distribution figure4.png">
        <img src="/images/systems/electrical-distribution/electrical distribution figure4.png" class="figure-img img-fluid rounded" alt="Figure 4: Example of a mixed panelboard schedule. Blue represents lighting fixtures, red represents others electrical loads">
    </a>
<figcaption class="figure-caption text-left">

Figure 4: Example of a mixed panelboard schedule. <span style="color: #467f9e;">Lighting fixtures highlighted in blue</span>, and <span style="color: #d36064;">other electrical loads highlighted in red</span>.

</figcaption>
</figure>

## Evaluation of Energy Consumption

The electrical distribution system does not consume electricity, but it can be a useful point by which to measure the electrical energy associated with the [Lighting Plant](/documents/plants/lighting-plant).

<div class="table-wrapper">
<table>
    <caption>Table 1. Key values, components and measurements to evaluate energy consumption.</caption>
    <thead>
        <tr>
            <th>
                System Quantification
            </th>
            <th>
                Values to be Quantified
            </th>
            <th>
                Energy Consuming Component
            </th>
            <th>
                Measurements
            </th>
        </tr>
    <tbody>
        <tr>
            <td>
                Lighting fixture system electricity consumption (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>)
            </td>
            <td>
                <ul>
                    <li>Average hourly panelboard or switchgear <a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a></li> 
                    <li>Total operating time for the light fixtures</li>
                </ul>
            </td>
            <td>
                Light fixtures and automatic controls (if applicable).
            </td>
            <td>
                <ul>
                    <li>Average hourly electricity supplied to the light fixture system from the switchgear or panelboard</li> 
                    <li>Total operating hours of the light fixtures</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table> 
</div>

### Measurement Locations

Figures 5 and 6 show typical measurement locations in an electrical distribution system.

<a href="/images/systems/electrical-distribution/electrical distribution figure5.png">
    <figure class="figure mb-4 mt-3">
        <img src="/images/systems/electrical-distribution/electrical distribution figure5.png" class="figure-img img-fluid rounded" alt="Figure 5: Three-phase power measurement using a Dent EliteProXC Power Logger to capture to total power draw of all fixtures served by the panelboard.">
        <figcaption class="figure-caption text-left">Figure 5: Three-phase power measurement using a Dent EliteProXC Power Logger to capture to total power draw of all fixtures served by the panelboard.</figcaption>
    </figure>
</a>

<a href="/images/systems/electrical-distribution/electrical distribution figure6.png">
    <figure class="figure mb-4 mt-3">
        <img src="/images/systems/electrical-distribution/electrical distribution figure6.png" class="figure-img img-fluid rounded" alt="Figure 6: Current measurement using current transformers and a data logger to collect measurement data. In this figure measurements are taken at the circuit breaker level to capture specific fixtures. Voltage and power factor measurements are taken with a power meter.">
        <figcaption class="figure-caption text-left">Figure 6: Current measurement using current transformers and a data logger to collect measurement data. In this figure, measurements are taken at the circuit breaker level to capture specific fixtures. Voltage and power factor measurements are taken with a power meter.</figcaption>
    </figure>
</a>

Measurement locations in the electrical distribution system are at the conductors in the panelboard or switchgear. To measure a lighting plant, the best practice is to capture as much of the lighting plant in a single measurement as possible. Measuring at switchgear may be appropriate if all lighting panelboards are dedicated and connected to it, but only the distribution line that supplies electricity to lighting should be measured. Alternatively, a sample of panelboards and/or circuits can be measured, but a sampling plan must be considered. For more information on sampling, please refer to Bonneville Power Administration’s guide on sampling.

## Further Reading

- Consulting-Specifying Engineer (20). “Back to Basics: Switchgear, Transformers and UPSs.”. https://www.csemag.com/articles/back-to-basics-switchgear-transformers-and-upss/; accessed May 24, 2022. 

- Bonneville Power Administration (July 2018). “Sampling for M&V: Reference Guide.” 

- EE Richman (February 2016). PNNL-SA-25222. “Measurement and Verification of Energy Savings and Performance from Advantage Lighting Controls” Richland, WA: Pacific Northwest National Laboratory.