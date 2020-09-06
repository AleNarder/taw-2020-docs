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
                    <a href="index.html" data-type="index-link">frontend documentation</a>
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
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-0dbd85d27424a7f58f0d4582409accaf"' : 'data-target="#xs-components-links-module-AppModule-0dbd85d27424a7f58f0d4582409accaf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-0dbd85d27424a7f58f0d4582409accaf"' :
                                            'id="xs-components-links-module-AppModule-0dbd85d27424a7f58f0d4582409accaf"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuctionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuctionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuctionModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuctionModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuctionsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuctionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChatComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChatComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgotPasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfosnackComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InfosnackComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MessageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModeratorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModeratorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReservedComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ReservedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResetPasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResetPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StatsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-0dbd85d27424a7f58f0d4582409accaf"' : 'data-target="#xs-injectables-links-module-AppModule-0dbd85d27424a7f58f0d4582409accaf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-0dbd85d27424a7f58f0d4582409accaf"' :
                                        'id="xs-injectables-links-module-AppModule-0dbd85d27424a7f58f0d4582409accaf"' }>
                                        <li class="link">
                                            <a href="injectables/SocketioService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SocketioService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-0dbd85d27424a7f58f0d4582409accaf"' : 'data-target="#xs-pipes-links-module-AppModule-0dbd85d27424a7f58f0d4582409accaf"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-0dbd85d27424a7f58f0d4582409accaf"' :
                                            'id="xs-pipes-links-module-AppModule-0dbd85d27424a7f58f0d4582409accaf"' }>
                                            <li class="link">
                                                <a href="pipes/ClockPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClockPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/DatePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DatePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SearchPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchPipe</a>
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
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/appStateService.html" data-type="entity-link">appStateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuctionService.html" data-type="entity-link">AuctionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocationsService.html" data-type="entity-link">LocationsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatService.html" data-type="entity-link">StatService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
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
                                <a href="interceptors/WaitingInterceptor.html" data-type="entity-link">WaitingInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/App.html" data-type="entity-link">App</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Auction.html" data-type="entity-link">Auction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuctionData.html" data-type="entity-link">AuctionData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuctionOfferPayload.html" data-type="entity-link">AuctionOfferPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuctionResponse.html" data-type="entity-link">AuctionResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Auctions.html" data-type="entity-link">Auctions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Book.html" data-type="entity-link">Book</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Chat.html" data-type="entity-link">Chat</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Chat-1.html" data-type="entity-link">Chat</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChatConfiguration.html" data-type="entity-link">ChatConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChatPayload.html" data-type="entity-link">ChatPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Location.html" data-type="entity-link">Location</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Message.html" data-type="entity-link">Message</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModeratorStats.html" data-type="entity-link">ModeratorStats</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Offer.html" data-type="entity-link">Offer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link">Response</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StudentStats.html" data-type="entity-link">StudentStats</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserPayload.html" data-type="entity-link">UserPayload</a>
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
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
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