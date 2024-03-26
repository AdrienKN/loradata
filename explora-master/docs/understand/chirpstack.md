---
outline: deep
---

# The ChirpStack project
ChirpStack is an open-source LoRaWAN Network Server which can be used to to setup private or public LoRaWAN networks. ChirpStack provides a web-interface for the management of gateways, devices and tenants as well to setup data integrations with the major cloud providers, databases and services commonly used for handling device data. ChirpStack provides a gRPC based API that can be used to integrate or extend ChirpStack. ([ChirpStack](https://www.chirpstack.io/docs/index.html), 2024)

::: danger **gRPC** = framework
:::

## Network architecure
<img src='../public/chirpstack_network.png' 
        alt="Unavailable content"
        style="display: slock; margin: 0 auto" />


## Main components
### ChirpStack Concentrator
ChirpStack Concentratord is an open-source LoRa concentrator daemon. It exposes a ZeroMQ based API that can be used by one or multiple (forwarder) applications to interact with the gateway hardware.

### ChirpStack MQTT Forwarder
ChirpStack MQTT Forwarder is an open-source Protobuf or JSON MQTT packet forwarder, which can either use the Semtech UDP Packet Forwarder or ChirpStack Concentratord as gateway backend. It is intended to be installed on each gateway.


::: danger **MQTT** =  OASIS standard messaging protocol for the Internet of Things (IoT)
:::

### ChirpStack Gateway Bridge
ChirpStack Gateway Bridge is an open-source bridge which converts messages received from the Semtech UDP Packet Forwarder or Semtech Basics Station into MQTT. It can be installed on the gateway, or in the cloud.

### ChirpStack
ChirpStack is an open-source LoRaWAN Network Server which can be used to to setup private or public LoRaWAN networks. ChirpStack provides a web-interface for the management of gateways, devices and tenants as well to setup data integrations with the major cloud providers, databases and services commonly used for handling device data. ChirpStack provides a gRPC based API that can be used to integrate or extend ChirpStack.
