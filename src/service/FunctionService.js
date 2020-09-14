
import $ from "jquery";

export default {
    DaftarKursi() {
        $(document).ready(function() {
            $('.selected').on('click', function() {
                $('.selected').removeClass('active');
                $(this).addClass('active');
            });
        });
    }
}