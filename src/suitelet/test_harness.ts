/**
 * @NAPIVersion 2.0
 * @NScriptType Suitelet
 */

import {EntryPoints} from "N/types";
import * as ui from "N/ui/serverWidget";

export function onRequest(context: EntryPoints.Suitelet.onRequestContext) {
    if (context.request.method === "GET") {
        // build form
        const form = ui.createForm({
            title: "MochaJS Test Harness",
        });
        const subject = form.addField({
            id: "test",
            type: ui.FieldType.TEXT,
            label: "TEST",
        });
        subject.updateLayoutType({
            layoutType: ui.FieldLayoutType.NORMAL,
        });
        // return form 
        form.clientScriptModulePath = "../client/test_harness_client.js";
        context.response.writePage(form);
    }
}
