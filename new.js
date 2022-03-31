
n",
	        "z": "f383b84d6b4caf98",
	        "name": "",
	        "func": "msg.payload=[{\n    \"series\": [\"X\", \"Y\"],\n    \"data\": [ [130,100,185,116], [85,80,92,80]],\n    \"labels\": [ \"12:32\", \"7:04\", \"17:23\", \"20:18\"]\n}]\nreturn msg;",
	        "outputs": 1,
	        "noerr": 0,
	        "initialize": "",
	        "finalize": "",
	        "libs": [],
	        "x": 740,
	        "y": 260,
	        "wires": [
			            [
					                    "0bc8f92ebeee2815"
					                ]
			        ]
    },
	    {
		            "id": "d7187f6c8d99bb32",
		            "type": "inject",
		            "z": "f383b84d6b4caf98",
		            "name": "",
		            "props": [
				                {
							                "p": "payload"
							            },
				                {
							                "p": "topic",
							                "vt": "str"
							            }
				            ],
		            "repeat": "",
		            "crontab": "",
		            "once": false,
		            "onceDelay": 0.1,
		            "topic": "",
		            "payload": "data",
		            "payloadType": "str",
		            "x": 450,
		            "y": 260,
		            "wires": [
				                [
							                "ebc1f0a947d8a85f"
							            ]
				            ]
		        },
	    {
		            "id": "0bc8f92ebeee2815",
		            "type": "ui_chart",
		            "z": "f383b84d6b4caf98",
		            "name": "",
		            "group": "ae66eeefe4793335",
		            "order": 0,
		            "width": 0,
		            "height": 0,
		            "label": "chart",
		            "chartType": "line",
		            "legend": "false",
		            "xformat": "HH:mm",
		            "interpolate": "linear",
		            "nodata": "",
		            "dot": false,
		            "ymin": "",
		            "ymax": "",
		            "removeOlder": 1,
		            "removeOlderPoints": "",
		            "removeOlderUnit": "3600",
		            "cutout": 0,
		            "useOneColor": false,
		            "useUTC": false,
		            "colors": [
				                "#1f77b4",
				                "#aec7e8",
				                "#ff7f0e",
				                "#16d016",
				                "#98df8a",
				                "#d62728",
				                "#ff9896",
				                "#9467bd",
				                "#c5b0d5"
				            ],
		            "outputs": 1,
		            "useDifferentColor": false,
		            "className": "",
		            "x": 1010,
		            "y": 260,
		            "wires": [
				                []
				            ]
		        },
	    {
		            "id": "ae66eeefe4793335",
		            "type": "ui_group",
		            "name": "Presión Arterial",
		            "tab": "b9fc241a0dccf5d3",
		            "order": 1,
		            "disp": true,
		            "width": "6",
		            "collapse": false,
		            "className": ""
		        },
	    {
		            "id": "b9fc241a0dccf5d3",
		            "type": "ui_tab",
		            "name": "Home",
		            "icon": "dashboard",
		            "disabled": false,
		            "hidden": false
		        }
]
