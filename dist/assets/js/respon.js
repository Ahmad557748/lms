
//new DataTable('#example');

new DataTable('#example', {

    responsive: true,
    layout: {
        topStart: {
            buttons: [
                {
                    extend: 'copy',
                    text: 'نسخ'
                }, {
                    extend: 'excel',
                    text: 'تصدير للاكسل'
                }, {
                    extend: 'pdf',
                    text: 'تصدير كملف'
                }, {
                    extend: 'print',
                    text: 'طباعة'
                },

            ]
        }
    }
});