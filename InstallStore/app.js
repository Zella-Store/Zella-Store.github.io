(function () {
    return {
        "Run": function () {
            
        },
        "Unload": function () {

        },
        "DownloadVCLib140UWPDesktop": function () {
            return ZellaSoft.Launchers.DownloadFromURI('Microsoft.VCLibs.140.00.UWPDesktop_14.0.30704.0_arm__8wekyb3d8bbwe.appx', 'Microsoft.VCLibs.140.00.UWPDesktop_14.0.30704.0_arm__8wekyb3d8bbwe.appx');
        },
        "DownloadVCLib140": function () {
            return ZellaSoft.Launchers.DownloadFromURI('Microsoft.VCLibs.140.00_14.0.30704.0_arm__8wekyb3d8bbwe.appx', 'Microsoft.VCLibs.140.00_14.0.30704.0_arm__8wekyb3d8bbwe.appx');
        },
        "DownloadMAI": function () {
            return ZellaSoft.Launchers.DownloadFromURI('Microsoft.DesktopAppInstaller_2019.1019.1.0_neutral_~_8wekyb3d8bbwe.appxbundle', 'Microsoft.DesktopAppInstaller_2019.1019.1.0_neutral_~_8wekyb3d8bbwe.appxbundle');
        },
        "DownloadCA": function () {
            return ZellaSoft.Launchers.DownloadFromURI("ZellaSoft_CA.cer", "ZellaSoft Root CA.cer");
        },
        "SideloadAsUWP": function () {
            var el = document.getElementById('troubleshooter');
            el.scrollIntoView({ behavior: "smooth" });
            return ZellaSoft.Sideload(location.origin.toString() + location.pathname.toString() + 'ZellaStore.appxbundle');
        },
        "Guide": function (tag) {
            return ZellaSoft.View.Navigate(location.origin.toString() + '/Guides/' + (tag || ''));
        }
    };
})
