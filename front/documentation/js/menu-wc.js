'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">face-dog documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-6437780aa4c593ead7a7b853784d05566de2e35c1f92b92ecc1ad9f0c6befbdad41ec6cfc99062ad64e5054545a020c4dbb4970aba628fb15b71373299709998"' : 'data-target="#xs-components-links-module-AppModule-6437780aa4c593ead7a7b853784d05566de2e35c1f92b92ecc1ad9f0c6befbdad41ec6cfc99062ad64e5054545a020c4dbb4970aba628fb15b71373299709998"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-6437780aa4c593ead7a7b853784d05566de2e35c1f92b92ecc1ad9f0c6befbdad41ec6cfc99062ad64e5054545a020c4dbb4970aba628fb15b71373299709998"' :
                                            'id="xs-components-links-module-AppModule-6437780aa4c593ead7a7b853784d05566de2e35c1f92b92ecc1ad9f0c6befbdad41ec6cfc99062ad64e5054545a020c4dbb4970aba628fb15b71373299709998"' }>
                                            <li class="link">
                                                <a href="components/ActualizarUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActualizarUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AmigosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AmigosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AministracionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AministracionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AmpliarFotoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AmpliarFotoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChatComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ComentarioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComentarioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GaleriaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GaleriaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImgGaleriaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImgGaleriaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InicioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InicioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuNavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoticiasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoticiasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificacionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ParquesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ParquesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PerfilAmigoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PerfilAmigoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PerfilComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PerfilComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProgressSpinnerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProgressSpinnerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubirFotoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubirFotoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TarNoticiaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TarNoticiaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VeterinarioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VeterinarioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VistaVeterinarioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VistaVeterinarioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ZonasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ZonasComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-6437780aa4c593ead7a7b853784d05566de2e35c1f92b92ecc1ad9f0c6befbdad41ec6cfc99062ad64e5054545a020c4dbb4970aba628fb15b71373299709998"' : 'data-target="#xs-injectables-links-module-AppModule-6437780aa4c593ead7a7b853784d05566de2e35c1f92b92ecc1ad9f0c6befbdad41ec6cfc99062ad64e5054545a020c4dbb4970aba628fb15b71373299709998"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-6437780aa4c593ead7a7b853784d05566de2e35c1f92b92ecc1ad9f0c6befbdad41ec6cfc99062ad64e5054545a020c4dbb4970aba628fb15b71373299709998"' :
                                        'id="xs-injectables-links-module-AppModule-6437780aa4c593ead7a7b853784d05566de2e35c1f92b92ecc1ad9f0c6befbdad41ec6cfc99062ad64e5054545a020c4dbb4970aba628fb15b71373299709998"' }>
                                        <li class="link">
                                            <a href="injectables/LoaderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoaderService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-6437780aa4c593ead7a7b853784d05566de2e35c1f92b92ecc1ad9f0c6befbdad41ec6cfc99062ad64e5054545a020c4dbb4970aba628fb15b71373299709998"' : 'data-target="#xs-pipes-links-module-AppModule-6437780aa4c593ead7a7b853784d05566de2e35c1f92b92ecc1ad9f0c6befbdad41ec6cfc99062ad64e5054545a020c4dbb4970aba628fb15b71373299709998"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-6437780aa4c593ead7a7b853784d05566de2e35c1f92b92ecc1ad9f0c6befbdad41ec6cfc99062ad64e5054545a020c4dbb4970aba628fb15b71373299709998"' :
                                            'id="xs-pipes-links-module-AppModule-6437780aa4c593ead7a7b853784d05566de2e35c1f92b92ecc1ad9f0c6befbdad41ec6cfc99062ad64e5054545a020c4dbb4970aba628fb15b71373299709998"' }>
                                            <li class="link">
                                                <a href="pipes/DateChangePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DateChangePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/Safe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Safe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Amigo.html" data-type="entity-link" >Amigo</a>
                            </li>
                            <li class="link">
                                <a href="classes/Comentario.html" data-type="entity-link" >Comentario</a>
                            </li>
                            <li class="link">
                                <a href="classes/Doc.html" data-type="entity-link" >Doc</a>
                            </li>
                            <li class="link">
                                <a href="classes/Document.html" data-type="entity-link" >Document</a>
                            </li>
                            <li class="link">
                                <a href="classes/Foto.html" data-type="entity-link" >Foto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Login.html" data-type="entity-link" >Login</a>
                            </li>
                            <li class="link">
                                <a href="classes/MyErrorStateMatcher.html" data-type="entity-link" >MyErrorStateMatcher</a>
                            </li>
                            <li class="link">
                                <a href="classes/Notificacion.html" data-type="entity-link" >Notificacion</a>
                            </li>
                            <li class="link">
                                <a href="classes/Usuario.html" data-type="entity-link" >Usuario</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ComunicacionComponentsService.html" data-type="entity-link" >ComunicacionComponentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ControlSocketsService.html" data-type="entity-link" >ControlSocketsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DocumentServiceService.html" data-type="entity-link" >DocumentServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/estilosService.html" data-type="entity-link" >estilosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GoogleMapsService.html" data-type="entity-link" >GoogleMapsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoaderService.html" data-type="entity-link" >LoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link" >MessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificacionService.html" data-type="entity-link" >NotificacionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserRegisterService.html" data-type="entity-link" >UserRegisterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuriosService.html" data-type="entity-link" >UsuriosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/YoutubeService.html" data-type="entity-link" >YoutubeService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/authInterceptor.html" data-type="entity-link" >authInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/HttpInterceptorService.html" data-type="entity-link" >HttpInterceptorService</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/LoaderInterceptors.html" data-type="entity-link" >LoaderInterceptors</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link" >AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AppGuard.html" data-type="entity-link" >AppGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/MyCanActive.html" data-type="entity-link" >MyCanActive</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});