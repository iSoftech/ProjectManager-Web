// // With JQuery
// $('#priority').slider({
//     formatter: function (value) {
//         return 'Current value: ' + value;
//     }
// });

function toggleDateRows() {
    var toggleDateRows = $('#toggleDateRowsId').is(':checked');
    if (null != toggleDateRows && undefined != toggleDateRows) {
        if (toggleDateRows === true || toggleDateRows === 'true') {
            $('#startDateRowId').show();
            $('#endDateRowId').show();
        } else {
            $('#startDateRowId').hide();
            $('#endDateRowId').hide();
        }
    }
}

function toggleParentTaskRow() {
    var toggleParentTaskRow = $('#toggleParentTaskRowId').is(':checked');
    if (null != toggleParentTaskRow && undefined != toggleParentTaskRow) {
        if (toggleParentTaskRow === true || toggleParentTaskRow === 'true') {
            $('#parentTaskRowId').hide();
        } else {
            $('#parentTaskRowId').show();
        }
    }
}