Voting system of culcul
-----

* Architecture

```
+--------+
|  MQTT  |
+--------+
 |  |   |
 |  |   +--------------------------------------+
 |  |                                          |
 |  +------------------+                       |
 |                     |                       |
+---------------+    +-------------------+   +------------------+
|  Server Page  |	 |  Client Page (1)  |	 |  Client Page (2) |
+---------------+	 +-------------------+	 +------------------+
```

This system adopts the following architecture instead of the above


```
+---------------+               +---------------+
|  Client Page  |------Req----->|  Server Page  |
| (1)表示ページ |<-----Res------|   管理ツール  |
+---------------+	            |               |
                                |               |
+---------------+               |               |
|  Client Page  |------Req----->|               |
|      (2)      |<-----Res------|               |
+---------------+	            +---------------+
```

## How to install

1. First, copy this project and build. After that, start service.
```
$ git clone https://github.com/tcc-itscom/voting_system_of_culcul.git
$ npm install
$ npm run build
$ npm start
```
2. Second, open browser and specify uri(mater page is "docs/master.html"
3. Third, fill out mqtt broker's endpoint and prefix

## How to publish message from devices

publish to MQTT broker with message that is formatted below:

```
$ALL/vote
{
  id: ${UNIQUE_REQUEST_ID (e.g. uuid)},
  from: ${DEVICE_ID},
  data: {
    eventType: ${ENUM("swing", "button1", "button2", "button3")}
  }
}
```

## Requirement

* node.js (>= 6)
* mqtt broker (on either your server or cloud like [NIFTY Cloud](http://cloud.nifty.com/service/mqtt.htm) or [CloudMQTT](https://www.cloudmqtt.com/))

## Sources
* lib/master: dash board page for administrator
    * lib/master/rpc.js: message via mqtt
* lib/slave:  display page for user
    * lib/slave/rpc.js: meaasage via mqtt
* lib/common: common modules

