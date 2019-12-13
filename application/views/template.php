<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>RSUD SIDOARJO</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<link rel="stylesheet" href="<?= base_url('assets/css/') ?>style.css">
	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
	<script type="text/javascript" src="<?= base_url('assets/js/canvas/canvas.js') ?>"></script>
</head>

<body>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item">
					<a href="" class="btn btn-success text-white shadow-sm mr-3">Admin Pusat Apps</a>
				</li>
				<li class="nav-item">
					<a href="" class="btn btn-light shadow-sm">
						<img class="img-mini rounded-circle " src="https://cdn1-production-images-kly.akamaized.net/SsbPRwmKv2f0DBTYS_9Mxf5q5xM=/410x0:1526x1116/640x640/filters:quality(75):strip_icc():format(jpeg):watermark(kly-media-production/assets/images/watermarks/liputan6/watermark-color-square-new.png,540,20,0)/kly-media-production/medias/2347678/original/025595500_1535787118-Luna_Maya__20_.jpg" alt="">
						Luna Maya | Admin Pusat
					</a>
				</li>
			</ul>
			<div class="my-2 my-lg-0">
				<ul class="navbar-nav mr-auto" id="list">
					<li class="nav-item">
						<a href="" class="list btn btn-success shadow-sm">
							<img class="img-mini rounded-circle " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAyVBMVEUrpuH////t7e3u7u7r6+srpuL///3//v////sqp+AtpOH///n18e////j//P7u7e4AmNoto+Px+vz4//4Ant0pp+YpqN738u4Am+EAoeYAnd8Aodz//fvm7O2y2u4ooORbtuV1wOTY7/jE3ulDrOIAl+EAltSVzeak1+z3//rZ5uzF5vWr2PJRtOdBr+aAwuPT6vZsuuOw1eWXy+FTr9y+3OqNyOh9xOxBqtlsv+Ijo+3n9vqOx+hbtt3K5+6P0OY0otEAk8jr9v9Cnd21AAASb0lEQVR4nO1dCXvauBa140pYwiyyZeElYCAQEghlCaE0NH19/f8/6kkkaYDYxosM7rw537Sjmc4EHbTcc6+urhRV4ErTtKt/aEspST/+Zfgvw5MMOb78Q1uKaL6S/fLPbCnaxadRsS3tX4Z/fUtTPpbklzO0Dlf9OT73Sin8QxpvlDSt3W6bHNaVZhjG7t81zkCzaHtoGFp73J88jNaL6VcOxH9Nu7PZqPNza1qcqaEV3IOCGDa0Bh8lc9751t0wz3U96gOsYLJDwEEo9Xw2XYyW47+SIR+Zm8fZwKcuxorCGAMKUBSEkPiFGOO/AQwEZ+pRtBhNtnzi/h2aprFrbUcLm/qCXCLYAaXT2VPbkNuXojRNe9ljvr8bp4QEFcQUrBAPdEdjw5DZF9mapsEX3mSBPcKXG8YEK0kpYqKw3RTGdPB4w38aLKfFN4z5jLlAdBlwbggkHUIxiopYp/wXJnRzZ5ZR02it9qPiAELS8AoZTYwRfqaLOd93GuXSNOOeTzBSEk/MCOy2V4aIt1pqeyvy0prGMG5ebJJqVsYCAYQBRXcWtx+l0DTa05QSwqQRfKNpu2jdlmEj8zGsqOp8yg1fUsuXBnyyBpwj31gvqmn6XYqADfhuLxlA/IU89iiLYSbNYJjffFs2tUNgbzDJ3L/8mqbjk4BgyQvwmCJyVmMjW//yapr+iiK+sxfLECGsAH8kZM6ZLb5mjTw3p/FLDrrppx+BXAwbrRtG7SI20HAg219n1aqZNI1mjLyAL5GzMeR6lX7dGufTNObUO9sEfQMChHbS91QgvT00Jj7fXc5NkY+j8906i8U31hSfnZ4izAbzUV9tFM2w0V5Rgs4/gsLtUBifqa2CNY0xZkHBKiYGGGA6MhpFahrjJ33+dTGCnCEgwSxRTzNqGqPjIJbTi89HESPCumZhFt94pAxckN8byMpMo1KSM2wYI4rIpelxYJeNC9E0rRlFtnQ3MD2AQhCnKF/TGGtPufwMfQPwt9I1jTFzZUdicoBLqq1ci99o/aAlIsgpEpZ4u0nEsPXIfcHzuRIJYONBW6KmMZb+pRl9Bl5pydRNAk3TmPvBJbR2PPDz95g+p9M0Y1dES8oGxLyZHIvfaGNWrjX4CgQU7hNLYNjQBpdzJk4A0UmjkVvTtHpu8sPc8wJh5LdPHt6c1DQdemkikQAI41V873d7afwQb/0SLsE3cIYBXZ88Ej/BcFoCdykSgCC+FHNpGmPml8FfioKI+GH/lEMcp2kaN35wiaBTGiDyspcdl1bTWAgXfbSUGzamj+G9VxNomp67C+KVGoQFdCvOorNY/IkvMf2gIACkoGAVu1nGMBwQu+wEd0BOJ5ZhlKYx7jylVF5vJDBWzCyaxvQu3fOkQESZtVJrGqguSm4mPsAQ8MfRmcZRFn9O/xqGACv2Sys1wykrs5o5ABCJN0+nGB5rgSen7GJmHwCRVTgPNULTcLcXl9GvjwRmz0sjjaYxHoKSRQ9PACPAUll8bVB6tXYMRJ/CExnDGFbUpXPpDqeHvYli+FnTQHXwd4iZQ9AnLamm0W7KdAqTGNxRTKppjK5bep/iMwCg4edRIQzHtJCc32TdBFldUoBxLzTb5jND48cF7QTGGGT7frnVZ2YMww8toF0pFwxyox0y/a+/kN8xEmmajiu51ykAbOJ5np2FIv9i8CaZpnk5+yoUN20AY4Q2ffZtPVpvhiS9ogIAI2+exOJv6fkzEhhD2Bui9U9LhdVaTe3c4iwrBZD155jUZ4YP9EwE325zid+B10TrvqrqOqzwPtZr/xlmymvBLImmmaLz5HUhsWdyxRzYXhNzerAKVQj5EFbresXMdh6EnMlpTTOmZ0sLQjhQgH/rz+a6rh6gUvUydQLgmXFS0zyeLT8WMASa3mJiQXhvVQ4Y1qsZv2awOW3xuzjd3cj0nQCvdyn53uK8dCy9el2p1OtVeDCGtWxjiBQ6P8XQ9ItehEDcorSx15zemTrkxODut4MxhFsvYzfID+OEppkUfeQrrq2j5yEbbVV4banhgPNmRl1FVka8pjG+FZ4bhEmTzvoQ6jVdv4YRFB9oJtWBAaJmvKYxWEF6hlsGImK3eOh9nwhesFKpRNDjWAQZPwd5k3iL3y7q2J6vPaYgOhx0TL0WNXJ/YGUP1tJ1PMPOs3xTsds6+fzxhvjHtqbXrKjV94H+beZoLV7FahpjHRRg7kU1jKB525vrVSEb1UrsGEJu/e+8zGEUAMyrOE3TlT2EIjOcEG75Jnzk6vWToyeMhwpXbuZpCujNAaMje2jJ1zPcJ7rllk+t8a7HD9476jXTCzLnYWH/cZ/RMcM+laRnuPODFBvzb7SJhOW7V+vWtV6N2T33GOqdJiMZGSKMFnEMH3xJaZaM81OYxw17XxXCRQxeInp8lt7DBeeX9Zu2ldXR7e8DTbOWdOAk7q97QyJcvnpVT0jtnWHdyqE6+BhSa4+ReqhpjG7yiivx8If+7KeuV2u6xccwFUMVToY5PhkwZ6xFa5pBLlqiTpKCGAmGtz2xde72Fph0dv4hCHs5MggAC/ylEWXxuaLJx1AkE2Pqc5+oWn1zamHKAeTQaY5wJmeIH6MZjvM5FojZTnPwYHLDXq9DPY5FHCZOnpWCMOkZUZrGeMoWhOK2C/C9k/hNPNpCHdZ1aOlQTT96r/N6RnNlEGA8NSI1TSeT+7urUaYEvj+bw2rmkXuFbtUgZnkCtiJs+sFIYN8ePmRah4KhR18mdWhZCVR1LOpWbT4EeWapiOB9MDpmuM7y3SEA7NvZFsJrndv2lBvnMa6t2ixrAOMPRZEDFsFwkZ4hHz+bBdxlr2dad8eoW7qS+64/3YYx3Jn9afqfxpcg3dzrXIlI4Me/pOu+k/vyA52rEZrmapD+ZyMFo3u1Us85O9+hq7P8qUr0SYvQNPMMP5q8nfdIggVJ/sNLemdEWPyfGQQ9Vn5JJMi/5SHLrYz9dRTDG5TeAUZ4IJXhLGuQbQ94ZkRomqcMziFGjK9CGduoCDCqavKSoNHwvzXCNY02yeDgE4X2a3mt4Bvqqv7TAfmjDOCbGq5pjCwMAXIXMK0HGAEd1nrPEiJFoHdwF+qAYYYZghWnw+eXdZ2fYa1i+VhC0J2PYThDbZ5tDeDmBFbqVv5x1PWJlIzBcIYC/WwnawwM79SahDGswu9SMq/pTI3QNFksviKiW6j5YuZ0m3YMLTkXIOg6StOMM/5EURv3diTEqZVrU4UTR0osky6jLH72QBRiZOiOTDVhzDeKYVdO0udhtvA+w1YG3+INgDHkNHt9Xa3svKhM247lZcoT+szwJjJOs8i80Imobc2C5ktfr1l8tqZnyFXD01BOxN0fR2iaL+o6pyhkCDe7c3hdSXYEsw8RuVpkP3E6hKlGxWnucqYp2OIs+3bTyRCPgvV708NyGKIPRscMOzlT2oR3zkk66M7aJZGk2HZgvfrgiVrXOSGydY6S2/YZzvOmmuzePxCJeN7jfdLjwlfour6SUo0RANINZbibtVtZaYlA8W6/bWspziz0a/NW0tElXn8w2jH80DSNti/pCBgr2KbDxTb5GKq1uzwnTn8AGKaPhzeg9s+eDIZzRWMPgAFt9kwIdSvZbB1gGReReP/dp8iTmStuEGVmtQHgNEeV+0SaHG6bkr5bQA/r1R0y/EHljSHfcgCzHfa7enJP5X8O11RKbQOEgd9uRGmaL8YykFguSZgOphDuPepWbLy4IoIEv2wp6eX8a10d1hs+zKfpD2XntQFE/jupVe5PzNFq35FVuBf39hmpx/mlivSSV0h5vt2eOAmu3MOeK+eGAFD85QGjY4Zd2QT5umb2Kn4E1et7q5k9v+QAfCu9iWU4ypqpEwXRbb4U44UqhJOmrM9DpB3O8G3WzgtJgrZR/CzV1RcJoe5XgJfjV6MOcoS1diE1WEVaaxxHeO9I+1iyjs0RbrSmxdQZ2OjVmNC/3qHSrsu58/gMWmNUCENwO1Ejc7q5wX8JpN2AAMdlo47vPd14uV80CgPpwui0bmjKM8NgcereU9uWIoCPgBSnHzlF1dpDU9qFQPvh5L2nBS7ich7wX2oRY3gN4UrJ79zvgLE//nRl/fhW0FKOAj4EAGjYj1iHep27FZLGkIWVHThmOA4KKNvC/VK3p4bLb6vakVfBwV2fZmi84AIur/F5cbuthyZMWdWVtEmD/YNgcPhdbm35LL+ap0gQeJ7podvptZntnloY8Cbk5YRPd7lNWsCVC+EaOWaom1jrZLsRGwb644PHn9bnu9yLYipEIbquhTGsfmXSROku3+t09ZZJUffxnVA/eOsQWWMIpmoihrCgW7KEjo49YfGPI0fSzgYU79j5japP8yAjqeUzGP6vWbcOPMWKWYUDLCmuABRydcAjuj5N21WKKY3RHFWPDQbsSwp184UejBLXp5kBVgBDDLBvqYfe/rX+zZMUwESEhlejDatIlzNnPwo2a3aOViK8p0BW8It8P+YRzdBYoEJmKcCDo0xbOHGkOYa0H8vwz6zdCYB5UQWSncneGIoj/5WcQLBA9xOPmJp7xrSY68CAMXFy+sFSWggaA+9GS1FzT7j6RdSat5nXqVZe4xkQctPR8+QwRIq7aqWpuXdldAt57yH4Ffimdf0qwGH9enuryJmk9sa5iXhDIKqO8A0r4s4zwyx4EVVodp9Sr/aopKAQIt+NUB7hmmZ3q7tbhK5BfO47dzpfiXXuSel9WWeGXNZvw3mEa5pdq5/z6kpUVzC47cCqfl3X1RqSNU2Q2zMieETWoK2o62Jqmtm/wO1dVSxFOMh3Se0D3Ptsp68jrJpcJRRyiKGg5qIP9Z8bKskWEuaOPtVsScBQXcoLtR93yW16tEkUSW9hEjukslC8pnltNV7k6Y0DAL7+MCFK1uJ6xz+OOTfap96f0DSvy1TUHyiiFC0WL13v6MlgCPAu6znb2wgjr/zFdm3uJFhREzTO4osWhJsiDjGkAhFEo0t5n2KoqtsSvXkYDsDImymMZhilBXatjn+R142Tgq9lsgmtHpz4vaeifGFpwG4/53tPZqkrCiOFxj3eccriv2XVeplrxRQOoNiL+N4nYajeebgEL8iGAgSKBZMyDNEC761ZSd+B4KrBvznZ+wRvWGrGymeohHaRETqR9IZle2AXXA8zCxBxO6cm6GmL//bf/PZJUdUGswO7o5NLMCnDK+Hwl+uZR1HKQdyFTcQwVtO8t+aeIquElAwg7lCsTvVZTaRp3lutpWOXiKECyMpKNDRq8ne5l16ZFKo/SDJBE1r8t5bR8VBJDCPGYGpJZ9hoqJ0hKMkw+hvr5OujaTTNn1aHna3UdyTEE0buCibus5roXe731q4WGLjso5Z28Mtd7J7lTNbnZJrmY7sZIyItNSQjmLtOvgSTW/w/2425opd9ZId5nRRLMD3DK7XSFfLmMiSRqFk4SdrTD4ZJDed7a+1fSt1gxWbjFD1NpWn2WsbSv8zzpBjQhZWKXCpNs2cZje3gEq+RY+yMUi7BdJrmIFQ8ayJ2Tm8D8A+jLOQRmaIYcuOPg+CMHiPf27xee3dvOjPDhPrgT8t88c8ZSCX+8v2EMG1P02ia/RaXqcRDSuHmH2CFIIX2zJT9y6hpDltW3iqVSYA4R3cTf/Yi1+J/tLj67Q8Kf9EEMeSvtfizl6IYCmiPiABWjHnEYoYi11+MW5n7l03T7LcaRntGn5VfRRDkzigLnJe+oWXvXzZNc9wyv1NpufZ7EMWnnM2T0cjbv4z2cL/VGs+KuCuFva9PhtFo5O5ffoZXWqu9Zj5iRELtUZGpgTDCxOvO1ahUtfMz5I5jpTNwEJMxlMgmzPdnfQm9yqVpQlrzLqX5HCv0ytDZjNrSepVZ03xuNbTW9mHlUlukAqUuA4MI4d4DQ8QhM6GwU0Vi4lu57OFnFdB/2NCACF2ejiEWo287pLc8LhiQt5XP4n+KcUCoauO7hU39lBV7gUKdwfqpHf7ydHkYvrYMoz1Z80VJFYKFEyku+SLxFKc4aN09LMdbIuginsYVf0xcf/DtYcs1kvS+5NU0kTqC/93sPy6Y7znk9YVfzP+OX99+4tyI+Athm/nUxavZcpzfsBenaeJpzh/WixXyKfWxqFeHubcuNiFC+L/xN93ew9O4XVgPZGmamBb3P4xWy7gyf/cnD7Pu9OsAscFm2l2Mljf93xb/U0OToFrOYfGTtDSt3R5vt1vTFEs1Omv572XILaZW9HgVq2nK2pKmaUrbKsAelqtVhMUvV+v/geHHkizO6F6yVaCmKUvrjPbwQq1/Gf79rVeGHxvqP6/1Pyb6ncM8v2o4AAAAAElFTkSuQmCC" alt="">
							Telegram
						</a>
					</li>
					<li class="nav-item">
						<a href="" class="list btn btn-success shadow-sm">
							<span class="badge badge-light btn text-danger"> 2 </span>
							Notifikasi
						</a>
					</li>
					<li class="nav-item">
						<a href="" class="list btn btn-danger shadow-sm">
							Close
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<br>
	<section id="content">
		<div class="row">
			<div class="col-md-8">
				<div class="btn-lg shadow">
					<div class="card-body">
						<h5 class="card-title">Dashboard</h5>
						<div class="dropdown-divider"></div>
						<div class="row">
							<div class="col">
								<div class="shadow btn-lg">
									<div class="card-body">
										<h6 class="">Pelayanan Permintaan Hari Ini</h6>
										<div class="text-white" id="list-dashboard">
											<div>
												<span class="btn btn-primary w-70">Unit IT</span>
												<span class="btn btn-primary w-10 ml-3">25 </span>
											</div>
											<div>
												<span class="btn btn-orange w-70">Unit IPS</span>
												<span class="btn btn-orange w-10 ml-3">25 </span>
											</div>
											<div>
												<span class="btn btn-pink w-70">Unit ITP</span>
												<span class="btn btn-pink w-10 ml-3">25 </span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="shadow btn-lg">
									<div class="card-body">
										<h6 class="">Penanganan Permintaan Hari Ini</h6>
										<div class="text-white " id="list-dashboard">
											<div>
												<span class="btn btn-primary w-10 ml-3">25 </span>
												<span class="btn btn-primary w-70">Unit IT</span>
											</div>
											<div>
												<span class="btn btn-orange w-10 ml-3">25 </span>
												<span class="btn btn-orange w-70">Unit IPS</span>
											</div>
											<div>
												<span class="btn btn-pink w-10 ml-3">25 </span>
												<span class="btn btn-pink w-70">Unit ITP</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col">
						<div class="shadow btn-lg mx-1 mb-5">
							<div class="card-body">
								<h6 class="">Laporan Aktifitas</h6>
								<select class="card btn mb-1">
									<option selected>Pilih Unit</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
								<div id="statistik">
								</div>
								<script>
									window.onload = function() {

										var chart = new CanvasJS.Chart("statistik", {
											exportEnabled: true,
											animationEnabled: true,
											height: 260,
											axisY: {
												title: "Oil Filter - Units",
												titleFontColor: "#4F81BC",
												lineColor: "#4F81BC",
												labelFontColor: "#4F81BC",
												tickColor: "#4F81BC"
											},
											axisY2: {
												title: "Clutch - Units",
												titleFontColor: "#C0504E",
												lineColor: "#C0504E",
												labelFontColor: "#C0504E",
												tickColor: "#C0504E"
											},
											toolTip: {
												shared: true
											},
											legend: {
												cursor: "pointer",
												itemclick: toggleDataSeries
											},
											data: [{
													type: "column",
													name: "Oil Filter",
													showInLegend: true,
													yValueFormatString: "#,##0.# Units",
													dataPoints: [{
															label: "New Jersey",
															y: 19034.5
														},
														{
															label: "Texas",
															y: 20015
														},
														{
															label: "Oregon",
															y: 25342
														},
														{
															label: "Montana",
															y: 20088
														},
														{
															label: "Massachusetts",
															y: 28234
														}
													]
												},
												{
													type: "column",
													name: "Clutch",
													axisYType: "secondary",
													showInLegend: true,
													yValueFormatString: "#,##0.# Units",
													dataPoints: [{
															label: "New Jersey",
															y: 210.5
														},
														{
															label: "Texas",
															y: 135
														},
														{
															label: "Oregon",
															y: 425
														},
														{
															label: "Montana",
															y: 130
														},
														{
															label: "Massachusetts",
															y: 528
														}
													]
												}
											]
										});
										chart.render();

										function toggleDataSeries(e) {
											if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
												e.dataSeries.visible = false;
											} else {
												e.dataSeries.visible = true;
											}
											e.chart.render();
										}

									}
								</script>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="btn-lg shadow text-center px-5 pb-5" id="navigate">
					<div class="align-items-center my-3">
						<img class="img-responsive w-40 " src="https://trello-attachments.s3.amazonaws.com/5df126306b68e96235431aad/5df131b2ae481a0efb0d92d9/5ac8d06424559539d6b7014ec073c5b5/logo_RSUD_App.png" alt="">
					</div>
					<div class="btn-lg shadow-sm bg-success text-white">
						<div class="row">
							<div class="col-3 d-flex align-items-center justify-content-center">
								<img class="img-jumbo rounded-circle " src="https://cdn1-production-images-kly.akamaized.net/SsbPRwmKv2f0DBTYS_9Mxf5q5xM=/410x0:1526x1116/640x640/filters:quality(75):strip_icc():format(jpeg):watermark(kly-media-production/assets/images/watermarks/liputan6/watermark-color-square-new.png,540,20,0)/kly-media-production/medias/2347678/original/025595500_1535787118-Luna_Maya__20_.jpg" alt="">
							</div>
							<div class="col text-left">
								<h6>DASHBOARD</h6>
								<p class="font-mini mt-n2 mb-0">merupakan preview dari aktifitas yang dilakukan masing-masing unit</p>
							</div>
						</div>
					</div>
					<div class="btn-lg shadow-sm">
						<div class="row">
							<div class="col-3 d-flex align-items-center justify-content-center">
								<img class="img-jumbo rounded-circle " src="https://cdn1-production-images-kly.akamaized.net/SsbPRwmKv2f0DBTYS_9Mxf5q5xM=/410x0:1526x1116/640x640/filters:quality(75):strip_icc():format(jpeg):watermark(kly-media-production/assets/images/watermarks/liputan6/watermark-color-square-new.png,540,20,0)/kly-media-production/medias/2347678/original/025595500_1535787118-Luna_Maya__20_.jpg" alt="">
							</div>
							<div class="col text-left">
								<h6>TAMBAH PENGGUNA</h6>
								<p class="font-mini mt-n2 mb-0">menambahkan pengguna dan hak akses pada aplikasi</p>
							</div>
						</div>
					</div>
					<div class="btn-lg shadow-sm">
						<div class="row">
							<div class="col-3 d-flex align-items-center justify-content-center">
								<img class="img-jumbo rounded-circle " src="https://cdn1-production-images-kly.akamaized.net/SsbPRwmKv2f0DBTYS_9Mxf5q5xM=/410x0:1526x1116/640x640/filters:quality(75):strip_icc():format(jpeg):watermark(kly-media-production/assets/images/watermarks/liputan6/watermark-color-square-new.png,540,20,0)/kly-media-production/medias/2347678/original/025595500_1535787118-Luna_Maya__20_.jpg" alt="">
							</div>
							<div class="col text-left">
								<h6>DATA PENGGUNA</h6>
								<p class="font-mini mt-n2 mb-0">merupakan kumpulan data dari seluruh pengguna aplikasi</p>
							</div>
						</div>
					</div>
					<div class="btn-lg shadow-sm">
						<div class="row">
							<div class="col-3 d-flex align-items-center justify-content-center">
								<img class="img-jumbo rounded-circle " src="https://cdn1-production-images-kly.akamaized.net/SsbPRwmKv2f0DBTYS_9Mxf5q5xM=/410x0:1526x1116/640x640/filters:quality(75):strip_icc():format(jpeg):watermark(kly-media-production/assets/images/watermarks/liputan6/watermark-color-square-new.png,540,20,0)/kly-media-production/medias/2347678/original/025595500_1535787118-Luna_Maya__20_.jpg" alt="">
							</div>
							<div class="col text-left">
								<h6>AKTIVITAS UNIT</h6>
								<p class="font-mini mt-n2 mb-0">untuk memantau aktifitas unit</p>
							</div>
						</div>
					</div>
					<div class="btn-lg shadow-sm">
						<div class="row">
							<div class="col-3 d-flex align-items-center justify-content-center">
								<img class="img-jumbo rounded-circle " src="https://cdn1-production-images-kly.akamaized.net/SsbPRwmKv2f0DBTYS_9Mxf5q5xM=/410x0:1526x1116/640x640/filters:quality(75):strip_icc():format(jpeg):watermark(kly-media-production/assets/images/watermarks/liputan6/watermark-color-square-new.png,540,20,0)/kly-media-production/medias/2347678/original/025595500_1535787118-Luna_Maya__20_.jpg" alt="">
							</div>
							<div class="col text-left">
								<h5>LAPORAN AKTIFITAS</h5>
								<p class="font-mini mt-n2 mb-0">kumpulan laporan aktifitas yang dilakukan oleh setiap unit</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<br><br>
	<footer class="vw-100 bg-success text-white text-center">Cloud Astro C 2019</footer>
</body>

</html>