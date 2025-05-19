---
title: Steam Condensate Recovery
type: system
system_id: 12
excerpt: The steam condensate recovery system is responsible for collecting condensate from the steam distribution system through steam traps.
thumbnail_image: "/images/systems/steam-condensate-recovery/2024_0411_steam condensate recovery system_thumbnail.jpeg"
associated_systems:
  - Constant-speed, Constant-volume Pump and Motor
  - Variable-speed, Variable-volume Pump and Motor
related_components:
  - Constant-speed, Constant-volume Pump and Motor
  - Variable-speed, Variable-volume Pump and Motor
borrow_equipment_url: "https://nycenergytools.com/equipment/?_system_type=condenser-water-loop"
layout: guide
url: "/documents/systems/steam-condensate-recovery"
---

## General Overview

The steam condensate recovery system collects condensate from the steam distribution system through steam traps and returns it to the boiler. This makes the system more efficient my reusing heated water that would otherwise be rejected to the environment or sewage system. Before returning to the boiler, the condensate typically passes through a deaerator to remove unwanted oxygen. Condensate can be used to pre-heat make-up water before it enters the boiler, as well as being fed directly back into the boiler. Since condensate is purified water its reuse helps reduce water treatment costs for make-up water.

## Components

Condensate recovery systems are typically equipped with pumps, pipe networks, and a heat exchanger. Condensate is passed into a receiver tank. The components of a condensate recovery system are shown in Figure 1.

<a href="/images/systems/steam-condensate-recovery/2024_00507_STEAM CONDENSATE system_figure 1 updated.jpg">
<figure class="figure">
  <img src="/images/systems/steam-condensate-recovery/2024_00507_STEAM CONDENSATE system_figure 1 updated.jpg" class="figure-img img-fluid rounded" alt="Figure 1. Condensate recovery system diagram.">
  <figcaption class="figure-caption text-left">Figure 1. Condensate recovery system diagram.</figcaption>
</figure>
</a>

### Condensate Pumps

Condensate pumps are responsible for moving condensate from the receiver tank(s) back to the boiler system. In some cases, the receiver tank, pump, and float controls are packaged together. An appropriately-sized pump is crucial to avoiding condensate buildup, which could create problems with terminal units.
<a class="continue" href="/documents/components/constant-speed-constant-volume-pump-motor" aria-label="Learn more about this component"><span>Learn More</span><i class="fa fa-arrow-right"></i></a>

### Pipe Networks

The pipe network of a condensate recovery system transports flash steam and condensate. Designs should consider differential of pressure between different lines. It is usually covered with insulation material to minimize heat losses into the environment.

## Evaluation of Energy Consumption

The primary purpose of the condensate recovery system on the steam plant is to minimize heat losses and manage condensate that could otherwise be damaging to the steam plant. Generally, the energy related to the condensate system is not quantified; instead, the energy consumption of the overall low-pressure steam plant is quantified. For more information, see <a href="/documents/plants/steam-plant">Steam Plant</a>.

<div class="table-wrapper">
<table>
    <caption>Table 1. Key values, components and measurements to evaluate energy consumption.</caption>
    <thead>
        <tr>
            <th style="width: 26%">
                Plant Quantification
            </th>
            <th>
                Values to be Quantified
            </th>
            <th>
                Energy Consuming Component
            </th>
        </tr>
    <tbody>
        <tr>
            <td>
                Steam boiler plant fuel consumption (<a class="glossary-link" href="/glossary#btu"><abbr title="British Thermal Unit">Btu</abbr></a>)
            </td>
            <td>
                Average hourly fuel consumption (Btu/h)
            </td>
            <td>
                <a href="/documents/systems/boiler">Boiler</a>
            </td>
        </tr>
        <tr>
            <td>
                Steam plant electricity consumption (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>)
            </td>
            <td>
                <ul>
                    <li>Average hourly burner <a href="/documents/components/constant-speed-constant-volume-fan-and-motor">fan motor</a> (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>)</li>
                    <li>Total operating hours of burner fan motor</li>
                    <li>Average hourly condensate <a href="/documents/components/constant-speed-constant-volume-pump-motor">pump motor</a> <a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a></li>
                    <li>Average hourly feedwater pump motor (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>)</li>
                    <li>Total operating time for pump motors</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Burner fan motor</li>
                    <li>Condensate pump motor</li>
                    <li>Feedwater pump motor</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table> 
</div>

## Further Reading

- ASHRAE (2014). “ASHRAE Guideline 14-2014 – Measurement of Energy, Demand, and Water Savings.” Annex A. 

- ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 11. STEAM SYSTEMS. I-P Edition. 

- U.S. Department of Energy. (2014). “A Sourcebook for Industry – Energy,” https://www.energy.gov/sites/prod/files/2014/05/f15/steamsourcebook.pdf