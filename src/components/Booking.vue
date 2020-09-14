<template>
    <div class="booking">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>Nama</label>
                    <input type="text" class="form-control" v-model="Nama">
                </div>
                <div class="form-group">
                    <label>Jadwal Keberangkatan</label>
                    <input type="text" class="form-control" v-model="JadwalKeberangkatan">
                </div>
                <div class="form-group">
                    <label>Jam</label>
                    <input type="time" class="form-control" v-model="Jam">
                </div>
                <div class="form-group">
                    <label>Berangkat</label>
                    <input type="text" class="form-control" v-model="Berangkat">
                </div>
                <div class="form-group">
                    <label>Tanggal</label>
                    <input type="date" class="form-control" v-model="Tanggal">
                </div>
                <div class="form-group">
                    <label>Jumlah Tiket</label>
                    <input type="text" class="form-control" v-model="JumlahTiket">
                </div>
                <div class="form-group">
                    <label>Harga Tiket</label>
                    <input type="text" class="form-control" v-model="HargaTiket">
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" @click="Booking()">Pesan</button>
                </div>
            </div>
            <div class="col-md-6">
                <div class="row">
                    <div class="col-md-4" v-for="(item) in dataKursi" :key="item.id">
                        <div class="box selected"  @click="BookingKursi(item.no_kursi)" v-if="item.booking == false">
                            <h3>{{ item.no_kursi }}</h3>
                        </div>
                        <div class="box selected booked" v-if="item.booking == true">
                            <h3>{{ item.no_kursi }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FunctionService from './../service/FunctionService'
export default {
    data() {
        return {
            dataKursi:               [],
            dataBooking:             [],
            dataFilter:              [],
            Nama:                    '',
            JadwalKeberangkatan:     '',
            Jam:                     '',
            Berangkat:               '',
            Tanggal:                 '',
            JumlahTiket:             '',
            HargaTiket:              '',
            No_kursi:                ''
        }
    },
    methods: {
        dataKursiDemo() {
            for (let i = 1; i <= 13; i++) {
                this.dataKursi.push({
                    no_kursi:        +[i],
                    booking:         false
                });
            }
        },
        BookingKursi(data) {
            for (let i = 0; i < this.dataKursi.length; i++) {
                if (this.dataKursi[i].no_kursi == data) {
                    this.dataKursi[i].booking       =       true;
                }
            }
            this.No_kursi           =        data;
        },
        
        Booking() {
            this.dataBooking.push({
                no_kursi:             this.No_kursi,
                Nama:                 this.Nama,
                JadwalKeberangkatan:  this.JadwalKeberangkatan,
                Jam:                  this.Jam,
                Berangkat:            this.Berangkat,
                Tanggal:              this.Tanggal,
                JumlahTiket:          this.JumlahTiket,
                HargaTiket:           this.HargaTiket,
                dataKursi:            this.dataKursi
            });
            this.BookingKursi();
        }
    },
    watch: {
        dataBooking() {
            
            window.console.log(this.dataBooking);
        }
    },
    mounted: function() {
        this.dataKursiDemo();
        FunctionService.DaftarKursi();
    }
}
</script>

<style lang="scss">
    @import "./../assets/booking.scss";
</style>