var y=Object.defineProperty;var m=(t,r,e)=>r in t?y(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e;var v=(t,r,e)=>(m(t,typeof r!="symbol"?r+"":r,e),e);(function(){"use strict";var extendStatics=function(t,r){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])},extendStatics(t,r)};function __extends(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");extendStatics(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}function __awaiter(t,r,e,n){function o(i){return i instanceof e?i:new e(function(s){s(i)})}return new(e||(e=Promise))(function(i,s){function u(f){try{a(n.next(f))}catch(p){s(p)}}function c(f){try{a(n.throw(f))}catch(p){s(p)}}function a(f){f.done?i(f.value):o(f.value).then(u,c)}a((n=n.apply(t,r||[])).next())})}function __generator(t,r){var e={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(a){return function(f){return c([a,f])}}function c(a){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(e=0)),e;)try{if(n=1,o&&(i=a[0]&2?o.return:a[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[a[0]&2,i.value]),a[0]){case 0:case 1:i=a;break;case 4:return e.label++,{value:a[1],done:!1};case 5:e.label++,o=a[1],a=[0];continue;case 7:a=e.ops.pop(),e.trys.pop();continue;default:if(i=e.trys,!(i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){e=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){e.label=a[1];break}if(a[0]===6&&e.label<i[1]){e.label=i[1],i=a;break}if(i&&e.label<i[2]){e.label=i[2],e.ops.push(a);break}i[2]&&e.ops.pop(),e.trys.pop();continue}a=r.call(t,e)}catch(f){a=[6,f],o=0}finally{n=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}function __values(t){var r=typeof Symbol=="function"&&Symbol.iterator,e=r&&t[r],n=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(t,r){var e=typeof Symbol=="function"&&t[Symbol.iterator];if(!e)return t;var n=e.call(t),o,i=[],s;try{for(;(r===void 0||r-- >0)&&!(o=n.next()).done;)i.push(o.value)}catch(u){s={error:u}}finally{try{o&&!o.done&&(e=n.return)&&e.call(n)}finally{if(s)throw s.error}}return i}function __spreadArray(t,r,e){if(e||arguments.length===2)for(var n=0,o=r.length,i;n<o;n++)(i||!(n in r))&&(i||(i=Array.prototype.slice.call(r,0,n)),i[n]=r[n]);return t.concat(i||Array.prototype.slice.call(r))}function __await(t){return this instanceof __await?(this.v=t,this):new __await(t)}function __asyncGenerator(t,r,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e.apply(t,r||[]),o,i=[];return o={},s("next"),s("throw"),s("return"),o[Symbol.asyncIterator]=function(){return this},o;function s(l){n[l]&&(o[l]=function(h){return new Promise(function(b,d){i.push([l,h,b,d])>1||u(l,h)})})}function u(l,h){try{c(n[l](h))}catch(b){p(i[0][3],b)}}function c(l){l.value instanceof __await?Promise.resolve(l.value.v).then(a,f):p(i[0][2],l)}function a(l){u("next",l)}function f(l){u("throw",l)}function p(l,h){l(h),i.shift(),i.length&&u(i[0][0],i[0][1])}}function __asyncValues(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t[Symbol.asyncIterator],e;return r?r.call(t):(t=typeof __values=="function"?__values(t):t[Symbol.iterator](),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(i){e[i]=t[i]&&function(s){return new Promise(function(u,c){s=t[i](s),o(u,c,s.done,s.value)})}}function o(i,s,u,c){Promise.resolve(c).then(function(a){i({value:a,done:u})},s)}}typeof SuppressedError=="function"&&SuppressedError;function isFunction(t){return typeof t=="function"}function createErrorClass(t){var r=function(n){Error.call(n),n.stack=new Error().stack},e=t(r);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var UnsubscriptionError=createErrorClass(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,o){return o+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function arrRemove(t,r){if(t){var e=t.indexOf(r);0<=e&&t.splice(e,1)}}var Subscription=function(){function t(r){this.initialTeardown=r,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var r,e,n,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=__values(s),c=u.next();!c.done;c=u.next()){var a=c.value;a.remove(this)}}catch(d){r={error:d}}finally{try{c&&!c.done&&(e=u.return)&&e.call(u)}finally{if(r)throw r.error}}else s.remove(this);var f=this.initialTeardown;if(isFunction(f))try{f()}catch(d){i=d instanceof UnsubscriptionError?d.errors:[d]}var p=this._finalizers;if(p){this._finalizers=null;try{for(var l=__values(p),h=l.next();!h.done;h=l.next()){var b=h.value;try{execFinalizer(b)}catch(d){i=i??[],d instanceof UnsubscriptionError?i=__spreadArray(__spreadArray([],__read(i)),__read(d.errors)):i.push(d)}}}catch(d){n={error:d}}finally{try{h&&!h.done&&(o=l.return)&&o.call(l)}finally{if(n)throw n.error}}}if(i)throw new UnsubscriptionError(i)}},t.prototype.add=function(r){var e;if(r&&r!==this)if(this.closed)execFinalizer(r);else{if(r instanceof t){if(r.closed||r._hasParent(this))return;r._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(r)}},t.prototype._hasParent=function(r){var e=this._parentage;return e===r||Array.isArray(e)&&e.includes(r)},t.prototype._addParent=function(r){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(r),e):e?[e,r]:r},t.prototype._removeParent=function(r){var e=this._parentage;e===r?this._parentage=null:Array.isArray(e)&&arrRemove(e,r)},t.prototype.remove=function(r){var e=this._finalizers;e&&arrRemove(e,r),r instanceof t&&r._removeParent(this)},t.EMPTY=function(){var r=new t;return r.closed=!0,r}(),t}(),EMPTY_SUBSCRIPTION=Subscription.EMPTY;function isSubscription(t){return t instanceof Subscription||t&&"closed"in t&&isFunction(t.remove)&&isFunction(t.add)&&isFunction(t.unsubscribe)}function execFinalizer(t){isFunction(t)?t():t.unsubscribe()}var config={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},timeoutProvider={setTimeout:function(t,r){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];var o=timeoutProvider.delegate;return o!=null&&o.setTimeout?o.setTimeout.apply(o,__spreadArray([t,r],__read(e))):setTimeout.apply(void 0,__spreadArray([t,r],__read(e)))},clearTimeout:function(t){var r=timeoutProvider.delegate;return((r==null?void 0:r.clearTimeout)||clearTimeout)(t)},delegate:void 0};function reportUnhandledError(t){timeoutProvider.setTimeout(function(){throw t})}function noop(){}function errorContext(t){t()}var Subscriber=function(t){__extends(r,t);function r(e){var n=t.call(this)||this;return n.isStopped=!1,e?(n.destination=e,isSubscription(e)&&e.add(n)):n.destination=EMPTY_OBSERVER,n}return r.create=function(e,n,o){return new SafeSubscriber(e,n,o)},r.prototype.next=function(e){this.isStopped||this._next(e)},r.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},r.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},r.prototype._next=function(e){this.destination.next(e)},r.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},r.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},r}(Subscription),_bind=Function.prototype.bind;function bind(t,r){return _bind.call(t,r)}var ConsumerObserver=function(){function t(r){this.partialObserver=r}return t.prototype.next=function(r){var e=this.partialObserver;if(e.next)try{e.next(r)}catch(n){handleUnhandledError(n)}},t.prototype.error=function(r){var e=this.partialObserver;if(e.error)try{e.error(r)}catch(n){handleUnhandledError(n)}else handleUnhandledError(r)},t.prototype.complete=function(){var r=this.partialObserver;if(r.complete)try{r.complete()}catch(e){handleUnhandledError(e)}},t}(),SafeSubscriber=function(t){__extends(r,t);function r(e,n,o){var i=t.call(this)||this,s;if(isFunction(e)||!e)s={next:e??void 0,error:n??void 0,complete:o??void 0};else{var u;i&&config.useDeprecatedNextContext?(u=Object.create(e),u.unsubscribe=function(){return i.unsubscribe()},s={next:e.next&&bind(e.next,u),error:e.error&&bind(e.error,u),complete:e.complete&&bind(e.complete,u)}):s=e}return i.destination=new ConsumerObserver(s),i}return r}(Subscriber);function handleUnhandledError(t){reportUnhandledError(t)}function defaultErrorHandler(t){throw t}var EMPTY_OBSERVER={closed:!0,next:noop,error:defaultErrorHandler,complete:noop},observable=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function identity(t){return t}function pipeFromArray(t){return t.length===0?identity:t.length===1?t[0]:function(e){return t.reduce(function(n,o){return o(n)},e)}}var Observable=function(){function t(r){r&&(this._subscribe=r)}return t.prototype.lift=function(r){var e=new t;return e.source=this,e.operator=r,e},t.prototype.subscribe=function(r,e,n){var o=this,i=isSubscriber(r)?r:new SafeSubscriber(r,e,n);return errorContext(function(){var s=o,u=s.operator,c=s.source;i.add(u?u.call(i,c):c?o._subscribe(i):o._trySubscribe(i))}),i},t.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(e){r.error(e)}},t.prototype.forEach=function(r,e){var n=this;return e=getPromiseCtor(e),new e(function(o,i){var s=new SafeSubscriber({next:function(u){try{r(u)}catch(c){i(c),s.unsubscribe()}},error:i,complete:o});n.subscribe(s)})},t.prototype._subscribe=function(r){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(r)},t.prototype[observable]=function(){return this},t.prototype.pipe=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return pipeFromArray(r)(this)},t.prototype.toPromise=function(r){var e=this;return r=getPromiseCtor(r),new r(function(n,o){var i;e.subscribe(function(s){return i=s},function(s){return o(s)},function(){return n(i)})})},t.create=function(r){return new t(r)},t}();function getPromiseCtor(t){var r;return(r=t??config.Promise)!==null&&r!==void 0?r:Promise}function isObserver(t){return t&&isFunction(t.next)&&isFunction(t.error)&&isFunction(t.complete)}function isSubscriber(t){return t&&t instanceof Subscriber||isObserver(t)&&isSubscription(t)}function hasLift(t){return isFunction(t==null?void 0:t.lift)}function operate(t){return function(r){if(hasLift(r))return r.lift(function(e){try{return t(e,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function createOperatorSubscriber(t,r,e,n,o){return new OperatorSubscriber(t,r,e,n,o)}var OperatorSubscriber=function(t){__extends(r,t);function r(e,n,o,i,s,u){var c=t.call(this,e)||this;return c.onFinalize=s,c.shouldUnsubscribe=u,c._next=n?function(a){try{n(a)}catch(f){e.error(f)}}:t.prototype._next,c._error=i?function(a){try{i(a)}catch(f){e.error(f)}finally{this.unsubscribe()}}:t.prototype._error,c._complete=o?function(){try{o()}catch(a){e.error(a)}finally{this.unsubscribe()}}:t.prototype._complete,c}return r.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;t.prototype.unsubscribe.call(this),!n&&((e=this.onFinalize)===null||e===void 0||e.call(this))}},r}(Subscriber),ObjectUnsubscribedError=createErrorClass(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Subject=function(t){__extends(r,t);function r(){var e=t.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return r.prototype.lift=function(e){var n=new AnonymousSubject(this,this);return n.operator=e,n},r.prototype._throwIfClosed=function(){if(this.closed)throw new ObjectUnsubscribedError},r.prototype.next=function(e){var n=this;errorContext(function(){var o,i;if(n._throwIfClosed(),!n.isStopped){n.currentObservers||(n.currentObservers=Array.from(n.observers));try{for(var s=__values(n.currentObservers),u=s.next();!u.done;u=s.next()){var c=u.value;c.next(e)}}catch(a){o={error:a}}finally{try{u&&!u.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},r.prototype.error=function(e){var n=this;errorContext(function(){if(n._throwIfClosed(),!n.isStopped){n.hasError=n.isStopped=!0,n.thrownError=e;for(var o=n.observers;o.length;)o.shift().error(e)}})},r.prototype.complete=function(){var e=this;errorContext(function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var n=e.observers;n.length;)n.shift().complete()}})},r.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(r.prototype,"observed",{get:function(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0},enumerable:!1,configurable:!0}),r.prototype._trySubscribe=function(e){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,e)},r.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},r.prototype._innerSubscribe=function(e){var n=this,o=this,i=o.hasError,s=o.isStopped,u=o.observers;return i||s?EMPTY_SUBSCRIPTION:(this.currentObservers=null,u.push(e),new Subscription(function(){n.currentObservers=null,arrRemove(u,e)}))},r.prototype._checkFinalizedStatuses=function(e){var n=this,o=n.hasError,i=n.thrownError,s=n.isStopped;o?e.error(i):s&&e.complete()},r.prototype.asObservable=function(){var e=new Observable;return e.source=this,e},r.create=function(e,n){return new AnonymousSubject(e,n)},r}(Observable),AnonymousSubject=function(t){__extends(r,t);function r(e,n){var o=t.call(this)||this;return o.destination=e,o.source=n,o}return r.prototype.next=function(e){var n,o;(o=(n=this.destination)===null||n===void 0?void 0:n.next)===null||o===void 0||o.call(n,e)},r.prototype.error=function(e){var n,o;(o=(n=this.destination)===null||n===void 0?void 0:n.error)===null||o===void 0||o.call(n,e)},r.prototype.complete=function(){var e,n;(n=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||n===void 0||n.call(e)},r.prototype._subscribe=function(e){var n,o;return(o=(n=this.source)===null||n===void 0?void 0:n.subscribe(e))!==null&&o!==void 0?o:EMPTY_SUBSCRIPTION},r}(Subject),isArrayLike=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function isPromise(t){return isFunction(t==null?void 0:t.then)}function isInteropObservable(t){return isFunction(t[observable])}function isAsyncIterable(t){return Symbol.asyncIterator&&isFunction(t==null?void 0:t[Symbol.asyncIterator])}function createInvalidObservableTypeError(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function getSymbolIterator(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var iterator=getSymbolIterator();function isIterable(t){return isFunction(t==null?void 0:t[iterator])}function readableStreamLikeToAsyncGenerator(t){return __asyncGenerator(this,arguments,function(){var e,n,o,i;return __generator(this,function(s){switch(s.label){case 0:e=t.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,__await(e.read())];case 3:return n=s.sent(),o=n.value,i=n.done,i?[4,__await(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,__await(o)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function isReadableStreamLike(t){return isFunction(t==null?void 0:t.getReader)}function innerFrom(t){if(t instanceof Observable)return t;if(t!=null){if(isInteropObservable(t))return fromInteropObservable(t);if(isArrayLike(t))return fromArrayLike(t);if(isPromise(t))return fromPromise(t);if(isAsyncIterable(t))return fromAsyncIterable(t);if(isIterable(t))return fromIterable(t);if(isReadableStreamLike(t))return fromReadableStreamLike(t)}throw createInvalidObservableTypeError(t)}function fromInteropObservable(t){return new Observable(function(r){var e=t[observable]();if(isFunction(e.subscribe))return e.subscribe(r);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function fromArrayLike(t){return new Observable(function(r){for(var e=0;e<t.length&&!r.closed;e++)r.next(t[e]);r.complete()})}function fromPromise(t){return new Observable(function(r){t.then(function(e){r.closed||(r.next(e),r.complete())},function(e){return r.error(e)}).then(null,reportUnhandledError)})}function fromIterable(t){return new Observable(function(r){var e,n;try{for(var o=__values(t),i=o.next();!i.done;i=o.next()){var s=i.value;if(r.next(s),r.closed)return}}catch(u){e={error:u}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}r.complete()})}function fromAsyncIterable(t){return new Observable(function(r){process(t,r).catch(function(e){return r.error(e)})})}function fromReadableStreamLike(t){return fromAsyncIterable(readableStreamLikeToAsyncGenerator(t))}function process(t,r){var e,n,o,i;return __awaiter(this,void 0,void 0,function(){var s,u;return __generator(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),e=__asyncValues(t),c.label=1;case 1:return[4,e.next()];case 2:if(n=c.sent(),!!n.done)return[3,4];if(s=n.value,r.next(s),r.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return u=c.sent(),o={error:u},[3,11];case 6:return c.trys.push([6,,9,10]),n&&!n.done&&(i=e.return)?[4,i.call(e)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return r.complete(),[2]}})})}function map(t,r){return operate(function(e,n){var o=0;e.subscribe(createOperatorSubscriber(n,function(i){n.next(t.call(r,i,o++))}))})}var isArray=Array.isArray;function callOrApply(t,r){return isArray(r)?t.apply(void 0,__spreadArray([],__read(r))):t(r)}function mapOneOrManyArgs(t){return map(function(r){return callOrApply(t,r)})}function defer(t){return new Observable(function(r){innerFrom(t()).subscribe(r)})}function fromEventPattern(t,r,e){return e?fromEventPattern(t,r).pipe(mapOneOrManyArgs(e)):new Observable(function(n){var o=function(){for(var s=[],u=0;u<arguments.length;u++)s[u]=arguments[u];return n.next(s.length===1?s[0]:s)},i=t(o);return isFunction(r)?function(){return r(o,i)}:void 0})}function iif(t,r,e){return defer(function(){return t()?r:e})}function filter(t,r){return operate(function(e,n){var o=0;e.subscribe(createOperatorSubscriber(n,function(i){return t.call(r,i,o++)&&n.next(i)}))})}function tap(t,r,e){var n=isFunction(t)||r||e?{next:t,error:r,complete:e}:t;return n?operate(function(o,i){var s;(s=n.subscribe)===null||s===void 0||s.call(n);var u=!0;o.subscribe(createOperatorSubscriber(i,function(c){var a;(a=n.next)===null||a===void 0||a.call(n,c),i.next(c)},function(){var c;u=!1,(c=n.complete)===null||c===void 0||c.call(n),i.complete()},function(c){var a;u=!1,(a=n.error)===null||a===void 0||a.call(n,c),i.error(c)},function(){var c,a;u&&((c=n.unsubscribe)===null||c===void 0||c.call(n)),(a=n.finalize)===null||a===void 0||a.call(n)}))}):identity}class ReactiveEventBus{constructor(){v(this,"events$",new Subject)}onEvent(r){return iif(()=>r!==void 0,this.events$.pipe(filter(e=>r===e.name)),this.events$.asObservable())}dispatch(r){this.events$.next(r)}}const eventbus=new ReactiveEventBus;class CodeRunnerMessage{constructor(r){this.payload=r}}class MicromouseMoveMessage extends CodeRunnerMessage{constructor(){super(...arguments);v(this,"type","MICROMOUSE_MOVE")}}class MicromouseTimeoutMessage extends CodeRunnerMessage{constructor(){super(...arguments);v(this,"type","MICROMOUSE_TIMEOUT")}}let getRandomValues;const rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&(getRandomValues=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!getRandomValues))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}const byteToHex=[];for(let t=0;t<256;++t)byteToHex.push((t+256).toString(16).slice(1));function unsafeStringify(t,r=0){return(byteToHex[t[r+0]]+byteToHex[t[r+1]]+byteToHex[t[r+2]]+byteToHex[t[r+3]]+"-"+byteToHex[t[r+4]]+byteToHex[t[r+5]]+"-"+byteToHex[t[r+6]]+byteToHex[t[r+7]]+"-"+byteToHex[t[r+8]]+byteToHex[t[r+9]]+"-"+byteToHex[t[r+10]]+byteToHex[t[r+11]]+byteToHex[t[r+12]]+byteToHex[t[r+13]]+byteToHex[t[r+14]]+byteToHex[t[r+15]]).toLowerCase()}const randomUUID=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var native={randomUUID};function v4(t,r,e){if(native.randomUUID&&!r&&!t)return native.randomUUID();t=t||{};const n=t.random||(t.rng||rng)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,r){e=e||0;for(let o=0;o<16;++o)r[e+o]=n[o];return r}return unsafeStringify(n)}class DomainEvent{constructor(r){v(this,"datetime",new Date);v(this,"id",v4());this.data=r}}class MouseMoveEvent extends DomainEvent{constructor(){super(...arguments);v(this,"name","micromouse.mouse-move")}}class MouseWinEvent extends DomainEvent{constructor(){super(...arguments);v(this,"name","micromouse.mouse-win")}}class MoveMouseResponse{constructor(r,e,n){this.message=r,this.cellPosition=e,this.mouseMoved=n}}class Mouse{constructor(r,e){this.maze=r,this.currentPosition=e}move(r){const e=this.currentPosition.getCell(r);if(!e)return new MoveMouseResponse("⚠️  Raton culiao No puedes moverte fuera de tu universo 🪐",this.currentPosition,!1);if(!e.canWalk())return new MoveMouseResponse("✋ 🐁 no puedes ir por aca raton culiao.",this.currentPosition,!1);const n=this.maze.getPosition(e.position);return this.currentPosition=n,new MoveMouseResponse(`Me he movido 🐁 -> (${this.currentPosition.getCurrentPosition()})`,n,!0)}getCurrentPosition(){return this.currentPosition.getCurrentPosition()}getCurrentCell(){return this.currentPosition.value}getUpCell(){return this.currentPosition.up}getDownCell(){return this.currentPosition.down}getLeftCell(){return this.currentPosition.left}getRightCell(){return this.currentPosition.right}}class InvalidMazeLocationException extends Error{constructor(r){super(r),this.name="InvalidMazeLocationException"}}class InvalidCellNameException extends Error{constructor(r){super(r),this.name="InvalidCellNameException"}}class Cell{constructor(r,e){this.position=r,this.type=e}canWalk(){return this.type===" "||this.type==="S"}isExit(){return this.type==="S"}}class CellPosition{constructor(r,e,n,o,i){this.value=r,this.up=e,this.down=n,this.left=o,this.right=i}getCell(r){const e={up:this.up,down:this.down,left:this.left,right:this.right};if(!Object.keys(e).includes(r))throw new InvalidCellNameException(`Invalid cell position: ${r}. options: (${Object.keys(e).join(",")})`);return e[r]}getCurrentPosition(){return this.value.position}}class MouseMaze{constructor(r){this.maze=r}findIndexes(r){for(let e=0;e<this.maze.length;e++)for(let n=0;n<this.maze[e].length;n++)if(this.maze[e][n].position===r)return[e,n];return null}getPosition(r){const e=this.findIndexes(r);return e?this.showPositionMaze(e):null}showPositionMaze(r){const e=this.maze,n=r[0],o=r[1];if(n<0||o<0)throw new InvalidMazeLocationException("No se admiten coordenadas negativas");if(n>=e.length)throw new InvalidMazeLocationException("No se admiten coordenadas fuera de rango");if(o>=e[0].length)throw new InvalidMazeLocationException("No se admiten coordenadas fuera de rango");const i=e[n][o],s=n>0?e[n-1][o]:null,u=n<e.length-1?e[n+1][o]:null,c=o>0?e[n][o-1]:null,a=o<e[0].length-1?e[n][o+1]:null;return new CellPosition(i,s,u,c,a)}static create(r){const{matrix:e}=r,n=[];for(let o=0;o<e.length;o++){const i=[];for(let s=0;s<e[o].length;s++){const u=String.fromCharCode("A".charCodeAt(0)+o)+String(s),c=new Cell(u,e[o][s]);i.push(c)}n.push(i)}return new MouseMaze(n)}static mapMatrixToCells(r){const e=[];for(let n=0;n<r.length;n++){const o=[];for(let i=0;i<r[n].length;i++){const s=String.fromCharCode("A".charCodeAt(0)+n)+String(i),u=new Cell(s,r[n][i]);o.push(u)}e.push(o)}return e}}class MicroMouse{constructor(r,e,n=0){this.eventbus=r,this.mouse=e,this.moveDelay=n}async move(r){await new Promise(n=>setTimeout(n,this.moveDelay));const e=this.mouse.move(r);return this.eventbus.dispatch(new MouseMoveEvent({isMoved:e.mouseMoved,message:e.message,position:e.cellPosition.getCurrentPosition()})),e.mouseMoved&&e.cellPosition.value.isExit()&&this.eventbus.dispatch(new MouseWinEvent("Felicitaciones ganaste maldito bastardo!!")),e}static create(r){const e=MouseMaze.create({matrix:r.matrix}),n=new Mouse(e,e.getPosition("A0"));return new MicroMouse(eventbus,n,r.moveDelay)}getCurrentPosition(){return this.mouse.getCurrentPosition()}getCurrentCell(){return this.mouse.getCurrentCell()}getUpCell(){return this.mouse.getUpCell()}getDownCell(){return this.mouse.getDownCell()}getLeftCell(){return this.mouse.getLeftCell()}getRightCell(){return this.mouse.getRightCell()}}function sendMessage(t){self.postMessage(t)}function executeMicromouseCode(message){const micromouse=MicroMouse.create({matrix:message.payload.matrix,moveDelay:500});micromouse.getCurrentPosition();const evalCode=`
    ${message.payload.code}
    play(micromouse)
      .then(() => console.log("Code challenge executed"))
      .catch(err => console.error(err))
    `;eval(evalCode)}eventbus.onEvent("micromouse.mouse-move").subscribe({next:t=>{sendMessage(new MicromouseMoveMessage({micromouseEvent:t}))},error:t=>console.error(t)}),eventbus.onEvent("micromouse.mouse-timeout").subscribe({next:t=>{sendMessage(new MicromouseTimeoutMessage(t.data))},error:t=>console.error(t)});const message$=fromEventPattern(t=>self.addEventListener("message",t),t=>self.removeEventListener("message",t)).pipe(map(t=>t.data),tap(t=>console.log("sandbox-message",t)));message$.pipe(filter(t=>t.type==="START_MICROMOUSE")).subscribe({next:t=>executeMicromouseCode(t),error:t=>console.log(t)})})();
