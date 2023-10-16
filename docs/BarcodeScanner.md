# Barcode Scanner

[The barcode scanner starter kit example](../force-app/main/default/lwc/scanBarcodeLookUp/) lets user to scan a barcode from a global quick action from the landing page. Upon scanning the barcode e.g `EAN-13` is returned from the scanner, it does a GraphQL query to search the `Product` records with matching barcode value, and displays the record on the screen. Also, note that records prefetched in the briefcase can be searched offline.

# How to Configure

1. [Configure your Offline Briefcase](../README.md#define-an-offline-briefcase) with the `Product` sObject.
2. Deploy the `viewProduct2Record` LWC and `Product2.view.quickAction-meta` quick action, as well as the `scanBarcodeLookUp` LWC
3. There are two options that you can use to add the `scanBarcodeLookUp` LWC as a global quick action:
    - Go to Setup, select Global Actions and create the new Action with the `scanBarcodeLookUp` LWC.
    - Alternatively, you can deploy the `scanBarcodeLookUp` LWC as a quick action by creating a new file within the `quickActions` folder that includes the following:

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<QuickAction xmlns="http://soap.sforce.com/2006/04/metadata">
    <actionSubtype>ScreenAction</actionSubtype>
    <label>Barcode Lookup</label>
    <lightningWebComponent>scanBarcodeLookUp</lightningWebComponent>
    <optionsCreateFeedItem>false</optionsCreateFeedItem>
    <type>LightningWebComponent</type>
</QuickAction>
```

4. Add the global action to publisher layout. 

  ![Add LWC Quick Actions to Mobile Layouts](../images/LWCQuickActionsPublisherLayouts.png)

5. In Setup, enter Static Resources in quick find and select Static Resources under Custom Code. Update the landing page json file by adding a global action in the actionList block and upload it.

```json
{
    "definition": "mcfp/actionItem",
    "name": "global_action",
    "label": "Scan barcode lookup",
    "properties": {
        "apiName": "Global.Barcode_Lookup"
    },
    "regions": {
    
    }
}
```

6. After setting up the `scanBarcodeLookUp` LWC, it can now be used as a Global Quick Action within the landing page. 

  ![Barcode Scanner Lookup Quick Action](../images/LandingPageBarcodeScannerLookupQuickAction.png)

7. Clicking on the Barcode Lookup Global Quick Action, you will be expecting to see a screen with a Scan Barcode button.

> **Note**
> Only the prefetched records in briefcase can be searched when using this quick action in offline.

8. Click the Scan Barcode button and you will expect to see the camera preview. 

9. Use the camera to scan an EAN-13 barcode. Upon scanning the barcode, you should expect to see the `Product` record which has the `ProductCode` value equal to the barcode. If no product is found, an error screen is displayed.