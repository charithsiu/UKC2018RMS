 (function(global) {
    var packages = {
    app: {
    main: './bootstrap.js',
    defaultExtension: 'js',
    style:[
            "styles.css",
            "../node_modules/bootstrap/dist/css/bootstrap.min.css",
            "../node_modules/datatables.net-dt/css/jquery.dataTables.css"
    ],
    scripts:[
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js",
        "../node_modules/datatables.net/js/jquery.dataTables.js"
    ]
    },
    '@ng-bootstrap/ng-bootstrap': {main: '/bundles/ng-bootstrap.js', defaultExtension: 'js'},
    };
    
    var map = {
    '@angular': 'lib/@angular',
    'rxjs': 'lib/rxjs',
    '@ng-bootstrap': '@ng-bootstrap',
    '@ng-bootstrap/ng-bootstrap': 'node_modules/@ng-bootstrap/ng-bootstrap'
    };
    var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'router',
    'platform-browser',
    'platform-browser-dynamic'
    ];
    var ngBootstrapMap = {
        '@ng-bootstrap/ng-bootstrap': '../lib/@ng-bootstrap/ng-bootstrap' //change the path according to your project structure
    }
    
    var ngBootstrapPackages = {
        '@ng-bootstrap/ng-bootstrap': { main: 'index.js', defaultExtension: 'js' }
    };
    
    var ngBootstrapPackageNames = [
        'accordion',
        'alert',
        'bundles',
        'buttons',
        'carousel',
        'collapse',
        'dropdown',
        'esm',
        'modal',
        'pagination',
        'popover',
        'progressbar',
        'rating',
        'tabset',
        'timepicker',
        'tooltip',
        'typeahead',
        'util'
    ];
    
    function ngBootstrapPackIndex(pkgName) {
        ngBootstrapPackages['@ng-bootstrap/ng-bootstrap/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
    }
    
    ngBootstrapPackageNames.forEach(ngBootstrapPackIndex);
    
    var ngBootstrapConfig = {
        map: ngBootstrapMap,
        packages: ngBootstrapPackages
    };
    ngPackageNames.forEach(function(pkgName) {
    packages['@angular/' + pkgName] = {
    main: '/bundles/' + pkgName + '.umd.js',
    defaultExtension: 'js' };
    });

    System.config({
    paths: {
            // alpha 11
    'rxjs/operators/*' : 'node_modules/rxjs/operators/*.js',
            // alpha 12, 13 & 14
    'rxjs/add/operator/*' : 'node_modules/rxjs/add/operator/*.js'
            },
    defaultJSExtensions: true,
    transpiler: null,
    packages: packages,
    map: map
    },ngBootstrapConfig);
    })(this);