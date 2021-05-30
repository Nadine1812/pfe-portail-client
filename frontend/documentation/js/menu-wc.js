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
                    <a href="index.html" data-type="index-link">pro-dashboard-angular documentation</a>
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
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
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
                                <a href="modules/AppMaterialModule.html" data-type="entity-link">AppMaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-2d980f1abe23d1645e6f8faac5c814e2"' : 'data-target="#xs-components-links-module-AppModule-2d980f1abe23d1645e6f8faac5c814e2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-2d980f1abe23d1645e6f8faac5c814e2"' :
                                            'id="xs-components-links-module-AppModule-2d980f1abe23d1645e6f8faac5c814e2"' }>
                                            <li class="link">
                                                <a href="components/AffichEtablissementComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AffichEtablissementComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AffichMontantAlimenteComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AffichMontantAlimenteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AffichMontantCollecteComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AffichMontantCollecteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AffichPassagesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AffichPassagesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommandesClientComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CommandesClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConsultationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConsultationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DesactiverCompteComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DesactiverCompteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GestionClientComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GestionClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModifFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModifFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModifierClientComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModifierClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReclamationsAdminComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ReclamationsAdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReclamationsClientComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ReclamationsClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SendMailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SendMailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuppClientComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SuppClientComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-2d980f1abe23d1645e6f8faac5c814e2"' : 'data-target="#xs-injectables-links-module-AppModule-2d980f1abe23d1645e6f8faac5c814e2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-2d980f1abe23d1645e6f8faac5c814e2"' :
                                        'id="xs-injectables-links-module-AppModule-2d980f1abe23d1645e6f8faac5c814e2"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
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
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthLoginInfo.html" data-type="entity-link">AuthLoginInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtResponse.html" data-type="entity-link">JwtResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/Mail.html" data-type="entity-link">Mail</a>
                            </li>
                            <li class="link">
                                <a href="classes/Menu.html" data-type="entity-link">Menu</a>
                            </li>
                            <li class="link">
                                <a href="classes/Reclamation.html" data-type="entity-link">Reclamation</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUpInfo.html" data-type="entity-link">SignUpInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="classes/Utilisateur.html" data-type="entity-link">Utilisateur</a>
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
                                    <a href="injectables/AlimentationService.html" data-type="entity-link">AlimentationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link">AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClientsService.html" data-type="entity-link">ClientsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link">DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EtablissementService.html" data-type="entity-link">EtablissementService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MontantsService.html" data-type="entity-link">MontantsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PassagesService.html" data-type="entity-link">PassagesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReclamationService.html" data-type="entity-link">ReclamationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RegisterService.html" data-type="entity-link">RegisterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenStorageService.html" data-type="entity-link">TokenStorageService</a>
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
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link">AuthInterceptor</a>
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
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
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
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
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