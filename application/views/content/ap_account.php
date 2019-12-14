<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<div class="card-body">
    <h5 class="card-title">TAMBAH PENGGUNA</h5>
    <div class="dropdown-divider"></div>
    <div class="shadow-sm btn-lg" id="choose_unit">
        <div class="card-body">
            <h6 class="">Pilih Unit</h6>
            <div class="text-white row justify-content-between">
                <div class="col-9">
                    <select class="btn btn-light w-100 mx-3">
                        <!-- <option selected>Pilih Unit</option> -->
                        <option value="1">Admin Unit IT</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="col-3">
                    <span class="btn btn-danger ml-3 w-100">Lock</span>
                </div>
            </div>
        </div>
    </div>
    <div class="card shadow-sm btn-lg mt-3" id="add">
        <div class="card-body">
            <h6>Data Pengguna Admin Unit IT</h6>
            <table id="data_table">
                <tr>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </table>
        </div>
    </div>
</div>

<script>
    var data = [
        [
            "Tiger Nixon",
            "<span class='btn btn-success'>Detail</span> <span class='btn btn-orange'>Edit</span> <span class='btn btn-danger'>Delete</span>",
        ]
    ];
    $(document).ready(function() {
        $('#data_table').DataTable({
            "autoWidth": false,
            "columnDefs": [{
                    "width": "70vw",
                    "targets": 0
                },
                {
                    "width": "30vw",
                    "targets": 1,
                    "className": "dt-center"
                }
            ],
            "paging": false,
            data: data
        });
    });
</script>