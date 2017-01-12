/**
 * @NAPIVersion 2.0
 * @NScriptType Suitelet
 */
define(["require", "exports", "N/ui/serverWidget"], function (require, exports, ui) {
    function onRequest(context) {
        if (context.request.method === "GET") {
            // build form
            var form = ui.createForm({
                title: "MochaJS Test Harness",
            });
            var subject = form.addField({
                id: "test",
                type: ui.FieldType.TEXT,
                label: "TEST",
            });
            subject.updateLayoutType({
                layoutType: ui.FieldLayoutType.NORMAL,
            });
            // return form 
            context.response.writePage(form);
        }
    }
    exports.onRequest = onRequest;
});
