---
outline: deep
---
# The LoRaWAN technology

The LoRaWAN® specification is a Low Power, Wide Area (LPWA) networking protocol designed to wirelessly connect battery operated ‘things’ to the internet in regional, national or global networks, and targets key Internet of Things (IoT) requirements such as bi-directional communication, end-to-end security, mobility and localization services. ([LoRa Alliance](https://lora-alliance.org/about-lorawan/), 2024)

## Network structure

<img src='../public/lorawan-architecture.png' 
        alt="Unavailable content"
        style="display: slock; margin: 0 auto" />

### Sensors / Devices
- Communicates with [Gateways](#gateways) with radiowaves using LoRa protocol
- Battery opperated
- Not connected to wifi
- Cannot communicate with each other

::: details Device classes
- **Class A** : All LoRaWAN end-devices must support Class A implementation. A Class A device can send an uplink message at any time. Once the uplink transmission is completed, the device opens two short receive windows for receiving downlink messages from the network. There is a delay between the end of the uplink transmission and the start of each receive window, known as RX1 Delay and RX2 Delay, respectively. If the network server does not respond during these two receive windows, the next downlink will be scheduled immediately after the next uplink transmission.


- **Class B** : Class B devices extend Class A capabilities by periodically opening receive windows called ping slots to receive downlink messages. The network broadcasts a time-synchronized beacon (unicast and multicast) periodically through the gateways, which is received by the end devices. These beacons provide a timing reference for the end devices, allowing them to align their internal clocks with the network. This allows the network server to know when to send a downlink to a specific device or a group of devices. The time between two beacons is known as the beacon period.

- **Class C** : Class C devices extend Class A capabilities by keeping the receive windows open unless transmitting an uplink. Therefore, Class C devices can receive downlink messages at almost any time, thus having very low latency for downlinks. These downlink messages can be used to activate certain functions of a device, such as reducing the brightness of a street light or turning on the cut-off valve of a water meter.

Compared to Class A and Class B devices, Class C devices have the lowest latency. However, they consume more power due to the need for opening continuous receive slots. As a result, these devices cannot be operated with batteries for long time therefore they are often mains powered.
:::

### Gateways
- Receives data from [sensors](#sensors--devices) and exports them to an [network server](#network-server) using HTTP protocol
- Connected to wifi

### Network server
- Stores and displays data sent by [Gateways](#gateways)

### Duty Cycle
A duty cycle or power cycle is the fraction of one period in which a signal or system is active.[1][2][3] Duty cycle is commonly expressed as a percentage or a ratio. A period is the time it takes for a signal to complete an on-and-off cycle. ([Wikipedia](https://en.wikipedia.org/wiki/Duty_cycle), 2024).

In LoRaWAN, the duty cycle is usually near 1%. It means that on a **1h** period, a LoRaWAN device can transmit for **3.6 sec**.