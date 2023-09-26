import { LightningElement, api } from "lwc";

import NAME_FIELD from "@salesforce/schema/Product2.Name";
import PRODUCTCODE_FIELD from "@salesforce/schema/Product2.ProductCode";
import ISACTIVE_FIELD from "@salesforce/schema/Product2.IsActive";
import FAMILY_FIELD from "@salesforce/schema/Product2.Family";
import DESCRIPTION_FIELD from "@salesforce/schema/Product2.Description";

export default class CreateProduct2Record extends LightningElement {
  @api recordId;
  @api objectApiName;

  nameField = NAME_FIELD;
  productCodeField = PRODUCTCODE_FIELD;
  isActiveField = ISACTIVE_FIELD;
  familyField = FAMILY_FIELD;
  descriptionField = DESCRIPTION_FIELD;

  name = "";
  productCode = "";
  isActive = false;
  family = "";
  description = "";

  onSuccess(event) {
    console.log("Created product2", event.detail);
    // Dismiss modal on success
    this.dismiss(event);
  }

  dismiss(event) {
    console.log("Dismissing modal", event.detail);
    // TODO: Can we use window.history.back() here?
    // eslint-disable-next-line no-restricted-globals
    history.back();
  }
}
