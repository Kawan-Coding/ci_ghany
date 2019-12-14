<div class="card-body">
    <h5 class="card-title">Profil Admin</h5>
    <div class="dropdown-divider"></div>
    <form action="">
    <div class="row">
        <div class="col-lg-4" style="padding: 12px;">
            <div class="border rounded d-lg-flex shadow-lg bgprofil" style="width: 100%;height: 223px;">
                <img class="justify-content-center m-auto pp" style="width: 148px;max-height: auto;height: 148px;" src="<?= base_url() ?>assets/img/aaa.jpg">
            </div>
        </div>
        <div class="col" style="padding: 12px;">
            <div class="border rounded  shadow-lg" style="background-color: #ffffff;width: 100%;height: 223px;padding:24px">
                <div class="row higlight">
                    <div class="col-lg-12">
                        <div style=""><label class="d-block">Silahkan Upload Foto Anda</label>
                        <input type="file" class="form-control-file" />
                    </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div>
        
            <div style="margin-top: 24px;"  class="form-group">
                <label class="d-block">Username</label>
                <input class="d-block form-control" value="Ariel_lovely"></input>
            </div>
            <div style="margin-top: 24px;" class="form-group">
                <label class="d-block">Password</label>
                <input class="d-block form-control" value="NTAP"></input></div>
            <div style="margin-top: 24px;" class="form-group">
                <label class="d-block">Email</label>
                <input class="d-block form-control" value="Ariel_lovely@mail.com"></input>
            </div>
            <div style="margin-top: 24px;" class="form-group">
                <label class="d-block">Nomor Telepon</label>
                <input class="d-block form-control" value="0857-9899-8888"></input>
            </div>
        </form>

    </div>

</div>

<style>
    .rounded {
        border-radius: 12px !important;
    }

    .pp {
        border-radius: 100px;
    }

    .higlight strong {
        color: #DD5251;
    }

    .bgprofil {
        background: rgb(255, 255, 255);
        background: linear-gradient(0deg, rgba(255, 255, 255, 1) 50%, rgba(79, 144, 2, 1) 50%);
    }
</style>