// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__22727 = arguments.length;
switch (G__22727) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22728 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22728 = (function (f,blockable,meta22729){
this.f = f;
this.blockable = blockable;
this.meta22729 = meta22729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22730,meta22729__$1){
var self__ = this;
var _22730__$1 = this;
return (new cljs.core.async.t_cljs$core$async22728(self__.f,self__.blockable,meta22729__$1));
});

cljs.core.async.t_cljs$core$async22728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22730){
var self__ = this;
var _22730__$1 = this;
return self__.meta22729;
});

cljs.core.async.t_cljs$core$async22728.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22728.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22728.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22728.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22728.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22729","meta22729",144744403,null)], null);
});

cljs.core.async.t_cljs$core$async22728.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22728.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22728";

cljs.core.async.t_cljs$core$async22728.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22728");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22728.
 */
cljs.core.async.__GT_t_cljs$core$async22728 = (function cljs$core$async$__GT_t_cljs$core$async22728(f__$1,blockable__$1,meta22729){
return (new cljs.core.async.t_cljs$core$async22728(f__$1,blockable__$1,meta22729));
});

}

return (new cljs.core.async.t_cljs$core$async22728(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__22734 = arguments.length;
switch (G__22734) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__22737 = arguments.length;
switch (G__22737) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__22740 = arguments.length;
switch (G__22740) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22742 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22742);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22742,ret){
return (function (){
return fn1.call(null,val_22742);
});})(val_22742,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__22744 = arguments.length;
switch (G__22744) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___22746 = n;
var x_22747 = (0);
while(true){
if((x_22747 < n__4607__auto___22746)){
(a[x_22747] = (0));

var G__22748 = (x_22747 + (1));
x_22747 = G__22748;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22749 = (i + (1));
i = G__22749;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22750 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22750 = (function (flag,meta22751){
this.flag = flag;
this.meta22751 = meta22751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22752,meta22751__$1){
var self__ = this;
var _22752__$1 = this;
return (new cljs.core.async.t_cljs$core$async22750(self__.flag,meta22751__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22750.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22752){
var self__ = this;
var _22752__$1 = this;
return self__.meta22751;
});})(flag))
;

cljs.core.async.t_cljs$core$async22750.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22750.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22750.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22750.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22750.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22751","meta22751",1655440525,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22750.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22750.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22750";

cljs.core.async.t_cljs$core$async22750.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22750");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22750.
 */
cljs.core.async.__GT_t_cljs$core$async22750 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22750(flag__$1,meta22751){
return (new cljs.core.async.t_cljs$core$async22750(flag__$1,meta22751));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22750(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22753 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22753 = (function (flag,cb,meta22754){
this.flag = flag;
this.cb = cb;
this.meta22754 = meta22754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22755,meta22754__$1){
var self__ = this;
var _22755__$1 = this;
return (new cljs.core.async.t_cljs$core$async22753(self__.flag,self__.cb,meta22754__$1));
});

cljs.core.async.t_cljs$core$async22753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22755){
var self__ = this;
var _22755__$1 = this;
return self__.meta22754;
});

cljs.core.async.t_cljs$core$async22753.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22753.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22753.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22753.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22754","meta22754",-806045963,null)], null);
});

cljs.core.async.t_cljs$core$async22753.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22753";

cljs.core.async.t_cljs$core$async22753.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22753");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22753.
 */
cljs.core.async.__GT_t_cljs$core$async22753 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22753(flag__$1,cb__$1,meta22754){
return (new cljs.core.async.t_cljs$core$async22753(flag__$1,cb__$1,meta22754));
});

}

return (new cljs.core.async.t_cljs$core$async22753(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22756_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22756_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22757_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22757_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22758 = (i + (1));
i = G__22758;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22764 = arguments.length;
var i__4731__auto___22765 = (0);
while(true){
if((i__4731__auto___22765 < len__4730__auto___22764)){
args__4736__auto__.push((arguments[i__4731__auto___22765]));

var G__22766 = (i__4731__auto___22765 + (1));
i__4731__auto___22765 = G__22766;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22761){
var map__22762 = p__22761;
var map__22762__$1 = (((((!((map__22762 == null))))?(((((map__22762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22762):map__22762);
var opts = map__22762__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22759){
var G__22760 = cljs.core.first.call(null,seq22759);
var seq22759__$1 = cljs.core.next.call(null,seq22759);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22760,seq22759__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__22768 = arguments.length;
switch (G__22768) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22667__auto___22814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22667__auto___22814){
return (function (){
var f__22668__auto__ = (function (){var switch__22572__auto__ = ((function (c__22667__auto___22814){
return (function (state_22792){
var state_val_22793 = (state_22792[(1)]);
if((state_val_22793 === (7))){
var inst_22788 = (state_22792[(2)]);
var state_22792__$1 = state_22792;
var statearr_22794_22815 = state_22792__$1;
(statearr_22794_22815[(2)] = inst_22788);

(statearr_22794_22815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (1))){
var state_22792__$1 = state_22792;
var statearr_22795_22816 = state_22792__$1;
(statearr_22795_22816[(2)] = null);

(statearr_22795_22816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (4))){
var inst_22771 = (state_22792[(7)]);
var inst_22771__$1 = (state_22792[(2)]);
var inst_22772 = (inst_22771__$1 == null);
var state_22792__$1 = (function (){var statearr_22796 = state_22792;
(statearr_22796[(7)] = inst_22771__$1);

return statearr_22796;
})();
if(cljs.core.truth_(inst_22772)){
var statearr_22797_22817 = state_22792__$1;
(statearr_22797_22817[(1)] = (5));

} else {
var statearr_22798_22818 = state_22792__$1;
(statearr_22798_22818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (13))){
var state_22792__$1 = state_22792;
var statearr_22799_22819 = state_22792__$1;
(statearr_22799_22819[(2)] = null);

(statearr_22799_22819[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (6))){
var inst_22771 = (state_22792[(7)]);
var state_22792__$1 = state_22792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22792__$1,(11),to,inst_22771);
} else {
if((state_val_22793 === (3))){
var inst_22790 = (state_22792[(2)]);
var state_22792__$1 = state_22792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22792__$1,inst_22790);
} else {
if((state_val_22793 === (12))){
var state_22792__$1 = state_22792;
var statearr_22800_22820 = state_22792__$1;
(statearr_22800_22820[(2)] = null);

(statearr_22800_22820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (2))){
var state_22792__$1 = state_22792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22792__$1,(4),from);
} else {
if((state_val_22793 === (11))){
var inst_22781 = (state_22792[(2)]);
var state_22792__$1 = state_22792;
if(cljs.core.truth_(inst_22781)){
var statearr_22801_22821 = state_22792__$1;
(statearr_22801_22821[(1)] = (12));

} else {
var statearr_22802_22822 = state_22792__$1;
(statearr_22802_22822[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (9))){
var state_22792__$1 = state_22792;
var statearr_22803_22823 = state_22792__$1;
(statearr_22803_22823[(2)] = null);

(statearr_22803_22823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (5))){
var state_22792__$1 = state_22792;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22804_22824 = state_22792__$1;
(statearr_22804_22824[(1)] = (8));

} else {
var statearr_22805_22825 = state_22792__$1;
(statearr_22805_22825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (14))){
var inst_22786 = (state_22792[(2)]);
var state_22792__$1 = state_22792;
var statearr_22806_22826 = state_22792__$1;
(statearr_22806_22826[(2)] = inst_22786);

(statearr_22806_22826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (10))){
var inst_22778 = (state_22792[(2)]);
var state_22792__$1 = state_22792;
var statearr_22807_22827 = state_22792__$1;
(statearr_22807_22827[(2)] = inst_22778);

(statearr_22807_22827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (8))){
var inst_22775 = cljs.core.async.close_BANG_.call(null,to);
var state_22792__$1 = state_22792;
var statearr_22808_22828 = state_22792__$1;
(statearr_22808_22828[(2)] = inst_22775);

(statearr_22808_22828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22667__auto___22814))
;
return ((function (switch__22572__auto__,c__22667__auto___22814){
return (function() {
var cljs$core$async$state_machine__22573__auto__ = null;
var cljs$core$async$state_machine__22573__auto____0 = (function (){
var statearr_22809 = [null,null,null,null,null,null,null,null];
(statearr_22809[(0)] = cljs$core$async$state_machine__22573__auto__);

(statearr_22809[(1)] = (1));

return statearr_22809;
});
var cljs$core$async$state_machine__22573__auto____1 = (function (state_22792){
while(true){
var ret_value__22574__auto__ = (function (){try{while(true){
var result__22575__auto__ = switch__22572__auto__.call(null,state_22792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22575__auto__;
}
break;
}
}catch (e22810){if((e22810 instanceof Object)){
var ex__22576__auto__ = e22810;
var statearr_22811_22829 = state_22792;
(statearr_22811_22829[(5)] = ex__22576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22830 = state_22792;
state_22792 = G__22830;
continue;
} else {
return ret_value__22574__auto__;
}
break;
}
});
cljs$core$async$state_machine__22573__auto__ = function(state_22792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22573__auto____1.call(this,state_22792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22573__auto____0;
cljs$core$async$state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22573__auto____1;
return cljs$core$async$state_machine__22573__auto__;
})()
;})(switch__22572__auto__,c__22667__auto___22814))
})();
var state__22669__auto__ = (function (){var statearr_22812 = f__22668__auto__.call(null);
(statearr_22812[(6)] = c__22667__auto___22814);

return statearr_22812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22669__auto__);
});})(c__22667__auto___22814))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22831){
var vec__22832 = p__22831;
var v = cljs.core.nth.call(null,vec__22832,(0),null);
var p = cljs.core.nth.call(null,vec__22832,(1),null);
var job = vec__22832;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22667__auto___23003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22667__auto___23003,res,vec__22832,v,p,job,jobs,results){
return (function (){
var f__22668__auto__ = (function (){var switch__22572__auto__ = ((function (c__22667__auto___23003,res,vec__22832,v,p,job,jobs,results){
return (function (state_22839){
var state_val_22840 = (state_22839[(1)]);
if((state_val_22840 === (1))){
var state_22839__$1 = state_22839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22839__$1,(2),res,v);
} else {
if((state_val_22840 === (2))){
var inst_22836 = (state_22839[(2)]);
var inst_22837 = cljs.core.async.close_BANG_.call(null,res);
var state_22839__$1 = (function (){var statearr_22841 = state_22839;
(statearr_22841[(7)] = inst_22836);

return statearr_22841;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22839__$1,inst_22837);
} else {
return null;
}
}
});})(c__22667__auto___23003,res,vec__22832,v,p,job,jobs,results))
;
return ((function (switch__22572__auto__,c__22667__auto___23003,res,vec__22832,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____0 = (function (){
var statearr_22842 = [null,null,null,null,null,null,null,null];
(statearr_22842[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__);

(statearr_22842[(1)] = (1));

return statearr_22842;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____1 = (function (state_22839){
while(true){
var ret_value__22574__auto__ = (function (){try{while(true){
var result__22575__auto__ = switch__22572__auto__.call(null,state_22839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22575__auto__;
}
break;
}
}catch (e22843){if((e22843 instanceof Object)){
var ex__22576__auto__ = e22843;
var statearr_22844_23004 = state_22839;
(statearr_22844_23004[(5)] = ex__22576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23005 = state_22839;
state_22839 = G__23005;
continue;
} else {
return ret_value__22574__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__ = function(state_22839){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____1.call(this,state_22839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__;
})()
;})(switch__22572__auto__,c__22667__auto___23003,res,vec__22832,v,p,job,jobs,results))
})();
var state__22669__auto__ = (function (){var statearr_22845 = f__22668__auto__.call(null);
(statearr_22845[(6)] = c__22667__auto___23003);

return statearr_22845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22669__auto__);
});})(c__22667__auto___23003,res,vec__22832,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22846){
var vec__22847 = p__22846;
var v = cljs.core.nth.call(null,vec__22847,(0),null);
var p = cljs.core.nth.call(null,vec__22847,(1),null);
var job = vec__22847;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___23006 = n;
var __23007 = (0);
while(true){
if((__23007 < n__4607__auto___23006)){
var G__22850_23008 = type;
var G__22850_23009__$1 = (((G__22850_23008 instanceof cljs.core.Keyword))?G__22850_23008.fqn:null);
switch (G__22850_23009__$1) {
case "compute":
var c__22667__auto___23011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23007,c__22667__auto___23011,G__22850_23008,G__22850_23009__$1,n__4607__auto___23006,jobs,results,process,async){
return (function (){
var f__22668__auto__ = (function (){var switch__22572__auto__ = ((function (__23007,c__22667__auto___23011,G__22850_23008,G__22850_23009__$1,n__4607__auto___23006,jobs,results,process,async){
return (function (state_22863){
var state_val_22864 = (state_22863[(1)]);
if((state_val_22864 === (1))){
var state_22863__$1 = state_22863;
var statearr_22865_23012 = state_22863__$1;
(statearr_22865_23012[(2)] = null);

(statearr_22865_23012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (2))){
var state_22863__$1 = state_22863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22863__$1,(4),jobs);
} else {
if((state_val_22864 === (3))){
var inst_22861 = (state_22863[(2)]);
var state_22863__$1 = state_22863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22863__$1,inst_22861);
} else {
if((state_val_22864 === (4))){
var inst_22853 = (state_22863[(2)]);
var inst_22854 = process.call(null,inst_22853);
var state_22863__$1 = state_22863;
if(cljs.core.truth_(inst_22854)){
var statearr_22866_23013 = state_22863__$1;
(statearr_22866_23013[(1)] = (5));

} else {
var statearr_22867_23014 = state_22863__$1;
(statearr_22867_23014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (5))){
var state_22863__$1 = state_22863;
var statearr_22868_23015 = state_22863__$1;
(statearr_22868_23015[(2)] = null);

(statearr_22868_23015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (6))){
var state_22863__$1 = state_22863;
var statearr_22869_23016 = state_22863__$1;
(statearr_22869_23016[(2)] = null);

(statearr_22869_23016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (7))){
var inst_22859 = (state_22863[(2)]);
var state_22863__$1 = state_22863;
var statearr_22870_23017 = state_22863__$1;
(statearr_22870_23017[(2)] = inst_22859);

(statearr_22870_23017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23007,c__22667__auto___23011,G__22850_23008,G__22850_23009__$1,n__4607__auto___23006,jobs,results,process,async))
;
return ((function (__23007,switch__22572__auto__,c__22667__auto___23011,G__22850_23008,G__22850_23009__$1,n__4607__auto___23006,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____0 = (function (){
var statearr_22871 = [null,null,null,null,null,null,null];
(statearr_22871[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__);

(statearr_22871[(1)] = (1));

return statearr_22871;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____1 = (function (state_22863){
while(true){
var ret_value__22574__auto__ = (function (){try{while(true){
var result__22575__auto__ = switch__22572__auto__.call(null,state_22863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22575__auto__;
}
break;
}
}catch (e22872){if((e22872 instanceof Object)){
var ex__22576__auto__ = e22872;
var statearr_22873_23018 = state_22863;
(statearr_22873_23018[(5)] = ex__22576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23019 = state_22863;
state_22863 = G__23019;
continue;
} else {
return ret_value__22574__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__ = function(state_22863){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____1.call(this,state_22863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__;
})()
;})(__23007,switch__22572__auto__,c__22667__auto___23011,G__22850_23008,G__22850_23009__$1,n__4607__auto___23006,jobs,results,process,async))
})();
var state__22669__auto__ = (function (){var statearr_22874 = f__22668__auto__.call(null);
(statearr_22874[(6)] = c__22667__auto___23011);

return statearr_22874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22669__auto__);
});})(__23007,c__22667__auto___23011,G__22850_23008,G__22850_23009__$1,n__4607__auto___23006,jobs,results,process,async))
);


break;
case "async":
var c__22667__auto___23020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23007,c__22667__auto___23020,G__22850_23008,G__22850_23009__$1,n__4607__auto___23006,jobs,results,process,async){
return (function (){
var f__22668__auto__ = (function (){var switch__22572__auto__ = ((function (__23007,c__22667__auto___23020,G__22850_23008,G__22850_23009__$1,n__4607__auto___23006,jobs,results,process,async){
return (function (state_22887){
var state_val_22888 = (state_22887[(1)]);
if((state_val_22888 === (1))){
var state_22887__$1 = state_22887;
var statearr_22889_23021 = state_22887__$1;
(statearr_22889_23021[(2)] = null);

(statearr_22889_23021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22888 === (2))){
var state_22887__$1 = state_22887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22887__$1,(4),jobs);
} else {
if((state_val_22888 === (3))){
var inst_22885 = (state_22887[(2)]);
var state_22887__$1 = state_22887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22887__$1,inst_22885);
} else {
if((state_val_22888 === (4))){
var inst_22877 = (state_22887[(2)]);
var inst_22878 = async.call(null,inst_22877);
var state_22887__$1 = state_22887;
if(cljs.core.truth_(inst_22878)){
var statearr_22890_23022 = state_22887__$1;
(statearr_22890_23022[(1)] = (5));

} else {
var statearr_22891_23023 = state_22887__$1;
(statearr_22891_23023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22888 === (5))){
var state_22887__$1 = state_22887;
var statearr_22892_23024 = state_22887__$1;
(statearr_22892_23024[(2)] = null);

(statearr_22892_23024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22888 === (6))){
var state_22887__$1 = state_22887;
var statearr_22893_23025 = state_22887__$1;
(statearr_22893_23025[(2)] = null);

(statearr_22893_23025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22888 === (7))){
var inst_22883 = (state_22887[(2)]);
var state_22887__$1 = state_22887;
var statearr_22894_23026 = state_22887__$1;
(statearr_22894_23026[(2)] = inst_22883);

(statearr_22894_23026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23007,c__22667__auto___23020,G__22850_23008,G__22850_23009__$1,n__4607__auto___23006,jobs,results,process,async))
;
return ((function (__23007,switch__22572__auto__,c__22667__auto___23020,G__22850_23008,G__22850_23009__$1,n__4607__auto___23006,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____0 = (function (){
var statearr_22895 = [null,null,null,null,null,null,null];
(statearr_22895[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__);

(statearr_22895[(1)] = (1));

return statearr_22895;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____1 = (function (state_22887){
while(true){
var ret_value__22574__auto__ = (function (){try{while(true){
var result__22575__auto__ = switch__22572__auto__.call(null,state_22887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22575__auto__;
}
break;
}
}catch (e22896){if((e22896 instanceof Object)){
var ex__22576__auto__ = e22896;
var statearr_22897_23027 = state_22887;
(statearr_22897_23027[(5)] = ex__22576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23028 = state_22887;
state_22887 = G__23028;
continue;
} else {
return ret_value__22574__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__ = function(state_22887){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____1.call(this,state_22887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__;
})()
;})(__23007,switch__22572__auto__,c__22667__auto___23020,G__22850_23008,G__22850_23009__$1,n__4607__auto___23006,jobs,results,process,async))
})();
var state__22669__auto__ = (function (){var statearr_22898 = f__22668__auto__.call(null);
(statearr_22898[(6)] = c__22667__auto___23020);

return statearr_22898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22669__auto__);
});})(__23007,c__22667__auto___23020,G__22850_23008,G__22850_23009__$1,n__4607__auto___23006,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22850_23009__$1)].join('')));

}

var G__23029 = (__23007 + (1));
__23007 = G__23029;
continue;
} else {
}
break;
}

var c__22667__auto___23030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22667__auto___23030,jobs,results,process,async){
return (function (){
var f__22668__auto__ = (function (){var switch__22572__auto__ = ((function (c__22667__auto___23030,jobs,results,process,async){
return (function (state_22920){
var state_val_22921 = (state_22920[(1)]);
if((state_val_22921 === (7))){
var inst_22916 = (state_22920[(2)]);
var state_22920__$1 = state_22920;
var statearr_22922_23031 = state_22920__$1;
(statearr_22922_23031[(2)] = inst_22916);

(statearr_22922_23031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22921 === (1))){
var state_22920__$1 = state_22920;
var statearr_22923_23032 = state_22920__$1;
(statearr_22923_23032[(2)] = null);

(statearr_22923_23032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22921 === (4))){
var inst_22901 = (state_22920[(7)]);
var inst_22901__$1 = (state_22920[(2)]);
var inst_22902 = (inst_22901__$1 == null);
var state_22920__$1 = (function (){var statearr_22924 = state_22920;
(statearr_22924[(7)] = inst_22901__$1);

return statearr_22924;
})();
if(cljs.core.truth_(inst_22902)){
var statearr_22925_23033 = state_22920__$1;
(statearr_22925_23033[(1)] = (5));

} else {
var statearr_22926_23034 = state_22920__$1;
(statearr_22926_23034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22921 === (6))){
var inst_22901 = (state_22920[(7)]);
var inst_22906 = (state_22920[(8)]);
var inst_22906__$1 = cljs.core.async.chan.call(null,(1));
var inst_22907 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22908 = [inst_22901,inst_22906__$1];
var inst_22909 = (new cljs.core.PersistentVector(null,2,(5),inst_22907,inst_22908,null));
var state_22920__$1 = (function (){var statearr_22927 = state_22920;
(statearr_22927[(8)] = inst_22906__$1);

return statearr_22927;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22920__$1,(8),jobs,inst_22909);
} else {
if((state_val_22921 === (3))){
var inst_22918 = (state_22920[(2)]);
var state_22920__$1 = state_22920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22920__$1,inst_22918);
} else {
if((state_val_22921 === (2))){
var state_22920__$1 = state_22920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22920__$1,(4),from);
} else {
if((state_val_22921 === (9))){
var inst_22913 = (state_22920[(2)]);
var state_22920__$1 = (function (){var statearr_22928 = state_22920;
(statearr_22928[(9)] = inst_22913);

return statearr_22928;
})();
var statearr_22929_23035 = state_22920__$1;
(statearr_22929_23035[(2)] = null);

(statearr_22929_23035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22921 === (5))){
var inst_22904 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22920__$1 = state_22920;
var statearr_22930_23036 = state_22920__$1;
(statearr_22930_23036[(2)] = inst_22904);

(statearr_22930_23036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22921 === (8))){
var inst_22906 = (state_22920[(8)]);
var inst_22911 = (state_22920[(2)]);
var state_22920__$1 = (function (){var statearr_22931 = state_22920;
(statearr_22931[(10)] = inst_22911);

return statearr_22931;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22920__$1,(9),results,inst_22906);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__22667__auto___23030,jobs,results,process,async))
;
return ((function (switch__22572__auto__,c__22667__auto___23030,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____0 = (function (){
var statearr_22932 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22932[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__);

(statearr_22932[(1)] = (1));

return statearr_22932;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____1 = (function (state_22920){
while(true){
var ret_value__22574__auto__ = (function (){try{while(true){
var result__22575__auto__ = switch__22572__auto__.call(null,state_22920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22575__auto__;
}
break;
}
}catch (e22933){if((e22933 instanceof Object)){
var ex__22576__auto__ = e22933;
var statearr_22934_23037 = state_22920;
(statearr_22934_23037[(5)] = ex__22576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23038 = state_22920;
state_22920 = G__23038;
continue;
} else {
return ret_value__22574__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__ = function(state_22920){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____1.call(this,state_22920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__;
})()
;})(switch__22572__auto__,c__22667__auto___23030,jobs,results,process,async))
})();
var state__22669__auto__ = (function (){var statearr_22935 = f__22668__auto__.call(null);
(statearr_22935[(6)] = c__22667__auto___23030);

return statearr_22935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22669__auto__);
});})(c__22667__auto___23030,jobs,results,process,async))
);


var c__22667__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22667__auto__,jobs,results,process,async){
return (function (){
var f__22668__auto__ = (function (){var switch__22572__auto__ = ((function (c__22667__auto__,jobs,results,process,async){
return (function (state_22973){
var state_val_22974 = (state_22973[(1)]);
if((state_val_22974 === (7))){
var inst_22969 = (state_22973[(2)]);
var state_22973__$1 = state_22973;
var statearr_22975_23039 = state_22973__$1;
(statearr_22975_23039[(2)] = inst_22969);

(statearr_22975_23039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (20))){
var state_22973__$1 = state_22973;
var statearr_22976_23040 = state_22973__$1;
(statearr_22976_23040[(2)] = null);

(statearr_22976_23040[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (1))){
var state_22973__$1 = state_22973;
var statearr_22977_23041 = state_22973__$1;
(statearr_22977_23041[(2)] = null);

(statearr_22977_23041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (4))){
var inst_22938 = (state_22973[(7)]);
var inst_22938__$1 = (state_22973[(2)]);
var inst_22939 = (inst_22938__$1 == null);
var state_22973__$1 = (function (){var statearr_22978 = state_22973;
(statearr_22978[(7)] = inst_22938__$1);

return statearr_22978;
})();
if(cljs.core.truth_(inst_22939)){
var statearr_22979_23042 = state_22973__$1;
(statearr_22979_23042[(1)] = (5));

} else {
var statearr_22980_23043 = state_22973__$1;
(statearr_22980_23043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (15))){
var inst_22951 = (state_22973[(8)]);
var state_22973__$1 = state_22973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22973__$1,(18),to,inst_22951);
} else {
if((state_val_22974 === (21))){
var inst_22964 = (state_22973[(2)]);
var state_22973__$1 = state_22973;
var statearr_22981_23044 = state_22973__$1;
(statearr_22981_23044[(2)] = inst_22964);

(statearr_22981_23044[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (13))){
var inst_22966 = (state_22973[(2)]);
var state_22973__$1 = (function (){var statearr_22982 = state_22973;
(statearr_22982[(9)] = inst_22966);

return statearr_22982;
})();
var statearr_22983_23045 = state_22973__$1;
(statearr_22983_23045[(2)] = null);

(statearr_22983_23045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (6))){
var inst_22938 = (state_22973[(7)]);
var state_22973__$1 = state_22973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22973__$1,(11),inst_22938);
} else {
if((state_val_22974 === (17))){
var inst_22959 = (state_22973[(2)]);
var state_22973__$1 = state_22973;
if(cljs.core.truth_(inst_22959)){
var statearr_22984_23046 = state_22973__$1;
(statearr_22984_23046[(1)] = (19));

} else {
var statearr_22985_23047 = state_22973__$1;
(statearr_22985_23047[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (3))){
var inst_22971 = (state_22973[(2)]);
var state_22973__$1 = state_22973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22973__$1,inst_22971);
} else {
if((state_val_22974 === (12))){
var inst_22948 = (state_22973[(10)]);
var state_22973__$1 = state_22973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22973__$1,(14),inst_22948);
} else {
if((state_val_22974 === (2))){
var state_22973__$1 = state_22973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22973__$1,(4),results);
} else {
if((state_val_22974 === (19))){
var state_22973__$1 = state_22973;
var statearr_22986_23048 = state_22973__$1;
(statearr_22986_23048[(2)] = null);

(statearr_22986_23048[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (11))){
var inst_22948 = (state_22973[(2)]);
var state_22973__$1 = (function (){var statearr_22987 = state_22973;
(statearr_22987[(10)] = inst_22948);

return statearr_22987;
})();
var statearr_22988_23049 = state_22973__$1;
(statearr_22988_23049[(2)] = null);

(statearr_22988_23049[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (9))){
var state_22973__$1 = state_22973;
var statearr_22989_23050 = state_22973__$1;
(statearr_22989_23050[(2)] = null);

(statearr_22989_23050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (5))){
var state_22973__$1 = state_22973;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22990_23051 = state_22973__$1;
(statearr_22990_23051[(1)] = (8));

} else {
var statearr_22991_23052 = state_22973__$1;
(statearr_22991_23052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (14))){
var inst_22951 = (state_22973[(8)]);
var inst_22953 = (state_22973[(11)]);
var inst_22951__$1 = (state_22973[(2)]);
var inst_22952 = (inst_22951__$1 == null);
var inst_22953__$1 = cljs.core.not.call(null,inst_22952);
var state_22973__$1 = (function (){var statearr_22992 = state_22973;
(statearr_22992[(8)] = inst_22951__$1);

(statearr_22992[(11)] = inst_22953__$1);

return statearr_22992;
})();
if(inst_22953__$1){
var statearr_22993_23053 = state_22973__$1;
(statearr_22993_23053[(1)] = (15));

} else {
var statearr_22994_23054 = state_22973__$1;
(statearr_22994_23054[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (16))){
var inst_22953 = (state_22973[(11)]);
var state_22973__$1 = state_22973;
var statearr_22995_23055 = state_22973__$1;
(statearr_22995_23055[(2)] = inst_22953);

(statearr_22995_23055[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (10))){
var inst_22945 = (state_22973[(2)]);
var state_22973__$1 = state_22973;
var statearr_22996_23056 = state_22973__$1;
(statearr_22996_23056[(2)] = inst_22945);

(statearr_22996_23056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (18))){
var inst_22956 = (state_22973[(2)]);
var state_22973__$1 = state_22973;
var statearr_22997_23057 = state_22973__$1;
(statearr_22997_23057[(2)] = inst_22956);

(statearr_22997_23057[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (8))){
var inst_22942 = cljs.core.async.close_BANG_.call(null,to);
var state_22973__$1 = state_22973;
var statearr_22998_23058 = state_22973__$1;
(statearr_22998_23058[(2)] = inst_22942);

(statearr_22998_23058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22667__auto__,jobs,results,process,async))
;
return ((function (switch__22572__auto__,c__22667__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____0 = (function (){
var statearr_22999 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22999[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__);

(statearr_22999[(1)] = (1));

return statearr_22999;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____1 = (function (state_22973){
while(true){
var ret_value__22574__auto__ = (function (){try{while(true){
var result__22575__auto__ = switch__22572__auto__.call(null,state_22973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22575__auto__;
}
break;
}
}catch (e23000){if((e23000 instanceof Object)){
var ex__22576__auto__ = e23000;
var statearr_23001_23059 = state_22973;
(statearr_23001_23059[(5)] = ex__22576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23060 = state_22973;
state_22973 = G__23060;
continue;
} else {
return ret_value__22574__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__ = function(state_22973){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____1.call(this,state_22973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22573__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22573__auto__;
})()
;})(switch__22572__auto__,c__22667__auto__,jobs,results,process,async))
})();
var state__22669__auto__ = (function (){var statearr_23002 = f__22668__auto__.call(null);
(statearr_23002[(6)] = c__22667__auto__);

return statearr_23002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22669__auto__);
});})(c__22667__auto__,jobs,results,process,async))
);

return c__22667__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__23062 = arguments.length;
switch (G__23062) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__23065 = arguments.length;
switch (G__23065) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__23068 = arguments.length;
switch (G__23068) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22667__auto___23117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22667__auto___23117,tc,fc){
return (function (){
var f__22668__auto__ = (function (){var switch__22572__auto__ = ((function (c__22667__auto___23117,tc,fc){
return (function (state_23094){
var state_val_23095 = (state_23094[(1)]);
if((state_val_23095 === (7))){
var inst_23090 = (state_23094[(2)]);
var state_23094__$1 = state_23094;
var statearr_23096_23118 = state_23094__$1;
(statearr_23096_23118[(2)] = inst_23090);

(statearr_23096_23118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (1))){
var state_23094__$1 = state_23094;
var statearr_23097_23119 = state_23094__$1;
(statearr_23097_23119[(2)] = null);

(statearr_23097_23119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (4))){
var inst_23071 = (state_23094[(7)]);
var inst_23071__$1 = (state_23094[(2)]);
var inst_23072 = (inst_23071__$1 == null);
var state_23094__$1 = (function (){var statearr_23098 = state_23094;
(statearr_23098[(7)] = inst_23071__$1);

return statearr_23098;
})();
if(cljs.core.truth_(inst_23072)){
var statearr_23099_23120 = state_23094__$1;
(statearr_23099_23120[(1)] = (5));

} else {
var statearr_23100_23121 = state_23094__$1;
(statearr_23100_23121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (13))){
var state_23094__$1 = state_23094;
var statearr_23101_23122 = state_23094__$1;
(statearr_23101_23122[(2)] = null);

(statearr_23101_23122[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (6))){
var inst_23071 = (state_23094[(7)]);
var inst_23077 = p.call(null,inst_23071);
var state_23094__$1 = state_23094;
if(cljs.core.truth_(inst_23077)){
var statearr_23102_23123 = state_23094__$1;
(statearr_23102_23123[(1)] = (9));

} else {
var statearr_23103_23124 = state_23094__$1;
(statearr_23103_23124[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (3))){
var inst_23092 = (state_23094[(2)]);
var state_23094__$1 = state_23094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23094__$1,inst_23092);
} else {
if((state_val_23095 === (12))){
var state_23094__$1 = state_23094;
var statearr_23104_23125 = state_23094__$1;
(statearr_23104_23125[(2)] = null);

(statearr_23104_23125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (2))){
var state_23094__$1 = state_23094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23094__$1,(4),ch);
} else {
if((state_val_23095 === (11))){
var inst_23071 = (state_23094[(7)]);
var inst_23081 = (state_23094[(2)]);
var state_23094__$1 = state_23094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23094__$1,(8),inst_23081,inst_23071);
} else {
if((state_val_23095 === (9))){
var state_23094__$1 = state_23094;
var statearr_23105_23126 = state_23094__$1;
(statearr_23105_23126[(2)] = tc);

(statearr_23105_23126[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (5))){
var inst_23074 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23075 = cljs.core.async.close_BANG_.call(null,fc);
var state_23094__$1 = (function (){var statearr_23106 = state_23094;
(statearr_23106[(8)] = inst_23074);

return statearr_23106;
})();
var statearr_23107_23127 = state_23094__$1;
(statearr_23107_23127[(2)] = inst_23075);

(statearr_23107_23127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (14))){
var inst_23088 = (state_23094[(2)]);
var state_23094__$1 = state_23094;
var statearr_23108_23128 = state_23094__$1;
(statearr_23108_23128[(2)] = inst_23088);

(statearr_23108_23128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (10))){
var state_23094__$1 = state_23094;
var statearr_23109_23129 = state_23094__$1;
(statearr_23109_23129[(2)] = fc);

(statearr_23109_23129[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (8))){
var inst_23083 = (state_23094[(2)]);
var state_23094__$1 = state_23094;
if(cljs.core.truth_(inst_23083)){
var statearr_23110_23130 = state_23094__$1;
(statearr_23110_23130[(1)] = (12));

} else {
var statearr_23111_23131 = state_23094__$1;
(statearr_23111_23131[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22667__auto___23117,tc,fc))
;
return ((function (switch__22572__auto__,c__22667__auto___23117,tc,fc){
return (function() {
var cljs$core$async$state_machine__22573__auto__ = null;
var cljs$core$async$state_machine__22573__auto____0 = (function (){
var statearr_23112 = [null,null,null,null,null,null,null,null,null];
(statearr_23112[(0)] = cljs$core$async$state_machine__22573__auto__);

(statearr_23112[(1)] = (1));

return statearr_23112;
});
var cljs$core$async$state_machine__22573__auto____1 = (function (state_23094){
while(true){
var ret_value__22574__auto__ = (function (){try{while(true){
var result__22575__auto__ = switch__22572__auto__.call(null,state_23094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22575__auto__;
}
break;
}
}catch (e23113){if((e23113 instanceof Object)){
var ex__22576__auto__ = e23113;
var statearr_23114_23132 = state_23094;
(statearr_23114_23132[(5)] = ex__22576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23133 = state_23094;
state_23094 = G__23133;
continue;
} else {
return ret_value__22574__auto__;
}
break;
}
});
cljs$core$async$state_machine__22573__auto__ = function(state_23094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22573__auto____1.call(this,state_23094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22573__auto____0;
cljs$core$async$state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22573__auto____1;
return cljs$core$async$state_machine__22573__auto__;
})()
;})(switch__22572__auto__,c__22667__auto___23117,tc,fc))
})();
var state__22669__auto__ = (function (){var statearr_23115 = f__22668__auto__.call(null);
(statearr_23115[(6)] = c__22667__auto___23117);

return statearr_23115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22669__auto__);
});})(c__22667__auto___23117,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22667__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22667__auto__){
return (function (){
var f__22668__auto__ = (function (){var switch__22572__auto__ = ((function (c__22667__auto__){
return (function (state_23154){
var state_val_23155 = (state_23154[(1)]);
if((state_val_23155 === (7))){
var inst_23150 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
var statearr_23156_23174 = state_23154__$1;
(statearr_23156_23174[(2)] = inst_23150);

(statearr_23156_23174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (1))){
var inst_23134 = init;
var state_23154__$1 = (function (){var statearr_23157 = state_23154;
(statearr_23157[(7)] = inst_23134);

return statearr_23157;
})();
var statearr_23158_23175 = state_23154__$1;
(statearr_23158_23175[(2)] = null);

(statearr_23158_23175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (4))){
var inst_23137 = (state_23154[(8)]);
var inst_23137__$1 = (state_23154[(2)]);
var inst_23138 = (inst_23137__$1 == null);
var state_23154__$1 = (function (){var statearr_23159 = state_23154;
(statearr_23159[(8)] = inst_23137__$1);

return statearr_23159;
})();
if(cljs.core.truth_(inst_23138)){
var statearr_23160_23176 = state_23154__$1;
(statearr_23160_23176[(1)] = (5));

} else {
var statearr_23161_23177 = state_23154__$1;
(statearr_23161_23177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (6))){
var inst_23137 = (state_23154[(8)]);
var inst_23141 = (state_23154[(9)]);
var inst_23134 = (state_23154[(7)]);
var inst_23141__$1 = f.call(null,inst_23134,inst_23137);
var inst_23142 = cljs.core.reduced_QMARK_.call(null,inst_23141__$1);
var state_23154__$1 = (function (){var statearr_23162 = state_23154;
(statearr_23162[(9)] = inst_23141__$1);

return statearr_23162;
})();
if(inst_23142){
var statearr_23163_23178 = state_23154__$1;
(statearr_23163_23178[(1)] = (8));

} else {
var statearr_23164_23179 = state_23154__$1;
(statearr_23164_23179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (3))){
var inst_23152 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23154__$1,inst_23152);
} else {
if((state_val_23155 === (2))){
var state_23154__$1 = state_23154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23154__$1,(4),ch);
} else {
if((state_val_23155 === (9))){
var inst_23141 = (state_23154[(9)]);
var inst_23134 = inst_23141;
var state_23154__$1 = (function (){var statearr_23165 = state_23154;
(statearr_23165[(7)] = inst_23134);

return statearr_23165;
})();
var statearr_23166_23180 = state_23154__$1;
(statearr_23166_23180[(2)] = null);

(statearr_23166_23180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (5))){
var inst_23134 = (state_23154[(7)]);
var state_23154__$1 = state_23154;
var statearr_23167_23181 = state_23154__$1;
(statearr_23167_23181[(2)] = inst_23134);

(statearr_23167_23181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (10))){
var inst_23148 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
var statearr_23168_23182 = state_23154__$1;
(statearr_23168_23182[(2)] = inst_23148);

(statearr_23168_23182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (8))){
var inst_23141 = (state_23154[(9)]);
var inst_23144 = cljs.core.deref.call(null,inst_23141);
var state_23154__$1 = state_23154;
var statearr_23169_23183 = state_23154__$1;
(statearr_23169_23183[(2)] = inst_23144);

(statearr_23169_23183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__22667__auto__))
;
return ((function (switch__22572__auto__,c__22667__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22573__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22573__auto____0 = (function (){
var statearr_23170 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23170[(0)] = cljs$core$async$reduce_$_state_machine__22573__auto__);

(statearr_23170[(1)] = (1));

return statearr_23170;
});
var cljs$core$async$reduce_$_state_machine__22573__auto____1 = (function (state_23154){
while(true){
var ret_value__22574__auto__ = (function (){try{while(true){
var result__22575__auto__ = switch__22572__auto__.call(null,state_23154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22575__auto__;
}
break;
}
}catch (e23171){if((e23171 instanceof Object)){
var ex__22576__auto__ = e23171;
var statearr_23172_23184 = state_23154;
(statearr_23172_23184[(5)] = ex__22576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23185 = state_23154;
state_23154 = G__23185;
continue;
} else {
return ret_value__22574__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22573__auto__ = function(state_23154){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22573__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22573__auto____1.call(this,state_23154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22573__auto____0;
cljs$core$async$reduce_$_state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22573__auto____1;
return cljs$core$async$reduce_$_state_machine__22573__auto__;
})()
;})(switch__22572__auto__,c__22667__auto__))
})();
var state__22669__auto__ = (function (){var statearr_23173 = f__22668__auto__.call(null);
(statearr_23173[(6)] = c__22667__auto__);

return statearr_23173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22669__auto__);
});})(c__22667__auto__))
);

return c__22667__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__22667__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22667__auto__,f__$1){
return (function (){
var f__22668__auto__ = (function (){var switch__22572__auto__ = ((function (c__22667__auto__,f__$1){
return (function (state_23191){
var state_val_23192 = (state_23191[(1)]);
if((state_val_23192 === (1))){
var inst_23186 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23191__$1 = state_23191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23191__$1,(2),inst_23186);
} else {
if((state_val_23192 === (2))){
var inst_23188 = (state_23191[(2)]);
var inst_23189 = f__$1.call(null,inst_23188);
var state_23191__$1 = state_23191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23191__$1,inst_23189);
} else {
return null;
}
}
});})(c__22667__auto__,f__$1))
;
return ((function (switch__22572__auto__,c__22667__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__22573__auto__ = null;
var cljs$core$async$transduce_$_state_machine__22573__auto____0 = (function (){
var statearr_23193 = [null,null,null,null,null,null,null];
(statearr_23193[(0)] = cljs$core$async$transduce_$_state_machine__22573__auto__);

(statearr_23193[(1)] = (1));

return statearr_23193;
});
var cljs$core$async$transduce_$_state_machine__22573__auto____1 = (function (state_23191){
while(true){
var ret_value__22574__auto__ = (function (){try{while(true){
var result__22575__auto__ = switch__22572__auto__.call(null,state_23191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22575__auto__;
}
break;
}
}catch (e23194){if((e23194 instanceof Object)){
var ex__22576__auto__ = e23194;
var statearr_23195_23197 = state_23191;
(statearr_23195_23197[(5)] = ex__22576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23198 = state_23191;
state_23191 = G__23198;
continue;
} else {
return ret_value__22574__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__22573__auto__ = function(state_23191){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__22573__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__22573__auto____1.call(this,state_23191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__22573__auto____0;
cljs$core$async$transduce_$_state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__22573__auto____1;
return cljs$core$async$transduce_$_state_machine__22573__auto__;
})()
;})(switch__22572__auto__,c__22667__auto__,f__$1))
})();
var state__22669__auto__ = (function (){var statearr_23196 = f__22668__auto__.call(null);
(statearr_23196[(6)] = c__22667__auto__);

return statearr_23196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22669__auto__);
});})(c__22667__auto__,f__$1))
);

return c__22667__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__23200 = arguments.length;
switch (G__23200) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22667__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22667__auto__){
return (function (){
var f__22668__auto__ = (function (){var switch__22572__auto__ = ((function (c__22667__auto__){
return (function (state_23225){
var state_val_23226 = (state_23225[(1)]);
if((state_val_23226 === (7))){
var inst_23207 = (state_23225[(2)]);
var state_23225__$1 = state_23225;
var statearr_23227_23248 = state_23225__$1;
(statearr_23227_23248[(2)] = inst_23207);

(statearr_23227_23248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (1))){
var inst_23201 = cljs.core.seq.call(null,coll);
var inst_23202 = inst_23201;
var state_23225__$1 = (function (){var statearr_23228 = state_23225;
(statearr_23228[(7)] = inst_23202);

return statearr_23228;
})();
var statearr_23229_23249 = state_23225__$1;
(statearr_23229_23249[(2)] = null);

(statearr_23229_23249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (4))){
var inst_23202 = (state_23225[(7)]);
var inst_23205 = cljs.core.first.call(null,inst_23202);
var state_23225__$1 = state_23225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23225__$1,(7),ch,inst_23205);
} else {
if((state_val_23226 === (13))){
var inst_23219 = (state_23225[(2)]);
var state_23225__$1 = state_23225;
var statearr_23230_23250 = state_23225__$1;
(statearr_23230_23250[(2)] = inst_23219);

(statearr_23230_23250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (6))){
var inst_23210 = (state_23225[(2)]);
var state_23225__$1 = state_23225;
if(cljs.core.truth_(inst_23210)){
var statearr_23231_23251 = state_23225__$1;
(statearr_23231_23251[(1)] = (8));

} else {
var statearr_23232_23252 = state_23225__$1;
(statearr_23232_23252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (3))){
var inst_23223 = (state_23225[(2)]);
var state_23225__$1 = state_23225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23225__$1,inst_23223);
} else {
if((state_val_23226 === (12))){
var state_23225__$1 = state_23225;
var statearr_23233_23253 = state_23225__$1;
(statearr_23233_23253[(2)] = null);

(statearr_23233_23253[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (2))){
var inst_23202 = (state_23225[(7)]);
var state_23225__$1 = state_23225;
if(cljs.core.truth_(inst_23202)){
var statearr_23234_23254 = state_23225__$1;
(statearr_23234_23254[(1)] = (4));

} else {
var statearr_23235_23255 = state_23225__$1;
(statearr_23235_23255[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (11))){
var inst_23216 = cljs.core.async.close_BANG_.call(null,ch);
var state_23225__$1 = state_23225;
var statearr_23236_23256 = state_23225__$1;
(statearr_23236_23256[(2)] = inst_23216);

(statearr_23236_23256[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (9))){
var state_23225__$1 = state_23225;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23237_23257 = state_23225__$1;
(statearr_23237_23257[(1)] = (11));

} else {
var statearr_23238_23258 = state_23225__$1;
(statearr_23238_23258[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (5))){
var inst_23202 = (state_23225[(7)]);
var state_23225__$1 = state_23225;
var statearr_23239_23259 = state_23225__$1;
(statearr_23239_23259[(2)] = inst_23202);

(statearr_23239_23259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (10))){
var inst_23221 = (state_23225[(2)]);
var state_23225__$1 = state_23225;
var statearr_23240_23260 = state_23225__$1;
(statearr_23240_23260[(2)] = inst_23221);

(statearr_23240_23260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (8))){
var inst_23202 = (state_23225[(7)]);
var inst_23212 = cljs.core.next.call(null,inst_23202);
var inst_23202__$1 = inst_23212;
var state_23225__$1 = (function (){var statearr_23241 = state_23225;
(statearr_23241[(7)] = inst_23202__$1);

return statearr_23241;
})();
var statearr_23242_23261 = state_23225__$1;
(statearr_23242_23261[(2)] = null);

(statearr_23242_23261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22667__auto__))
;
return ((function (switch__22572__auto__,c__22667__auto__){
return (function() {
var cljs$core$async$state_machine__22573__auto__ = null;
var cljs$core$async$state_machine__22573__auto____0 = (function (){
var statearr_23243 = [null,null,null,null,null,null,null,null];
(statearr_23243[(0)] = cljs$core$async$state_machine__22573__auto__);

(statearr_23243[(1)] = (1));

return statearr_23243;
});
var cljs$core$async$state_machine__22573__auto____1 = (function (state_23225){
while(true){
var ret_value__22574__auto__ = (function (){try{while(true){
var result__22575__auto__ = switch__22572__auto__.call(null,state_23225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22575__auto__;
}
break;
}
}catch (e23244){if((e23244 instanceof Object)){
var ex__22576__auto__ = e23244;
var statearr_23245_23262 = state_23225;
(statearr_23245_23262[(5)] = ex__22576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23263 = state_23225;
state_23225 = G__23263;
continue;
} else {
return ret_value__22574__auto__;
}
break;
}
});
cljs$core$async$state_machine__22573__auto__ = function(state_23225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22573__auto____1.call(this,state_23225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22573__auto____0;
cljs$core$async$state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22573__auto____1;
return cljs$core$async$state_machine__22573__auto__;
})()
;})(switch__22572__auto__,c__22667__auto__))
})();
var state__22669__auto__ = (function (){var statearr_23246 = f__22668__auto__.call(null);
(statearr_23246[(6)] = c__22667__auto__);

return statearr_23246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22669__auto__);
});})(c__22667__auto__))
);

return c__22667__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23264 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23264 = (function (ch,cs,meta23265){
this.ch = ch;
this.cs = cs;
this.meta23265 = meta23265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23266,meta23265__$1){
var self__ = this;
var _23266__$1 = this;
return (new cljs.core.async.t_cljs$core$async23264(self__.ch,self__.cs,meta23265__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23264.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23266){
var self__ = this;
var _23266__$1 = this;
return self__.meta23265;
});})(cs))
;

cljs.core.async.t_cljs$core$async23264.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23264.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23264.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23264.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23264.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23264.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23264.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23265","meta23265",-1672112662,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23264.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23264";

cljs.core.async.t_cljs$core$async23264.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23264");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23264.
 */
cljs.core.async.__GT_t_cljs$core$async23264 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23264(ch__$1,cs__$1,meta23265){
return (new cljs.core.async.t_cljs$core$async23264(ch__$1,cs__$1,meta23265));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23264(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22667__auto___23486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22667__auto___23486,cs,m,dchan,dctr,done){
return (function (){
var f__22668__auto__ = (function (){var switch__22572__auto__ = ((function (c__22667__auto___23486,cs,m,dchan,dctr,done){
return (function (state_23401){
var state_val_23402 = (state_23401[(1)]);
if((state_val_23402 === (7))){
var inst_23397 = (state_23401[(2)]);
var state_23401__$1 = state_23401;
var statearr_23403_23487 = state_23401__$1;
(statearr_23403_23487[(2)] = inst_23397);

(statearr_23403_23487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (20))){
var inst_23300 = (state_23401[(7)]);
var inst_23312 = cljs.core.first.call(null,inst_23300);
var inst_23313 = cljs.core.nth.call(null,inst_23312,(0),null);
var inst_23314 = cljs.core.nth.call(null,inst_23312,(1),null);
var state_23401__$1 = (function (){var statearr_23404 = state_23401;
(statearr_23404[(8)] = inst_23313);

return statearr_23404;
})();
if(cljs.core.truth_(inst_23314)){
var statearr_23405_23488 = state_23401__$1;
(statearr_23405_23488[(1)] = (22));

} else {
var statearr_23406_23489 = state_23401__$1;
(statearr_23406_23489[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (27))){
var inst_23342 = (state_23401[(9)]);
var inst_23269 = (state_23401[(10)]);
var inst_23344 = (state_23401[(11)]);
var inst_23349 = (state_23401[(12)]);
var inst_23349__$1 = cljs.core._nth.call(null,inst_23342,inst_23344);
var inst_23350 = cljs.core.async.put_BANG_.call(null,inst_23349__$1,inst_23269,done);
var state_23401__$1 = (function (){var statearr_23407 = state_23401;
(statearr_23407[(12)] = inst_23349__$1);

return statearr_23407;
})();
if(cljs.core.truth_(inst_23350)){
var statearr_23408_23490 = state_23401__$1;
(statearr_23408_23490[(1)] = (30));

} else {
var statearr_23409_23491 = state_23401__$1;
(statearr_23409_23491[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (1))){
var state_23401__$1 = state_23401;
var statearr_23410_23492 = state_23401__$1;
(statearr_23410_23492[(2)] = null);

(statearr_23410_23492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (24))){
var inst_23300 = (state_23401[(7)]);
var inst_23319 = (state_23401[(2)]);
var inst_23320 = cljs.core.next.call(null,inst_23300);
var inst_23278 = inst_23320;
var inst_23279 = null;
var inst_23280 = (0);
var inst_23281 = (0);
var state_23401__$1 = (function (){var statearr_23411 = state_23401;
(statearr_23411[(13)] = inst_23281);

(statearr_23411[(14)] = inst_23319);

(statearr_23411[(15)] = inst_23280);

(statearr_23411[(16)] = inst_23279);

(statearr_23411[(17)] = inst_23278);

return statearr_23411;
})();
var statearr_23412_23493 = state_23401__$1;
(statearr_23412_23493[(2)] = null);

(statearr_23412_23493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (39))){
var state_23401__$1 = state_23401;
var statearr_23416_23494 = state_23401__$1;
(statearr_23416_23494[(2)] = null);

(statearr_23416_23494[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (4))){
var inst_23269 = (state_23401[(10)]);
var inst_23269__$1 = (state_23401[(2)]);
var inst_23270 = (inst_23269__$1 == null);
var state_23401__$1 = (function (){var statearr_23417 = state_23401;
(statearr_23417[(10)] = inst_23269__$1);

return statearr_23417;
})();
if(cljs.core.truth_(inst_23270)){
var statearr_23418_23495 = state_23401__$1;
(statearr_23418_23495[(1)] = (5));

} else {
var statearr_23419_23496 = state_23401__$1;
(statearr_23419_23496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (15))){
var inst_23281 = (state_23401[(13)]);
var inst_23280 = (state_23401[(15)]);
var inst_23279 = (state_23401[(16)]);
var inst_23278 = (state_23401[(17)]);
var inst_23296 = (state_23401[(2)]);
var inst_23297 = (inst_23281 + (1));
var tmp23413 = inst_23280;
var tmp23414 = inst_23279;
var tmp23415 = inst_23278;
var inst_23278__$1 = tmp23415;
var inst_23279__$1 = tmp23414;
var inst_23280__$1 = tmp23413;
var inst_23281__$1 = inst_23297;
var state_23401__$1 = (function (){var statearr_23420 = state_23401;
(statearr_23420[(18)] = inst_23296);

(statearr_23420[(13)] = inst_23281__$1);

(statearr_23420[(15)] = inst_23280__$1);

(statearr_23420[(16)] = inst_23279__$1);

(statearr_23420[(17)] = inst_23278__$1);

return statearr_23420;
})();
var statearr_23421_23497 = state_23401__$1;
(statearr_23421_23497[(2)] = null);

(statearr_23421_23497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (21))){
var inst_23323 = (state_23401[(2)]);
var state_23401__$1 = state_23401;
var statearr_23425_23498 = state_23401__$1;
(statearr_23425_23498[(2)] = inst_23323);

(statearr_23425_23498[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (31))){
var inst_23349 = (state_23401[(12)]);
var inst_23353 = done.call(null,null);
var inst_23354 = cljs.core.async.untap_STAR_.call(null,m,inst_23349);
var state_23401__$1 = (function (){var statearr_23426 = state_23401;
(statearr_23426[(19)] = inst_23353);

return statearr_23426;
})();
var statearr_23427_23499 = state_23401__$1;
(statearr_23427_23499[(2)] = inst_23354);

(statearr_23427_23499[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (32))){
var inst_23342 = (state_23401[(9)]);
var inst_23343 = (state_23401[(20)]);
var inst_23341 = (state_23401[(21)]);
var inst_23344 = (state_23401[(11)]);
var inst_23356 = (state_23401[(2)]);
var inst_23357 = (inst_23344 + (1));
var tmp23422 = inst_23342;
var tmp23423 = inst_23343;
var tmp23424 = inst_23341;
var inst_23341__$1 = tmp23424;
var inst_23342__$1 = tmp23422;
var inst_23343__$1 = tmp23423;
var inst_23344__$1 = inst_23357;
var state_23401__$1 = (function (){var statearr_23428 = state_23401;
(statearr_23428[(9)] = inst_23342__$1);

(statearr_23428[(20)] = inst_23343__$1);

(statearr_23428[(22)] = inst_23356);

(statearr_23428[(21)] = inst_23341__$1);

(statearr_23428[(11)] = inst_23344__$1);

return statearr_23428;
})();
var statearr_23429_23500 = state_23401__$1;
(statearr_23429_23500[(2)] = null);

(statearr_23429_23500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (40))){
var inst_23369 = (state_23401[(23)]);
var inst_23373 = done.call(null,null);
var inst_23374 = cljs.core.async.untap_STAR_.call(null,m,inst_23369);
var state_23401__$1 = (function (){var statearr_23430 = state_23401;
(statearr_23430[(24)] = inst_23373);

return statearr_23430;
})();
var statearr_23431_23501 = state_23401__$1;
(statearr_23431_23501[(2)] = inst_23374);

(statearr_23431_23501[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (33))){
var inst_23360 = (state_23401[(25)]);
var inst_23362 = cljs.core.chunked_seq_QMARK_.call(null,inst_23360);
var state_23401__$1 = state_23401;
if(inst_23362){
var statearr_23432_23502 = state_23401__$1;
(statearr_23432_23502[(1)] = (36));

} else {
var statearr_23433_23503 = state_23401__$1;
(statearr_23433_23503[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (13))){
var inst_23290 = (state_23401[(26)]);
var inst_23293 = cljs.core.async.close_BANG_.call(null,inst_23290);
var state_23401__$1 = state_23401;
var statearr_23434_23504 = state_23401__$1;
(statearr_23434_23504[(2)] = inst_23293);

(statearr_23434_23504[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (22))){
var inst_23313 = (state_23401[(8)]);
var inst_23316 = cljs.core.async.close_BANG_.call(null,inst_23313);
var state_23401__$1 = state_23401;
var statearr_23435_23505 = state_23401__$1;
(statearr_23435_23505[(2)] = inst_23316);

(statearr_23435_23505[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (36))){
var inst_23360 = (state_23401[(25)]);
var inst_23364 = cljs.core.chunk_first.call(null,inst_23360);
var inst_23365 = cljs.core.chunk_rest.call(null,inst_23360);
var inst_23366 = cljs.core.count.call(null,inst_23364);
var inst_23341 = inst_23365;
var inst_23342 = inst_23364;
var inst_23343 = inst_23366;
var inst_23344 = (0);
var state_23401__$1 = (function (){var statearr_23436 = state_23401;
(statearr_23436[(9)] = inst_23342);

(statearr_23436[(20)] = inst_23343);

(statearr_23436[(21)] = inst_23341);

(statearr_23436[(11)] = inst_23344);

return statearr_23436;
})();
var statearr_23437_23506 = state_23401__$1;
(statearr_23437_23506[(2)] = null);

(statearr_23437_23506[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (41))){
var inst_23360 = (state_23401[(25)]);
var inst_23376 = (state_23401[(2)]);
var inst_23377 = cljs.core.next.call(null,inst_23360);
var inst_23341 = inst_23377;
var inst_23342 = null;
var inst_23343 = (0);
var inst_23344 = (0);
var state_23401__$1 = (function (){var statearr_23438 = state_23401;
(statearr_23438[(9)] = inst_23342);

(statearr_23438[(27)] = inst_23376);

(statearr_23438[(20)] = inst_23343);

(statearr_23438[(21)] = inst_23341);

(statearr_23438[(11)] = inst_23344);

return statearr_23438;
})();
var statearr_23439_23507 = state_23401__$1;
(statearr_23439_23507[(2)] = null);

(statearr_23439_23507[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (43))){
var state_23401__$1 = state_23401;
var statearr_23440_23508 = state_23401__$1;
(statearr_23440_23508[(2)] = null);

(statearr_23440_23508[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (29))){
var inst_23385 = (state_23401[(2)]);
var state_23401__$1 = state_23401;
var statearr_23441_23509 = state_23401__$1;
(statearr_23441_23509[(2)] = inst_23385);

(statearr_23441_23509[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (44))){
var inst_23394 = (state_23401[(2)]);
var state_23401__$1 = (function (){var statearr_23442 = state_23401;
(statearr_23442[(28)] = inst_23394);

return statearr_23442;
})();
var statearr_23443_23510 = state_23401__$1;
(statearr_23443_23510[(2)] = null);

(statearr_23443_23510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (6))){
var inst_23333 = (state_23401[(29)]);
var inst_23332 = cljs.core.deref.call(null,cs);
var inst_23333__$1 = cljs.core.keys.call(null,inst_23332);
var inst_23334 = cljs.core.count.call(null,inst_23333__$1);
var inst_23335 = cljs.core.reset_BANG_.call(null,dctr,inst_23334);
var inst_23340 = cljs.core.seq.call(null,inst_23333__$1);
var inst_23341 = inst_23340;
var inst_23342 = null;
var inst_23343 = (0);
var inst_23344 = (0);
var state_23401__$1 = (function (){var statearr_23444 = state_23401;
(statearr_23444[(9)] = inst_23342);

(statearr_23444[(20)] = inst_23343);

(statearr_23444[(30)] = inst_23335);

(statearr_23444[(21)] = inst_23341);

(statearr_23444[(11)] = inst_23344);

(statearr_23444[(29)] = inst_23333__$1);

return statearr_23444;
})();
var statearr_23445_23511 = state_23401__$1;
(statearr_23445_23511[(2)] = null);

(statearr_23445_23511[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (28))){
var inst_23341 = (state_23401[(21)]);
var inst_23360 = (state_23401[(25)]);
var inst_23360__$1 = cljs.core.seq.call(null,inst_23341);
var state_23401__$1 = (function (){var statearr_23446 = state_23401;
(statearr_23446[(25)] = inst_23360__$1);

return statearr_23446;
})();
if(inst_23360__$1){
var statearr_23447_23512 = state_23401__$1;
(statearr_23447_23512[(1)] = (33));

} else {
var statearr_23448_23513 = state_23401__$1;
(statearr_23448_23513[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (25))){
var inst_23343 = (state_23401[(20)]);
var inst_23344 = (state_23401[(11)]);
var inst_23346 = (inst_23344 < inst_23343);
var inst_23347 = inst_23346;
var state_23401__$1 = state_23401;
if(cljs.core.truth_(inst_23347)){
var statearr_23449_23514 = state_23401__$1;
(statearr_23449_23514[(1)] = (27));

} else {
var statearr_23450_23515 = state_23401__$1;
(statearr_23450_23515[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (34))){
var state_23401__$1 = state_23401;
var statearr_23451_23516 = state_23401__$1;
(statearr_23451_23516[(2)] = null);

(statearr_23451_23516[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (17))){
var state_23401__$1 = state_23401;
var statearr_23452_23517 = state_23401__$1;
(statearr_23452_23517[(2)] = null);

(statearr_23452_23517[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (3))){
var inst_23399 = (state_23401[(2)]);
var state_23401__$1 = state_23401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23401__$1,inst_23399);
} else {
if((state_val_23402 === (12))){
var inst_23328 = (state_23401[(2)]);
var state_23401__$1 = state_23401;
var statearr_23453_23518 = state_23401__$1;
(statearr_23453_23518[(2)] = inst_23328);

(statearr_23453_23518[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (2))){
var state_23401__$1 = state_23401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23401__$1,(4),ch);
} else {
if((state_val_23402 === (23))){
var state_23401__$1 = state_23401;
var statearr_23454_23519 = state_23401__$1;
(statearr_23454_23519[(2)] = null);

(statearr_23454_23519[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (35))){
var inst_23383 = (state_23401[(2)]);
var state_23401__$1 = state_23401;
var statearr_23455_23520 = state_23401__$1;
(statearr_23455_23520[(2)] = inst_23383);

(statearr_23455_23520[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (19))){
var inst_23300 = (state_23401[(7)]);
var inst_23304 = cljs.core.chunk_first.call(null,inst_23300);
var inst_23305 = cljs.core.chunk_rest.call(null,inst_23300);
var inst_23306 = cljs.core.count.call(null,inst_23304);
var inst_23278 = inst_23305;
var inst_23279 = inst_23304;
var inst_23280 = inst_23306;
var inst_23281 = (0);
var state_23401__$1 = (function (){var statearr_23456 = state_23401;
(statearr_23456[(13)] = inst_23281);

(statearr_23456[(15)] = inst_23280);

(statearr_23456[(16)] = inst_23279);

(statearr_23456[(17)] = inst_23278);

return statearr_23456;
})();
var statearr_23457_23521 = state_23401__$1;
(statearr_23457_23521[(2)] = null);

(statearr_23457_23521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (11))){
var inst_23300 = (state_23401[(7)]);
var inst_23278 = (state_23401[(17)]);
var inst_23300__$1 = cljs.core.seq.call(null,inst_23278);
var state_23401__$1 = (function (){var statearr_23458 = state_23401;
(statearr_23458[(7)] = inst_23300__$1);

return statearr_23458;
})();
if(inst_23300__$1){
var statearr_23459_23522 = state_23401__$1;
(statearr_23459_23522[(1)] = (16));

} else {
var statearr_23460_23523 = state_23401__$1;
(statearr_23460_23523[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (9))){
var inst_23330 = (state_23401[(2)]);
var state_23401__$1 = state_23401;
var statearr_23461_23524 = state_23401__$1;
(statearr_23461_23524[(2)] = inst_23330);

(statearr_23461_23524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (5))){
var inst_23276 = cljs.core.deref.call(null,cs);
var inst_23277 = cljs.core.seq.call(null,inst_23276);
var inst_23278 = inst_23277;
var inst_23279 = null;
var inst_23280 = (0);
var inst_23281 = (0);
var state_23401__$1 = (function (){var statearr_23462 = state_23401;
(statearr_23462[(13)] = inst_23281);

(statearr_23462[(15)] = inst_23280);

(statearr_23462[(16)] = inst_23279);

(statearr_23462[(17)] = inst_23278);

return statearr_23462;
})();
var statearr_23463_23525 = state_23401__$1;
(statearr_23463_23525[(2)] = null);

(statearr_23463_23525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (14))){
var state_23401__$1 = state_23401;
var statearr_23464_23526 = state_23401__$1;
(statearr_23464_23526[(2)] = null);

(statearr_23464_23526[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (45))){
var inst_23391 = (state_23401[(2)]);
var state_23401__$1 = state_23401;
var statearr_23465_23527 = state_23401__$1;
(statearr_23465_23527[(2)] = inst_23391);

(statearr_23465_23527[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (26))){
var inst_23333 = (state_23401[(29)]);
var inst_23387 = (state_23401[(2)]);
var inst_23388 = cljs.core.seq.call(null,inst_23333);
var state_23401__$1 = (function (){var statearr_23466 = state_23401;
(statearr_23466[(31)] = inst_23387);

return statearr_23466;
})();
if(inst_23388){
var statearr_23467_23528 = state_23401__$1;
(statearr_23467_23528[(1)] = (42));

} else {
var statearr_23468_23529 = state_23401__$1;
(statearr_23468_23529[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (16))){
var inst_23300 = (state_23401[(7)]);
var inst_23302 = cljs.core.chunked_seq_QMARK_.call(null,inst_23300);
var state_23401__$1 = state_23401;
if(inst_23302){
var statearr_23469_23530 = state_23401__$1;
(statearr_23469_23530[(1)] = (19));

} else {
var statearr_23470_23531 = state_23401__$1;
(statearr_23470_23531[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (38))){
var inst_23380 = (state_23401[(2)]);
var state_23401__$1 = state_23401;
var statearr_23471_23532 = state_23401__$1;
(statearr_23471_23532[(2)] = inst_23380);

(statearr_23471_23532[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (30))){
var state_23401__$1 = state_23401;
var statearr_23472_23533 = state_23401__$1;
(statearr_23472_23533[(2)] = null);

(statearr_23472_23533[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (10))){
var inst_23281 = (state_23401[(13)]);
var inst_23279 = (state_23401[(16)]);
var inst_23289 = cljs.core._nth.call(null,inst_23279,inst_23281);
var inst_23290 = cljs.core.nth.call(null,inst_23289,(0),null);
var inst_23291 = cljs.core.nth.call(null,inst_23289,(1),null);
var state_23401__$1 = (function (){var statearr_23473 = state_23401;
(statearr_23473[(26)] = inst_23290);

return statearr_23473;
})();
if(cljs.core.truth_(inst_23291)){
var statearr_23474_23534 = state_23401__$1;
(statearr_23474_23534[(1)] = (13));

} else {
var statearr_23475_23535 = state_23401__$1;
(statearr_23475_23535[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (18))){
var inst_23326 = (state_23401[(2)]);
var state_23401__$1 = state_23401;
var statearr_23476_23536 = state_23401__$1;
(statearr_23476_23536[(2)] = inst_23326);

(statearr_23476_23536[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (42))){
var state_23401__$1 = state_23401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23401__$1,(45),dchan);
} else {
if((state_val_23402 === (37))){
var inst_23269 = (state_23401[(10)]);
var inst_23369 = (state_23401[(23)]);
var inst_23360 = (state_23401[(25)]);
var inst_23369__$1 = cljs.core.first.call(null,inst_23360);
var inst_23370 = cljs.core.async.put_BANG_.call(null,inst_23369__$1,inst_23269,done);
var state_23401__$1 = (function (){var statearr_23477 = state_23401;
(statearr_23477[(23)] = inst_23369__$1);

return statearr_23477;
})();
if(cljs.core.truth_(inst_23370)){
var statearr_23478_23537 = state_23401__$1;
(statearr_23478_23537[(1)] = (39));

} else {
var statearr_23479_23538 = state_23401__$1;
(statearr_23479_23538[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23402 === (8))){
var inst_23281 = (state_23401[(13)]);
var inst_23280 = (state_23401[(15)]);
var inst_23283 = (inst_23281 < inst_23280);
var inst_23284 = inst_23283;
var state_23401__$1 = state_23401;
if(cljs.core.truth_(inst_23284)){
var statearr_23480_23539 = state_23401__$1;
(statearr_23480_23539[(1)] = (10));

} else {
var statearr_23481_23540 = state_23401__$1;
(statearr_23481_23540[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22667__auto___23486,cs,m,dchan,dctr,done))
;
return ((function (switch__22572__auto__,c__22667__auto___23486,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22573__auto__ = null;
var cljs$core$async$mult_$_state_machine__22573__auto____0 = (function (){
var statearr_23482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23482[(0)] = cljs$core$async$mult_$_state_machine__22573__auto__);

(statearr_23482[(1)] = (1));

return statearr_23482;
});
var cljs$core$async$mult_$_state_machine__22573__auto____1 = (function (state_23401){
while(true){
var ret_value__22574__auto__ = (function (){try{while(true){
var result__22575__auto__ = switch__22572__auto__.call(null,state_23401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22575__auto__;
}
break;
}
}catch (e23483){if((e23483 instanceof Object)){
var ex__22576__auto__ = e23483;
var statearr_23484_23541 = state_23401;
(statearr_23484_23541[(5)] = ex__22576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23542 = state_23401;
state_23401 = G__23542;
continue;
} else {
return ret_value__22574__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22573__auto__ = function(state_23401){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22573__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22573__auto____1.call(this,state_23401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22573__auto____0;
cljs$core$async$mult_$_state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22573__auto____1;
return cljs$core$async$mult_$_state_machine__22573__auto__;
})()
;})(switch__22572__auto__,c__22667__auto___23486,cs,m,dchan,dctr,done))
})();
var state__22669__auto__ = (function (){var statearr_23485 = f__22668__auto__.call(null);
(statearr_23485[(6)] = c__22667__auto___23486);

return statearr_23485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22669__auto__);
});})(c__22667__auto___23486,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__23544 = arguments.length;
switch (G__23544) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23556 = arguments.length;
var i__4731__auto___23557 = (0);
while(true){
if((i__4731__auto___23557 < len__4730__auto___23556)){
args__4736__auto__.push((arguments[i__4731__auto___23557]));

var G__23558 = (i__4731__auto___23557 + (1));
i__4731__auto___23557 = G__23558;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23550){
var map__23551 = p__23550;
var map__23551__$1 = (((((!((map__23551 == null))))?(((((map__23551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23551):map__23551);
var opts = map__23551__$1;
var statearr_23553_23559 = state;
(statearr_23553_23559[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__23551,map__23551__$1,opts){
return (function (val){
var statearr_23554_23560 = state;
(statearr_23554_23560[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23551,map__23551__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_23555_23561 = state;
(statearr_23555_23561[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23546){
var G__23547 = cljs.core.first.call(null,seq23546);
var seq23546__$1 = cljs.core.next.call(null,seq23546);
var G__23548 = cljs.core.first.call(null,seq23546__$1);
var seq23546__$2 = cljs.core.next.call(null,seq23546__$1);
var G__23549 = cljs.core.first.call(null,seq23546__$2);
var seq23546__$3 = cljs.core.next.call(null,seq23546__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23547,G__23548,G__23549,seq23546__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23562 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23562 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23563){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23563 = meta23563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23564,meta23563__$1){
var self__ = this;
var _23564__$1 = this;
return (new cljs.core.async.t_cljs$core$async23562(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23563__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23562.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23564){
var self__ = this;
var _23564__$1 = this;
return self__.meta23563;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23562.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23562.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23562.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23562.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23562.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23562.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23562.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23562.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23562.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23563","meta23563",1708935040,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23562.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23562";

cljs.core.async.t_cljs$core$async23562.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23562");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23562.
 */
cljs.core.async.__GT_t_cljs$core$async23562 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23562(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23563){
return (new cljs.core.async.t_cljs$core$async23562(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23563));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23562(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22667__auto___23726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22667__auto___23726,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22668__auto__ = (function (){var switch__22572__auto__ = ((function (c__22667__auto___23726,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23666){
var state_val_23667 = (state_23666[(1)]);
if((state_val_23667 === (7))){
var inst_23581 = (state_23666[(2)]);
var state_23666__$1 = state_23666;
var statearr_23668_23727 = state_23666__$1;
(statearr_23668_23727[(2)] = inst_23581);

(statearr_23668_23727[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (20))){
var inst_23593 = (state_23666[(7)]);
var state_23666__$1 = state_23666;
var statearr_23669_23728 = state_23666__$1;
(statearr_23669_23728[(2)] = inst_23593);

(statearr_23669_23728[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (27))){
var state_23666__$1 = state_23666;
var statearr_23670_23729 = state_23666__$1;
(statearr_23670_23729[(2)] = null);

(statearr_23670_23729[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (1))){
var inst_23568 = (state_23666[(8)]);
var inst_23568__$1 = calc_state.call(null);
var inst_23570 = (inst_23568__$1 == null);
var inst_23571 = cljs.core.not.call(null,inst_23570);
var state_23666__$1 = (function (){var statearr_23671 = state_23666;
(statearr_23671[(8)] = inst_23568__$1);

return statearr_23671;
})();
if(inst_23571){
var statearr_23672_23730 = state_23666__$1;
(statearr_23672_23730[(1)] = (2));

} else {
var statearr_23673_23731 = state_23666__$1;
(statearr_23673_23731[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (24))){
var inst_23626 = (state_23666[(9)]);
var inst_23640 = (state_23666[(10)]);
var inst_23617 = (state_23666[(11)]);
var inst_23640__$1 = inst_23617.call(null,inst_23626);
var state_23666__$1 = (function (){var statearr_23674 = state_23666;
(statearr_23674[(10)] = inst_23640__$1);

return statearr_23674;
})();
if(cljs.core.truth_(inst_23640__$1)){
var statearr_23675_23732 = state_23666__$1;
(statearr_23675_23732[(1)] = (29));

} else {
var statearr_23676_23733 = state_23666__$1;
(statearr_23676_23733[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (4))){
var inst_23584 = (state_23666[(2)]);
var state_23666__$1 = state_23666;
if(cljs.core.truth_(inst_23584)){
var statearr_23677_23734 = state_23666__$1;
(statearr_23677_23734[(1)] = (8));

} else {
var statearr_23678_23735 = state_23666__$1;
(statearr_23678_23735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (15))){
var inst_23611 = (state_23666[(2)]);
var state_23666__$1 = state_23666;
if(cljs.core.truth_(inst_23611)){
var statearr_23679_23736 = state_23666__$1;
(statearr_23679_23736[(1)] = (19));

} else {
var statearr_23680_23737 = state_23666__$1;
(statearr_23680_23737[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (21))){
var inst_23616 = (state_23666[(12)]);
var inst_23616__$1 = (state_23666[(2)]);
var inst_23617 = cljs.core.get.call(null,inst_23616__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23618 = cljs.core.get.call(null,inst_23616__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23619 = cljs.core.get.call(null,inst_23616__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23666__$1 = (function (){var statearr_23681 = state_23666;
(statearr_23681[(13)] = inst_23618);

(statearr_23681[(12)] = inst_23616__$1);

(statearr_23681[(11)] = inst_23617);

return statearr_23681;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23666__$1,(22),inst_23619);
} else {
if((state_val_23667 === (31))){
var inst_23648 = (state_23666[(2)]);
var state_23666__$1 = state_23666;
if(cljs.core.truth_(inst_23648)){
var statearr_23682_23738 = state_23666__$1;
(statearr_23682_23738[(1)] = (32));

} else {
var statearr_23683_23739 = state_23666__$1;
(statearr_23683_23739[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (32))){
var inst_23625 = (state_23666[(14)]);
var state_23666__$1 = state_23666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23666__$1,(35),out,inst_23625);
} else {
if((state_val_23667 === (33))){
var inst_23616 = (state_23666[(12)]);
var inst_23593 = inst_23616;
var state_23666__$1 = (function (){var statearr_23684 = state_23666;
(statearr_23684[(7)] = inst_23593);

return statearr_23684;
})();
var statearr_23685_23740 = state_23666__$1;
(statearr_23685_23740[(2)] = null);

(statearr_23685_23740[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (13))){
var inst_23593 = (state_23666[(7)]);
var inst_23600 = inst_23593.cljs$lang$protocol_mask$partition0$;
var inst_23601 = (inst_23600 & (64));
var inst_23602 = inst_23593.cljs$core$ISeq$;
var inst_23603 = (cljs.core.PROTOCOL_SENTINEL === inst_23602);
var inst_23604 = ((inst_23601) || (inst_23603));
var state_23666__$1 = state_23666;
if(cljs.core.truth_(inst_23604)){
var statearr_23686_23741 = state_23666__$1;
(statearr_23686_23741[(1)] = (16));

} else {
var statearr_23687_23742 = state_23666__$1;
(statearr_23687_23742[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (22))){
var inst_23625 = (state_23666[(14)]);
var inst_23626 = (state_23666[(9)]);
var inst_23624 = (state_23666[(2)]);
var inst_23625__$1 = cljs.core.nth.call(null,inst_23624,(0),null);
var inst_23626__$1 = cljs.core.nth.call(null,inst_23624,(1),null);
var inst_23627 = (inst_23625__$1 == null);
var inst_23628 = cljs.core._EQ_.call(null,inst_23626__$1,change);
var inst_23629 = ((inst_23627) || (inst_23628));
var state_23666__$1 = (function (){var statearr_23688 = state_23666;
(statearr_23688[(14)] = inst_23625__$1);

(statearr_23688[(9)] = inst_23626__$1);

return statearr_23688;
})();
if(cljs.core.truth_(inst_23629)){
var statearr_23689_23743 = state_23666__$1;
(statearr_23689_23743[(1)] = (23));

} else {
var statearr_23690_23744 = state_23666__$1;
(statearr_23690_23744[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (36))){
var inst_23616 = (state_23666[(12)]);
var inst_23593 = inst_23616;
var state_23666__$1 = (function (){var statearr_23691 = state_23666;
(statearr_23691[(7)] = inst_23593);

return statearr_23691;
})();
var statearr_23692_23745 = state_23666__$1;
(statearr_23692_23745[(2)] = null);

(statearr_23692_23745[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (29))){
var inst_23640 = (state_23666[(10)]);
var state_23666__$1 = state_23666;
var statearr_23693_23746 = state_23666__$1;
(statearr_23693_23746[(2)] = inst_23640);

(statearr_23693_23746[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (6))){
var state_23666__$1 = state_23666;
var statearr_23694_23747 = state_23666__$1;
(statearr_23694_23747[(2)] = false);

(statearr_23694_23747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (28))){
var inst_23636 = (state_23666[(2)]);
var inst_23637 = calc_state.call(null);
var inst_23593 = inst_23637;
var state_23666__$1 = (function (){var statearr_23695 = state_23666;
(statearr_23695[(15)] = inst_23636);

(statearr_23695[(7)] = inst_23593);

return statearr_23695;
})();
var statearr_23696_23748 = state_23666__$1;
(statearr_23696_23748[(2)] = null);

(statearr_23696_23748[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (25))){
var inst_23662 = (state_23666[(2)]);
var state_23666__$1 = state_23666;
var statearr_23697_23749 = state_23666__$1;
(statearr_23697_23749[(2)] = inst_23662);

(statearr_23697_23749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (34))){
var inst_23660 = (state_23666[(2)]);
var state_23666__$1 = state_23666;
var statearr_23698_23750 = state_23666__$1;
(statearr_23698_23750[(2)] = inst_23660);

(statearr_23698_23750[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (17))){
var state_23666__$1 = state_23666;
var statearr_23699_23751 = state_23666__$1;
(statearr_23699_23751[(2)] = false);

(statearr_23699_23751[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (3))){
var state_23666__$1 = state_23666;
var statearr_23700_23752 = state_23666__$1;
(statearr_23700_23752[(2)] = false);

(statearr_23700_23752[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (12))){
var inst_23664 = (state_23666[(2)]);
var state_23666__$1 = state_23666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23666__$1,inst_23664);
} else {
if((state_val_23667 === (2))){
var inst_23568 = (state_23666[(8)]);
var inst_23573 = inst_23568.cljs$lang$protocol_mask$partition0$;
var inst_23574 = (inst_23573 & (64));
var inst_23575 = inst_23568.cljs$core$ISeq$;
var inst_23576 = (cljs.core.PROTOCOL_SENTINEL === inst_23575);
var inst_23577 = ((inst_23574) || (inst_23576));
var state_23666__$1 = state_23666;
if(cljs.core.truth_(inst_23577)){
var statearr_23701_23753 = state_23666__$1;
(statearr_23701_23753[(1)] = (5));

} else {
var statearr_23702_23754 = state_23666__$1;
(statearr_23702_23754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (23))){
var inst_23625 = (state_23666[(14)]);
var inst_23631 = (inst_23625 == null);
var state_23666__$1 = state_23666;
if(cljs.core.truth_(inst_23631)){
var statearr_23703_23755 = state_23666__$1;
(statearr_23703_23755[(1)] = (26));

} else {
var statearr_23704_23756 = state_23666__$1;
(statearr_23704_23756[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (35))){
var inst_23651 = (state_23666[(2)]);
var state_23666__$1 = state_23666;
if(cljs.core.truth_(inst_23651)){
var statearr_23705_23757 = state_23666__$1;
(statearr_23705_23757[(1)] = (36));

} else {
var statearr_23706_23758 = state_23666__$1;
(statearr_23706_23758[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (19))){
var inst_23593 = (state_23666[(7)]);
var inst_23613 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23593);
var state_23666__$1 = state_23666;
var statearr_23707_23759 = state_23666__$1;
(statearr_23707_23759[(2)] = inst_23613);

(statearr_23707_23759[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (11))){
var inst_23593 = (state_23666[(7)]);
var inst_23597 = (inst_23593 == null);
var inst_23598 = cljs.core.not.call(null,inst_23597);
var state_23666__$1 = state_23666;
if(inst_23598){
var statearr_23708_23760 = state_23666__$1;
(statearr_23708_23760[(1)] = (13));

} else {
var statearr_23709_23761 = state_23666__$1;
(statearr_23709_23761[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (9))){
var inst_23568 = (state_23666[(8)]);
var state_23666__$1 = state_23666;
var statearr_23710_23762 = state_23666__$1;
(statearr_23710_23762[(2)] = inst_23568);

(statearr_23710_23762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (5))){
var state_23666__$1 = state_23666;
var statearr_23711_23763 = state_23666__$1;
(statearr_23711_23763[(2)] = true);

(statearr_23711_23763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (14))){
var state_23666__$1 = state_23666;
var statearr_23712_23764 = state_23666__$1;
(statearr_23712_23764[(2)] = false);

(statearr_23712_23764[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (26))){
var inst_23626 = (state_23666[(9)]);
var inst_23633 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23626);
var state_23666__$1 = state_23666;
var statearr_23713_23765 = state_23666__$1;
(statearr_23713_23765[(2)] = inst_23633);

(statearr_23713_23765[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (16))){
var state_23666__$1 = state_23666;
var statearr_23714_23766 = state_23666__$1;
(statearr_23714_23766[(2)] = true);

(statearr_23714_23766[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (38))){
var inst_23656 = (state_23666[(2)]);
var state_23666__$1 = state_23666;
var statearr_23715_23767 = state_23666__$1;
(statearr_23715_23767[(2)] = inst_23656);

(statearr_23715_23767[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (30))){
var inst_23618 = (state_23666[(13)]);
var inst_23626 = (state_23666[(9)]);
var inst_23617 = (state_23666[(11)]);
var inst_23643 = cljs.core.empty_QMARK_.call(null,inst_23617);
var inst_23644 = inst_23618.call(null,inst_23626);
var inst_23645 = cljs.core.not.call(null,inst_23644);
var inst_23646 = ((inst_23643) && (inst_23645));
var state_23666__$1 = state_23666;
var statearr_23716_23768 = state_23666__$1;
(statearr_23716_23768[(2)] = inst_23646);

(statearr_23716_23768[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (10))){
var inst_23568 = (state_23666[(8)]);
var inst_23589 = (state_23666[(2)]);
var inst_23590 = cljs.core.get.call(null,inst_23589,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23591 = cljs.core.get.call(null,inst_23589,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23592 = cljs.core.get.call(null,inst_23589,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23593 = inst_23568;
var state_23666__$1 = (function (){var statearr_23717 = state_23666;
(statearr_23717[(16)] = inst_23590);

(statearr_23717[(17)] = inst_23592);

(statearr_23717[(7)] = inst_23593);

(statearr_23717[(18)] = inst_23591);

return statearr_23717;
})();
var statearr_23718_23769 = state_23666__$1;
(statearr_23718_23769[(2)] = null);

(statearr_23718_23769[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (18))){
var inst_23608 = (state_23666[(2)]);
var state_23666__$1 = state_23666;
var statearr_23719_23770 = state_23666__$1;
(statearr_23719_23770[(2)] = inst_23608);

(statearr_23719_23770[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (37))){
var state_23666__$1 = state_23666;
var statearr_23720_23771 = state_23666__$1;
(statearr_23720_23771[(2)] = null);

(statearr_23720_23771[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23667 === (8))){
var inst_23568 = (state_23666[(8)]);
var inst_23586 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23568);
var state_23666__$1 = state_23666;
var statearr_23721_23772 = state_23666__$1;
(statearr_23721_23772[(2)] = inst_23586);

(statearr_23721_23772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22667__auto___23726,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22572__auto__,c__22667__auto___23726,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22573__auto__ = null;
var cljs$core$async$mix_$_state_machine__22573__auto____0 = (function (){
var statearr_23722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23722[(0)] = cljs$core$async$mix_$_state_machine__22573__auto__);

(statearr_23722[(1)] = (1));

return statearr_23722;
});
var cljs$core$async$mix_$_state_machine__22573__auto____1 = (function (state_23666){
while(true){
var ret_value__22574__auto__ = (function (){try{while(true){
var result__22575__auto__ = switch__22572__auto__.call(null,state_23666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22575__auto__;
}
break;
}
}catch (e23723){if((e23723 instanceof Object)){
var ex__22576__auto__ = e23723;
var statearr_23724_23773 = state_23666;
(statearr_23724_23773[(5)] = ex__22576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23774 = state_23666;
state_23666 = G__23774;
continue;
} else {
return ret_value__22574__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22573__auto__ = function(state_23666){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22573__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22573__auto____1.call(this,state_23666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22573__auto____0;
cljs$core$async$mix_$_state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22573__auto____1;
return cljs$core$async$mix_$_state_machine__22573__auto__;
})()
;})(switch__22572__auto__,c__22667__auto___23726,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22669__auto__ = (function (){var statearr_23725 = f__22668__auto__.call(null);
(statearr_23725[(6)] = c__22667__auto___23726);

return statearr_23725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22669__auto__);
});})(c__22667__auto___23726,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__23776 = arguments.length;
switch (G__23776) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__23780 = arguments.length;
switch (G__23780) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__23778_SHARP_){
if(cljs.core.truth_(p1__23778_SHARP_.call(null,topic))){
return p1__23778_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23778_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23781 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23781 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23782){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23782 = meta23782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23783,meta23782__$1){
var self__ = this;
var _23783__$1 = this;
return (new cljs.core.async.t_cljs$core$async23781(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23782__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23781.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23783){
var self__ = this;
var _23783__$1 = this;
return self__.meta23782;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23781.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23781.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23781.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23781.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23781.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23781.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23781.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23781.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23782","meta23782",-1556738076,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23781.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23781";

cljs.core.async.t_cljs$core$async23781.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23781");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23781.
 */
cljs.core.async.__GT_t_cljs$core$async23781 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23781(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23782){
return (new cljs.core.async.t_cljs$core$async23781(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23782));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23781(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22667__auto___23901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22667__auto___23901,mults,ensure_mult,p){
return (function (){
var f__22668__auto__ = (function (){var switch__22572__auto__ = ((function (c__22667__auto___23901,mults,ensure_mult,p){
return (function (state_23855){
var state_val_23856 = (state_23855[(1)]);
if((state_val_23856 === (7))){
var inst_23851 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
var statearr_23857_23902 = state_23855__$1;
(statearr_23857_23902[(2)] = inst_23851);

(statearr_23857_23902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (20))){
var state_23855__$1 = state_23855;
var statearr_23858_23903 = state_23855__$1;
(statearr_23858_23903[(2)] = null);

(statearr_23858_23903[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (1))){
var state_23855__$1 = state_23855;
var statearr_23859_23904 = state_23855__$1;
(statearr_23859_23904[(2)] = null);

(statearr_23859_23904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (24))){
var inst_23834 = (state_23855[(7)]);
var inst_23843 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23834);
var state_23855__$1 = state_23855;
var statearr_23860_23905 = state_23855__$1;
(statearr_23860_23905[(2)] = inst_23843);

(statearr_23860_23905[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (4))){
var inst_23786 = (state_23855[(8)]);
var inst_23786__$1 = (state_23855[(2)]);
var inst_23787 = (inst_23786__$1 == null);
var state_23855__$1 = (function (){var statearr_23861 = state_23855;
(statearr_23861[(8)] = inst_23786__$1);

return statearr_23861;
})();
if(cljs.core.truth_(inst_23787)){
var statearr_23862_23906 = state_23855__$1;
(statearr_23862_23906[(1)] = (5));

} else {
var statearr_23863_23907 = state_23855__$1;
(statearr_23863_23907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (15))){
var inst_23828 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
var statearr_23864_23908 = state_23855__$1;
(statearr_23864_23908[(2)] = inst_23828);

(statearr_23864_23908[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (21))){
var inst_23848 = (state_23855[(2)]);
var state_23855__$1 = (function (){var statearr_23865 = state_23855;
(statearr_23865[(9)] = inst_23848);

return statearr_23865;
})();
var statearr_23866_23909 = state_23855__$1;
(statearr_23866_23909[(2)] = null);

(statearr_23866_23909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (13))){
var inst_23810 = (state_23855[(10)]);
var inst_23812 = cljs.core.chunked_seq_QMARK_.call(null,inst_23810);
var state_23855__$1 = state_23855;
if(inst_23812){
var statearr_23867_23910 = state_23855__$1;
(statearr_23867_23910[(1)] = (16));

} else {
var statearr_23868_23911 = state_23855__$1;
(statearr_23868_23911[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (22))){
var inst_23840 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
if(cljs.core.truth_(inst_23840)){
var statearr_23869_23912 = state_23855__$1;
(statearr_23869_23912[(1)] = (23));

} else {
var statearr_23870_23913 = state_23855__$1;
(statearr_23870_23913[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (6))){
var inst_23786 = (state_23855[(8)]);
var inst_23836 = (state_23855[(11)]);
var inst_23834 = (state_23855[(7)]);
var inst_23834__$1 = topic_fn.call(null,inst_23786);
var inst_23835 = cljs.core.deref.call(null,mults);
var inst_23836__$1 = cljs.core.get.call(null,inst_23835,inst_23834__$1);
var state_23855__$1 = (function (){var statearr_23871 = state_23855;
(statearr_23871[(11)] = inst_23836__$1);

(statearr_23871[(7)] = inst_23834__$1);

return statearr_23871;
})();
if(cljs.core.truth_(inst_23836__$1)){
var statearr_23872_23914 = state_23855__$1;
(statearr_23872_23914[(1)] = (19));

} else {
var statearr_23873_23915 = state_23855__$1;
(statearr_23873_23915[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (25))){
var inst_23845 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
var statearr_23874_23916 = state_23855__$1;
(statearr_23874_23916[(2)] = inst_23845);

(statearr_23874_23916[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (17))){
var inst_23810 = (state_23855[(10)]);
var inst_23819 = cljs.core.first.call(null,inst_23810);
var inst_23820 = cljs.core.async.muxch_STAR_.call(null,inst_23819);
var inst_23821 = cljs.core.async.close_BANG_.call(null,inst_23820);
var inst_23822 = cljs.core.next.call(null,inst_23810);
var inst_23796 = inst_23822;
var inst_23797 = null;
var inst_23798 = (0);
var inst_23799 = (0);
var state_23855__$1 = (function (){var statearr_23875 = state_23855;
(statearr_23875[(12)] = inst_23799);

(statearr_23875[(13)] = inst_23798);

(statearr_23875[(14)] = inst_23797);

(statearr_23875[(15)] = inst_23796);

(statearr_23875[(16)] = inst_23821);

return statearr_23875;
})();
var statearr_23876_23917 = state_23855__$1;
(statearr_23876_23917[(2)] = null);

(statearr_23876_23917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (3))){
var inst_23853 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23855__$1,inst_23853);
} else {
if((state_val_23856 === (12))){
var inst_23830 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
var statearr_23877_23918 = state_23855__$1;
(statearr_23877_23918[(2)] = inst_23830);

(statearr_23877_23918[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (2))){
var state_23855__$1 = state_23855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23855__$1,(4),ch);
} else {
if((state_val_23856 === (23))){
var state_23855__$1 = state_23855;
var statearr_23878_23919 = state_23855__$1;
(statearr_23878_23919[(2)] = null);

(statearr_23878_23919[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (19))){
var inst_23786 = (state_23855[(8)]);
var inst_23836 = (state_23855[(11)]);
var inst_23838 = cljs.core.async.muxch_STAR_.call(null,inst_23836);
var state_23855__$1 = state_23855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23855__$1,(22),inst_23838,inst_23786);
} else {
if((state_val_23856 === (11))){
var inst_23810 = (state_23855[(10)]);
var inst_23796 = (state_23855[(15)]);
var inst_23810__$1 = cljs.core.seq.call(null,inst_23796);
var state_23855__$1 = (function (){var statearr_23879 = state_23855;
(statearr_23879[(10)] = inst_23810__$1);

return statearr_23879;
})();
if(inst_23810__$1){
var statearr_23880_23920 = state_23855__$1;
(statearr_23880_23920[(1)] = (13));

} else {
var statearr_23881_23921 = state_23855__$1;
(statearr_23881_23921[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (9))){
var inst_23832 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
var statearr_23882_23922 = state_23855__$1;
(statearr_23882_23922[(2)] = inst_23832);

(statearr_23882_23922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (5))){
var inst_23793 = cljs.core.deref.call(null,mults);
var inst_23794 = cljs.core.vals.call(null,inst_23793);
var inst_23795 = cljs.core.seq.call(null,inst_23794);
var inst_23796 = inst_23795;
var inst_23797 = null;
var inst_23798 = (0);
var inst_23799 = (0);
var state_23855__$1 = (function (){var statearr_23883 = state_23855;
(statearr_23883[(12)] = inst_23799);

(statearr_23883[(13)] = inst_23798);

(statearr_23883[(14)] = inst_23797);

(statearr_23883[(15)] = inst_23796);

return statearr_23883;
})();
var statearr_23884_23923 = state_23855__$1;
(statearr_23884_23923[(2)] = null);

(statearr_23884_23923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (14))){
var state_23855__$1 = state_23855;
var statearr_23888_23924 = state_23855__$1;
(statearr_23888_23924[(2)] = null);

(statearr_23888_23924[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (16))){
var inst_23810 = (state_23855[(10)]);
var inst_23814 = cljs.core.chunk_first.call(null,inst_23810);
var inst_23815 = cljs.core.chunk_rest.call(null,inst_23810);
var inst_23816 = cljs.core.count.call(null,inst_23814);
var inst_23796 = inst_23815;
var inst_23797 = inst_23814;
var inst_23798 = inst_23816;
var inst_23799 = (0);
var state_23855__$1 = (function (){var statearr_23889 = state_23855;
(statearr_23889[(12)] = inst_23799);

(statearr_23889[(13)] = inst_23798);

(statearr_23889[(14)] = inst_23797);

(statearr_23889[(15)] = inst_23796);

return statearr_23889;
})();
var statearr_23890_23925 = state_23855__$1;
(statearr_23890_23925[(2)] = null);

(statearr_23890_23925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (10))){
var inst_23799 = (state_23855[(12)]);
var inst_23798 = (state_23855[(13)]);
var inst_23797 = (state_23855[(14)]);
var inst_23796 = (state_23855[(15)]);
var inst_23804 = cljs.core._nth.call(null,inst_23797,inst_23799);
var inst_23805 = cljs.core.async.muxch_STAR_.call(null,inst_23804);
var inst_23806 = cljs.core.async.close_BANG_.call(null,inst_23805);
var inst_23807 = (inst_23799 + (1));
var tmp23885 = inst_23798;
var tmp23886 = inst_23797;
var tmp23887 = inst_23796;
var inst_23796__$1 = tmp23887;
var inst_23797__$1 = tmp23886;
var inst_23798__$1 = tmp23885;
var inst_23799__$1 = inst_23807;
var state_23855__$1 = (function (){var statearr_23891 = state_23855;
(statearr_23891[(12)] = inst_23799__$1);

(statearr_23891[(13)] = inst_23798__$1);

(statearr_23891[(14)] = inst_23797__$1);

(statearr_23891[(17)] = inst_23806);

(statearr_23891[(15)] = inst_23796__$1);

return statearr_23891;
})();
var statearr_23892_23926 = state_23855__$1;
(statearr_23892_23926[(2)] = null);

(statearr_23892_23926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (18))){
var inst_23825 = (state_23855[(2)]);
var state_23855__$1 = state_23855;
var statearr_23893_23927 = state_23855__$1;
(statearr_23893_23927[(2)] = inst_23825);

(statearr_23893_23927[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23856 === (8))){
var inst_23799 = (state_23855[(12)]);
var inst_23798 = (state_23855[(13)]);
var inst_23801 = (inst_23799 < inst_23798);
var inst_23802 = inst_23801;
var state_23855__$1 = state_23855;
if(cljs.core.truth_(inst_23802)){
var statearr_23894_23928 = state_23855__$1;
(statearr_23894_23928[(1)] = (10));

} else {
var statearr_23895_23929 = state_23855__$1;
(statearr_23895_23929[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22667__auto___23901,mults,ensure_mult,p))
;
return ((function (switch__22572__auto__,c__22667__auto___23901,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22573__auto__ = null;
var cljs$core$async$state_machine__22573__auto____0 = (function (){
var statearr_23896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23896[(0)] = cljs$core$async$state_machine__22573__auto__);

(statearr_23896[(1)] = (1));

return statearr_23896;
});
var cljs$core$async$state_machine__22573__auto____1 = (function (state_23855){
while(true){
var ret_value__22574__auto__ = (function (){try{while(true){
var result__22575__auto__ = switch__22572__auto__.call(null,state_23855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22575__auto__;
}
break;
}
}catch (e23897){if((e23897 instanceof Object)){
var ex__22576__auto__ = e23897;
var statearr_23898_23930 = state_23855;
(statearr_23898_23930[(5)] = ex__22576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23931 = state_23855;
state_23855 = G__23931;
continue;
} else {
return ret_value__22574__auto__;
}
break;
}
});
cljs$core$async$state_machine__22573__auto__ = function(state_23855){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22573__auto____1.call(this,state_23855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22573__auto____0;
cljs$core$async$state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22573__auto____1;
return cljs$core$async$state_machine__22573__auto__;
})()
;})(switch__22572__auto__,c__22667__auto___23901,mults,ensure_mult,p))
})();
var state__22669__auto__ = (function (){var statearr_23899 = f__22668__auto__.call(null);
(statearr_23899[(6)] = c__22667__auto___23901);

return statearr_23899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22669__auto__);
});})(c__22667__auto___23901,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__23933 = arguments.length;
switch (G__23933) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__23936 = arguments.length;
switch (G__23936) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__23939 = arguments.length;
switch (G__23939) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22667__auto___24006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22667__auto___24006,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22668__auto__ = (function (){var switch__22572__auto__ = ((function (c__22667__auto___24006,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23978){
var state_val_23979 = (state_23978[(1)]);
if((state_val_23979 === (7))){
var state_23978__$1 = state_23978;
var statearr_23980_24007 = state_23978__$1;
(statearr_23980_24007[(2)] = null);

(statearr_23980_24007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (1))){
var state_23978__$1 = state_23978;
var statearr_23981_24008 = state_23978__$1;
(statearr_23981_24008[(2)] = null);

(statearr_23981_24008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (4))){
var inst_23942 = (state_23978[(7)]);
var inst_23944 = (inst_23942 < cnt);
var state_23978__$1 = state_23978;
if(cljs.core.truth_(inst_23944)){
var statearr_23982_24009 = state_23978__$1;
(statearr_23982_24009[(1)] = (6));

} else {
var statearr_23983_24010 = state_23978__$1;
(statearr_23983_24010[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (15))){
var inst_23974 = (state_23978[(2)]);
var state_23978__$1 = state_23978;
var statearr_23984_24011 = state_23978__$1;
(statearr_23984_24011[(2)] = inst_23974);

(statearr_23984_24011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (13))){
var inst_23967 = cljs.core.async.close_BANG_.call(null,out);
var state_23978__$1 = state_23978;
var statearr_23985_24012 = state_23978__$1;
(statearr_23985_24012[(2)] = inst_23967);

(statearr_23985_24012[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (6))){
var state_23978__$1 = state_23978;
var statearr_23986_24013 = state_23978__$1;
(statearr_23986_24013[(2)] = null);

(statearr_23986_24013[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (3))){
var inst_23976 = (state_23978[(2)]);
var state_23978__$1 = state_23978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23978__$1,inst_23976);
} else {
if((state_val_23979 === (12))){
var inst_23964 = (state_23978[(8)]);
var inst_23964__$1 = (state_23978[(2)]);
var inst_23965 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23964__$1);
var state_23978__$1 = (function (){var statearr_23987 = state_23978;
(statearr_23987[(8)] = inst_23964__$1);

return statearr_23987;
})();
if(cljs.core.truth_(inst_23965)){
var statearr_23988_24014 = state_23978__$1;
(statearr_23988_24014[(1)] = (13));

} else {
var statearr_23989_24015 = state_23978__$1;
(statearr_23989_24015[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (2))){
var inst_23941 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23942 = (0);
var state_23978__$1 = (function (){var statearr_23990 = state_23978;
(statearr_23990[(9)] = inst_23941);

(statearr_23990[(7)] = inst_23942);

return statearr_23990;
})();
var statearr_23991_24016 = state_23978__$1;
(statearr_23991_24016[(2)] = null);

(statearr_23991_24016[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (11))){
var inst_23942 = (state_23978[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23978,(10),Object,null,(9));
var inst_23951 = chs__$1.call(null,inst_23942);
var inst_23952 = done.call(null,inst_23942);
var inst_23953 = cljs.core.async.take_BANG_.call(null,inst_23951,inst_23952);
var state_23978__$1 = state_23978;
var statearr_23992_24017 = state_23978__$1;
(statearr_23992_24017[(2)] = inst_23953);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23978__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (9))){
var inst_23942 = (state_23978[(7)]);
var inst_23955 = (state_23978[(2)]);
var inst_23956 = (inst_23942 + (1));
var inst_23942__$1 = inst_23956;
var state_23978__$1 = (function (){var statearr_23993 = state_23978;
(statearr_23993[(10)] = inst_23955);

(statearr_23993[(7)] = inst_23942__$1);

return statearr_23993;
})();
var statearr_23994_24018 = state_23978__$1;
(statearr_23994_24018[(2)] = null);

(statearr_23994_24018[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (5))){
var inst_23962 = (state_23978[(2)]);
var state_23978__$1 = (function (){var statearr_23995 = state_23978;
(statearr_23995[(11)] = inst_23962);

return statearr_23995;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23978__$1,(12),dchan);
} else {
if((state_val_23979 === (14))){
var inst_23964 = (state_23978[(8)]);
var inst_23969 = cljs.core.apply.call(null,f,inst_23964);
var state_23978__$1 = state_23978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23978__$1,(16),out,inst_23969);
} else {
if((state_val_23979 === (16))){
var inst_23971 = (state_23978[(2)]);
var state_23978__$1 = (function (){var statearr_23996 = state_23978;
(statearr_23996[(12)] = inst_23971);

return statearr_23996;
})();
var statearr_23997_24019 = state_23978__$1;
(statearr_23997_24019[(2)] = null);

(statearr_23997_24019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (10))){
var inst_23946 = (state_23978[(2)]);
var inst_23947 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23978__$1 = (function (){var statearr_23998 = state_23978;
(statearr_23998[(13)] = inst_23946);

return statearr_23998;
})();
var statearr_23999_24020 = state_23978__$1;
(statearr_23999_24020[(2)] = inst_23947);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23978__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (8))){
var inst_23960 = (state_23978[(2)]);
var state_23978__$1 = state_23978;
var statearr_24000_24021 = state_23978__$1;
(statearr_24000_24021[(2)] = inst_23960);

(statearr_24000_24021[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22667__auto___24006,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22572__auto__,c__22667__auto___24006,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22573__auto__ = null;
var cljs$core$async$state_machine__22573__auto____0 = (function (){
var statearr_24001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24001[(0)] = cljs$core$async$state_machine__22573__auto__);

(statearr_24001[(1)] = (1));

return statearr_24001;
});
var cljs$core$async$state_machine__22573__auto____1 = (function (state_23978){
while(true){
var ret_value__22574__auto__ = (function (){try{while(true){
var result__22575__auto__ = switch__22572__auto__.call(null,state_23978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22575__auto__;
}
break;
}
}catch (e24002){if((e24002 instanceof Object)){
var ex__22576__auto__ = e24002;
var statearr_24003_24022 = state_23978;
(statearr_24003_24022[(5)] = ex__22576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24023 = state_23978;
state_23978 = G__24023;
continue;
} else {
return ret_value__22574__auto__;
}
break;
}
});
cljs$core$async$state_machine__22573__auto__ = function(state_23978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22573__auto____1.call(this,state_23978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22573__auto____0;
cljs$core$async$state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22573__auto____1;
return cljs$core$async$state_machine__22573__auto__;
})()
;})(switch__22572__auto__,c__22667__auto___24006,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22669__auto__ = (function (){var statearr_24004 = f__22668__auto__.call(null);
(statearr_24004[(6)] = c__22667__auto___24006);

return statearr_24004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22669__auto__);
});})(c__22667__auto___24006,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__24026 = arguments.length;
switch (G__24026) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22667__auto___24080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22667__auto___24080,out){
return (function (){
var f__22668__auto__ = (function (){var switch__22572__auto__ = ((function (c__22667__auto___24080,out){
return (function (state_24058){
var state_val_24059 = (state_24058[(1)]);
if((state_val_24059 === (7))){
var inst_24037 = (state_24058[(7)]);
var inst_24038 = (state_24058[(8)]);
var inst_24037__$1 = (state_24058[(2)]);
var inst_24038__$1 = cljs.core.nth.call(null,inst_24037__$1,(0),null);
var inst_24039 = cljs.core.nth.call(null,inst_24037__$1,(1),null);
var inst_24040 = (inst_24038__$1 == null);
var state_24058__$1 = (function (){var statearr_24060 = state_24058;
(statearr_24060[(9)] = inst_24039);

(statearr_24060[(7)] = inst_24037__$1);

(statearr_24060[(8)] = inst_24038__$1);

return statearr_24060;
})();
if(cljs.core.truth_(inst_24040)){
var statearr_24061_24081 = state_24058__$1;
(statearr_24061_24081[(1)] = (8));

} else {
var statearr_24062_24082 = state_24058__$1;
(statearr_24062_24082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24059 === (1))){
var inst_24027 = cljs.core.vec.call(null,chs);
var inst_24028 = inst_24027;
var state_24058__$1 = (function (){var statearr_24063 = state_24058;
(statearr_24063[(10)] = inst_24028);

return statearr_24063;
})();
var statearr_24064_24083 = state_24058__$1;
(statearr_24064_24083[(2)] = null);

(statearr_24064_24083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24059 === (4))){
var inst_24028 = (state_24058[(10)]);
var state_24058__$1 = state_24058;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24058__$1,(7),inst_24028);
} else {
if((state_val_24059 === (6))){
var inst_24054 = (state_24058[(2)]);
var state_24058__$1 = state_24058;
var statearr_24065_24084 = state_24058__$1;
(statearr_24065_24084[(2)] = inst_24054);

(statearr_24065_24084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24059 === (3))){
var inst_24056 = (state_24058[(2)]);
var state_24058__$1 = state_24058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24058__$1,inst_24056);
} else {
if((state_val_24059 === (2))){
var inst_24028 = (state_24058[(10)]);
var inst_24030 = cljs.core.count.call(null,inst_24028);
var inst_24031 = (inst_24030 > (0));
var state_24058__$1 = state_24058;
if(cljs.core.truth_(inst_24031)){
var statearr_24067_24085 = state_24058__$1;
(statearr_24067_24085[(1)] = (4));

} else {
var statearr_24068_24086 = state_24058__$1;
(statearr_24068_24086[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24059 === (11))){
var inst_24028 = (state_24058[(10)]);
var inst_24047 = (state_24058[(2)]);
var tmp24066 = inst_24028;
var inst_24028__$1 = tmp24066;
var state_24058__$1 = (function (){var statearr_24069 = state_24058;
(statearr_24069[(10)] = inst_24028__$1);

(statearr_24069[(11)] = inst_24047);

return statearr_24069;
})();
var statearr_24070_24087 = state_24058__$1;
(statearr_24070_24087[(2)] = null);

(statearr_24070_24087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24059 === (9))){
var inst_24038 = (state_24058[(8)]);
var state_24058__$1 = state_24058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24058__$1,(11),out,inst_24038);
} else {
if((state_val_24059 === (5))){
var inst_24052 = cljs.core.async.close_BANG_.call(null,out);
var state_24058__$1 = state_24058;
var statearr_24071_24088 = state_24058__$1;
(statearr_24071_24088[(2)] = inst_24052);

(statearr_24071_24088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24059 === (10))){
var inst_24050 = (state_24058[(2)]);
var state_24058__$1 = state_24058;
var statearr_24072_24089 = state_24058__$1;
(statearr_24072_24089[(2)] = inst_24050);

(statearr_24072_24089[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24059 === (8))){
var inst_24028 = (state_24058[(10)]);
var inst_24039 = (state_24058[(9)]);
var inst_24037 = (state_24058[(7)]);
var inst_24038 = (state_24058[(8)]);
var inst_24042 = (function (){var cs = inst_24028;
var vec__24033 = inst_24037;
var v = inst_24038;
var c = inst_24039;
return ((function (cs,vec__24033,v,c,inst_24028,inst_24039,inst_24037,inst_24038,state_val_24059,c__22667__auto___24080,out){
return (function (p1__24024_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24024_SHARP_);
});
;})(cs,vec__24033,v,c,inst_24028,inst_24039,inst_24037,inst_24038,state_val_24059,c__22667__auto___24080,out))
})();
var inst_24043 = cljs.core.filterv.call(null,inst_24042,inst_24028);
var inst_24028__$1 = inst_24043;
var state_24058__$1 = (function (){var statearr_24073 = state_24058;
(statearr_24073[(10)] = inst_24028__$1);

return statearr_24073;
})();
var statearr_24074_24090 = state_24058__$1;
(statearr_24074_24090[(2)] = null);

(statearr_24074_24090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22667__auto___24080,out))
;
return ((function (switch__22572__auto__,c__22667__auto___24080,out){
return (function() {
var cljs$core$async$state_machine__22573__auto__ = null;
var cljs$core$async$state_machine__22573__auto____0 = (function (){
var statearr_24075 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24075[(0)] = cljs$core$async$state_machine__22573__auto__);

(statearr_24075[(1)] = (1));

return statearr_24075;
});
var cljs$core$async$state_machine__22573__auto____1 = (function (state_24058){
while(true){
var ret_value__22574__auto__ = (function (){try{while(true){
var result__22575__auto__ = switch__22572__auto__.call(null,state_24058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22575__auto__;
}
break;
}
}catch (e24076){if((e24076 instanceof Object)){
var ex__22576__auto__ = e24076;
var statearr_24077_24091 = state_24058;
(statearr_24077_24091[(5)] = ex__22576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24092 = state_24058;
state_24058 = G__24092;
continue;
} else {
return ret_value__22574__auto__;
}
break;
}
});
cljs$core$async$state_machine__22573__auto__ = function(state_24058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22573__auto____1.call(this,state_24058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22573__auto____0;
cljs$core$async$state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22573__auto____1;
return cljs$core$async$state_machine__22573__auto__;
})()
;})(switch__22572__auto__,c__22667__auto___24080,out))
})();
var state__22669__auto__ = (function (){var statearr_24078 = f__22668__auto__.call(null);
(statearr_24078[(6)] = c__22667__auto___24080);

return statearr_24078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22669__auto__);
});})(c__22667__auto___24080,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__24094 = arguments.length;
switch (G__24094) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22667__auto___24139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22667__auto___24139,out){
return (function (){
var f__22668__auto__ = (function (){var switch__22572__auto__ = ((function (c__22667__auto___24139,out){
return (function (state_24118){
var state_val_24119 = (state_24118[(1)]);
if((state_val_24119 === (7))){
var inst_24100 = (state_24118[(7)]);
var inst_24100__$1 = (state_24118[(2)]);
var inst_24101 = (inst_24100__$1 == null);
var inst_24102 = cljs.core.not.call(null,inst_24101);
var state_24118__$1 = (function (){var statearr_24120 = state_24118;
(statearr_24120[(7)] = inst_24100__$1);

return statearr_24120;
})();
if(inst_24102){
var statearr_24121_24140 = state_24118__$1;
(statearr_24121_24140[(1)] = (8));

} else {
var statearr_24122_24141 = state_24118__$1;
(statearr_24122_24141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (1))){
var inst_24095 = (0);
var state_24118__$1 = (function (){var statearr_24123 = state_24118;
(statearr_24123[(8)] = inst_24095);

return statearr_24123;
})();
var statearr_24124_24142 = state_24118__$1;
(statearr_24124_24142[(2)] = null);

(statearr_24124_24142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (4))){
var state_24118__$1 = state_24118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24118__$1,(7),ch);
} else {
if((state_val_24119 === (6))){
var inst_24113 = (state_24118[(2)]);
var state_24118__$1 = state_24118;
var statearr_24125_24143 = state_24118__$1;
(statearr_24125_24143[(2)] = inst_24113);

(statearr_24125_24143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (3))){
var inst_24115 = (state_24118[(2)]);
var inst_24116 = cljs.core.async.close_BANG_.call(null,out);
var state_24118__$1 = (function (){var statearr_24126 = state_24118;
(statearr_24126[(9)] = inst_24115);

return statearr_24126;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24118__$1,inst_24116);
} else {
if((state_val_24119 === (2))){
var inst_24095 = (state_24118[(8)]);
var inst_24097 = (inst_24095 < n);
var state_24118__$1 = state_24118;
if(cljs.core.truth_(inst_24097)){
var statearr_24127_24144 = state_24118__$1;
(statearr_24127_24144[(1)] = (4));

} else {
var statearr_24128_24145 = state_24118__$1;
(statearr_24128_24145[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (11))){
var inst_24095 = (state_24118[(8)]);
var inst_24105 = (state_24118[(2)]);
var inst_24106 = (inst_24095 + (1));
var inst_24095__$1 = inst_24106;
var state_24118__$1 = (function (){var statearr_24129 = state_24118;
(statearr_24129[(8)] = inst_24095__$1);

(statearr_24129[(10)] = inst_24105);

return statearr_24129;
})();
var statearr_24130_24146 = state_24118__$1;
(statearr_24130_24146[(2)] = null);

(statearr_24130_24146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (9))){
var state_24118__$1 = state_24118;
var statearr_24131_24147 = state_24118__$1;
(statearr_24131_24147[(2)] = null);

(statearr_24131_24147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (5))){
var state_24118__$1 = state_24118;
var statearr_24132_24148 = state_24118__$1;
(statearr_24132_24148[(2)] = null);

(statearr_24132_24148[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (10))){
var inst_24110 = (state_24118[(2)]);
var state_24118__$1 = state_24118;
var statearr_24133_24149 = state_24118__$1;
(statearr_24133_24149[(2)] = inst_24110);

(statearr_24133_24149[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (8))){
var inst_24100 = (state_24118[(7)]);
var state_24118__$1 = state_24118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24118__$1,(11),out,inst_24100);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22667__auto___24139,out))
;
return ((function (switch__22572__auto__,c__22667__auto___24139,out){
return (function() {
var cljs$core$async$state_machine__22573__auto__ = null;
var cljs$core$async$state_machine__22573__auto____0 = (function (){
var statearr_24134 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24134[(0)] = cljs$core$async$state_machine__22573__auto__);

(statearr_24134[(1)] = (1));

return statearr_24134;
});
var cljs$core$async$state_machine__22573__auto____1 = (function (state_24118){
while(true){
var ret_value__22574__auto__ = (function (){try{while(true){
var result__22575__auto__ = switch__22572__auto__.call(null,state_24118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22575__auto__;
}
break;
}
}catch (e24135){if((e24135 instanceof Object)){
var ex__22576__auto__ = e24135;
var statearr_24136_24150 = state_24118;
(statearr_24136_24150[(5)] = ex__22576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24151 = state_24118;
state_24118 = G__24151;
continue;
} else {
return ret_value__22574__auto__;
}
break;
}
});
cljs$core$async$state_machine__22573__auto__ = function(state_24118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22573__auto____1.call(this,state_24118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22573__auto____0;
cljs$core$async$state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22573__auto____1;
return cljs$core$async$state_machine__22573__auto__;
})()
;})(switch__22572__auto__,c__22667__auto___24139,out))
})();
var state__22669__auto__ = (function (){var statearr_24137 = f__22668__auto__.call(null);
(statearr_24137[(6)] = c__22667__auto___24139);

return statearr_24137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22669__auto__);
});})(c__22667__auto___24139,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24153 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24153 = (function (f,ch,meta24154){
this.f = f;
this.ch = ch;
this.meta24154 = meta24154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24155,meta24154__$1){
var self__ = this;
var _24155__$1 = this;
return (new cljs.core.async.t_cljs$core$async24153(self__.f,self__.ch,meta24154__$1));
});

cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24155){
var self__ = this;
var _24155__$1 = this;
return self__.meta24154;
});

cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24156 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24156 = (function (f,ch,meta24154,_,fn1,meta24157){
this.f = f;
this.ch = ch;
this.meta24154 = meta24154;
this._ = _;
this.fn1 = fn1;
this.meta24157 = meta24157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24158,meta24157__$1){
var self__ = this;
var _24158__$1 = this;
return (new cljs.core.async.t_cljs$core$async24156(self__.f,self__.ch,self__.meta24154,self__._,self__.fn1,meta24157__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24156.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24158){
var self__ = this;
var _24158__$1 = this;
return self__.meta24157;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24156.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24156.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24156.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24156.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24152_SHARP_){
return f1.call(null,(((p1__24152_SHARP_ == null))?null:self__.f.call(null,p1__24152_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24156.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24154","meta24154",945145824,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24153","cljs.core.async/t_cljs$core$async24153",147715028,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24157","meta24157",2136526757,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24156.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24156.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24156";

cljs.core.async.t_cljs$core$async24156.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24156");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24156.
 */
cljs.core.async.__GT_t_cljs$core$async24156 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24156(f__$1,ch__$1,meta24154__$1,___$2,fn1__$1,meta24157){
return (new cljs.core.async.t_cljs$core$async24156(f__$1,ch__$1,meta24154__$1,___$2,fn1__$1,meta24157));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24156(self__.f,self__.ch,self__.meta24154,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24153.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24154","meta24154",945145824,null)], null);
});

cljs.core.async.t_cljs$core$async24153.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24153.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24153";

cljs.core.async.t_cljs$core$async24153.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24153");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24153.
 */
cljs.core.async.__GT_t_cljs$core$async24153 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24153(f__$1,ch__$1,meta24154){
return (new cljs.core.async.t_cljs$core$async24153(f__$1,ch__$1,meta24154));
});

}

return (new cljs.core.async.t_cljs$core$async24153(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24159 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24159 = (function (f,ch,meta24160){
this.f = f;
this.ch = ch;
this.meta24160 = meta24160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24161,meta24160__$1){
var self__ = this;
var _24161__$1 = this;
return (new cljs.core.async.t_cljs$core$async24159(self__.f,self__.ch,meta24160__$1));
});

cljs.core.async.t_cljs$core$async24159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24161){
var self__ = this;
var _24161__$1 = this;
return self__.meta24160;
});

cljs.core.async.t_cljs$core$async24159.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24159.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24159.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24159.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24159.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24159.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24160","meta24160",1428348423,null)], null);
});

cljs.core.async.t_cljs$core$async24159.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24159";

cljs.core.async.t_cljs$core$async24159.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24159");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24159.
 */
cljs.core.async.__GT_t_cljs$core$async24159 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24159(f__$1,ch__$1,meta24160){
return (new cljs.core.async.t_cljs$core$async24159(f__$1,ch__$1,meta24160));
});

}

return (new cljs.core.async.t_cljs$core$async24159(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24162 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24162 = (function (p,ch,meta24163){
this.p = p;
this.ch = ch;
this.meta24163 = meta24163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24164,meta24163__$1){
var self__ = this;
var _24164__$1 = this;
return (new cljs.core.async.t_cljs$core$async24162(self__.p,self__.ch,meta24163__$1));
});

cljs.core.async.t_cljs$core$async24162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24164){
var self__ = this;
var _24164__$1 = this;
return self__.meta24163;
});

cljs.core.async.t_cljs$core$async24162.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24162.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24162.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24162.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24162.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24162.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24162.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24163","meta24163",2051802457,null)], null);
});

cljs.core.async.t_cljs$core$async24162.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24162";

cljs.core.async.t_cljs$core$async24162.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24162");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24162.
 */
cljs.core.async.__GT_t_cljs$core$async24162 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24162(p__$1,ch__$1,meta24163){
return (new cljs.core.async.t_cljs$core$async24162(p__$1,ch__$1,meta24163));
});

}

return (new cljs.core.async.t_cljs$core$async24162(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__24166 = arguments.length;
switch (G__24166) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22667__auto___24206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22667__auto___24206,out){
return (function (){
var f__22668__auto__ = (function (){var switch__22572__auto__ = ((function (c__22667__auto___24206,out){
return (function (state_24187){
var state_val_24188 = (state_24187[(1)]);
if((state_val_24188 === (7))){
var inst_24183 = (state_24187[(2)]);
var state_24187__$1 = state_24187;
var statearr_24189_24207 = state_24187__$1;
(statearr_24189_24207[(2)] = inst_24183);

(statearr_24189_24207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24188 === (1))){
var state_24187__$1 = state_24187;
var statearr_24190_24208 = state_24187__$1;
(statearr_24190_24208[(2)] = null);

(statearr_24190_24208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24188 === (4))){
var inst_24169 = (state_24187[(7)]);
var inst_24169__$1 = (state_24187[(2)]);
var inst_24170 = (inst_24169__$1 == null);
var state_24187__$1 = (function (){var statearr_24191 = state_24187;
(statearr_24191[(7)] = inst_24169__$1);

return statearr_24191;
})();
if(cljs.core.truth_(inst_24170)){
var statearr_24192_24209 = state_24187__$1;
(statearr_24192_24209[(1)] = (5));

} else {
var statearr_24193_24210 = state_24187__$1;
(statearr_24193_24210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24188 === (6))){
var inst_24169 = (state_24187[(7)]);
var inst_24174 = p.call(null,inst_24169);
var state_24187__$1 = state_24187;
if(cljs.core.truth_(inst_24174)){
var statearr_24194_24211 = state_24187__$1;
(statearr_24194_24211[(1)] = (8));

} else {
var statearr_24195_24212 = state_24187__$1;
(statearr_24195_24212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24188 === (3))){
var inst_24185 = (state_24187[(2)]);
var state_24187__$1 = state_24187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24187__$1,inst_24185);
} else {
if((state_val_24188 === (2))){
var state_24187__$1 = state_24187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24187__$1,(4),ch);
} else {
if((state_val_24188 === (11))){
var inst_24177 = (state_24187[(2)]);
var state_24187__$1 = state_24187;
var statearr_24196_24213 = state_24187__$1;
(statearr_24196_24213[(2)] = inst_24177);

(statearr_24196_24213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24188 === (9))){
var state_24187__$1 = state_24187;
var statearr_24197_24214 = state_24187__$1;
(statearr_24197_24214[(2)] = null);

(statearr_24197_24214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24188 === (5))){
var inst_24172 = cljs.core.async.close_BANG_.call(null,out);
var state_24187__$1 = state_24187;
var statearr_24198_24215 = state_24187__$1;
(statearr_24198_24215[(2)] = inst_24172);

(statearr_24198_24215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24188 === (10))){
var inst_24180 = (state_24187[(2)]);
var state_24187__$1 = (function (){var statearr_24199 = state_24187;
(statearr_24199[(8)] = inst_24180);

return statearr_24199;
})();
var statearr_24200_24216 = state_24187__$1;
(statearr_24200_24216[(2)] = null);

(statearr_24200_24216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24188 === (8))){
var inst_24169 = (state_24187[(7)]);
var state_24187__$1 = state_24187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24187__$1,(11),out,inst_24169);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22667__auto___24206,out))
;
return ((function (switch__22572__auto__,c__22667__auto___24206,out){
return (function() {
var cljs$core$async$state_machine__22573__auto__ = null;
var cljs$core$async$state_machine__22573__auto____0 = (function (){
var statearr_24201 = [null,null,null,null,null,null,null,null,null];
(statearr_24201[(0)] = cljs$core$async$state_machine__22573__auto__);

(statearr_24201[(1)] = (1));

return statearr_24201;
});
var cljs$core$async$state_machine__22573__auto____1 = (function (state_24187){
while(true){
var ret_value__22574__auto__ = (function (){try{while(true){
var result__22575__auto__ = switch__22572__auto__.call(null,state_24187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22575__auto__;
}
break;
}
}catch (e24202){if((e24202 instanceof Object)){
var ex__22576__auto__ = e24202;
var statearr_24203_24217 = state_24187;
(statearr_24203_24217[(5)] = ex__22576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24218 = state_24187;
state_24187 = G__24218;
continue;
} else {
return ret_value__22574__auto__;
}
break;
}
});
cljs$core$async$state_machine__22573__auto__ = function(state_24187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22573__auto____1.call(this,state_24187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22573__auto____0;
cljs$core$async$state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22573__auto____1;
return cljs$core$async$state_machine__22573__auto__;
})()
;})(switch__22572__auto__,c__22667__auto___24206,out))
})();
var state__22669__auto__ = (function (){var statearr_24204 = f__22668__auto__.call(null);
(statearr_24204[(6)] = c__22667__auto___24206);

return statearr_24204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22669__auto__);
});})(c__22667__auto___24206,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24220 = arguments.length;
switch (G__24220) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22667__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22667__auto__){
return (function (){
var f__22668__auto__ = (function (){var switch__22572__auto__ = ((function (c__22667__auto__){
return (function (state_24283){
var state_val_24284 = (state_24283[(1)]);
if((state_val_24284 === (7))){
var inst_24279 = (state_24283[(2)]);
var state_24283__$1 = state_24283;
var statearr_24285_24323 = state_24283__$1;
(statearr_24285_24323[(2)] = inst_24279);

(statearr_24285_24323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (20))){
var inst_24249 = (state_24283[(7)]);
var inst_24260 = (state_24283[(2)]);
var inst_24261 = cljs.core.next.call(null,inst_24249);
var inst_24235 = inst_24261;
var inst_24236 = null;
var inst_24237 = (0);
var inst_24238 = (0);
var state_24283__$1 = (function (){var statearr_24286 = state_24283;
(statearr_24286[(8)] = inst_24235);

(statearr_24286[(9)] = inst_24238);

(statearr_24286[(10)] = inst_24236);

(statearr_24286[(11)] = inst_24260);

(statearr_24286[(12)] = inst_24237);

return statearr_24286;
})();
var statearr_24287_24324 = state_24283__$1;
(statearr_24287_24324[(2)] = null);

(statearr_24287_24324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (1))){
var state_24283__$1 = state_24283;
var statearr_24288_24325 = state_24283__$1;
(statearr_24288_24325[(2)] = null);

(statearr_24288_24325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (4))){
var inst_24224 = (state_24283[(13)]);
var inst_24224__$1 = (state_24283[(2)]);
var inst_24225 = (inst_24224__$1 == null);
var state_24283__$1 = (function (){var statearr_24289 = state_24283;
(statearr_24289[(13)] = inst_24224__$1);

return statearr_24289;
})();
if(cljs.core.truth_(inst_24225)){
var statearr_24290_24326 = state_24283__$1;
(statearr_24290_24326[(1)] = (5));

} else {
var statearr_24291_24327 = state_24283__$1;
(statearr_24291_24327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (15))){
var state_24283__$1 = state_24283;
var statearr_24295_24328 = state_24283__$1;
(statearr_24295_24328[(2)] = null);

(statearr_24295_24328[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (21))){
var state_24283__$1 = state_24283;
var statearr_24296_24329 = state_24283__$1;
(statearr_24296_24329[(2)] = null);

(statearr_24296_24329[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (13))){
var inst_24235 = (state_24283[(8)]);
var inst_24238 = (state_24283[(9)]);
var inst_24236 = (state_24283[(10)]);
var inst_24237 = (state_24283[(12)]);
var inst_24245 = (state_24283[(2)]);
var inst_24246 = (inst_24238 + (1));
var tmp24292 = inst_24235;
var tmp24293 = inst_24236;
var tmp24294 = inst_24237;
var inst_24235__$1 = tmp24292;
var inst_24236__$1 = tmp24293;
var inst_24237__$1 = tmp24294;
var inst_24238__$1 = inst_24246;
var state_24283__$1 = (function (){var statearr_24297 = state_24283;
(statearr_24297[(8)] = inst_24235__$1);

(statearr_24297[(9)] = inst_24238__$1);

(statearr_24297[(14)] = inst_24245);

(statearr_24297[(10)] = inst_24236__$1);

(statearr_24297[(12)] = inst_24237__$1);

return statearr_24297;
})();
var statearr_24298_24330 = state_24283__$1;
(statearr_24298_24330[(2)] = null);

(statearr_24298_24330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (22))){
var state_24283__$1 = state_24283;
var statearr_24299_24331 = state_24283__$1;
(statearr_24299_24331[(2)] = null);

(statearr_24299_24331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (6))){
var inst_24224 = (state_24283[(13)]);
var inst_24233 = f.call(null,inst_24224);
var inst_24234 = cljs.core.seq.call(null,inst_24233);
var inst_24235 = inst_24234;
var inst_24236 = null;
var inst_24237 = (0);
var inst_24238 = (0);
var state_24283__$1 = (function (){var statearr_24300 = state_24283;
(statearr_24300[(8)] = inst_24235);

(statearr_24300[(9)] = inst_24238);

(statearr_24300[(10)] = inst_24236);

(statearr_24300[(12)] = inst_24237);

return statearr_24300;
})();
var statearr_24301_24332 = state_24283__$1;
(statearr_24301_24332[(2)] = null);

(statearr_24301_24332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (17))){
var inst_24249 = (state_24283[(7)]);
var inst_24253 = cljs.core.chunk_first.call(null,inst_24249);
var inst_24254 = cljs.core.chunk_rest.call(null,inst_24249);
var inst_24255 = cljs.core.count.call(null,inst_24253);
var inst_24235 = inst_24254;
var inst_24236 = inst_24253;
var inst_24237 = inst_24255;
var inst_24238 = (0);
var state_24283__$1 = (function (){var statearr_24302 = state_24283;
(statearr_24302[(8)] = inst_24235);

(statearr_24302[(9)] = inst_24238);

(statearr_24302[(10)] = inst_24236);

(statearr_24302[(12)] = inst_24237);

return statearr_24302;
})();
var statearr_24303_24333 = state_24283__$1;
(statearr_24303_24333[(2)] = null);

(statearr_24303_24333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (3))){
var inst_24281 = (state_24283[(2)]);
var state_24283__$1 = state_24283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24283__$1,inst_24281);
} else {
if((state_val_24284 === (12))){
var inst_24269 = (state_24283[(2)]);
var state_24283__$1 = state_24283;
var statearr_24304_24334 = state_24283__$1;
(statearr_24304_24334[(2)] = inst_24269);

(statearr_24304_24334[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (2))){
var state_24283__$1 = state_24283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24283__$1,(4),in$);
} else {
if((state_val_24284 === (23))){
var inst_24277 = (state_24283[(2)]);
var state_24283__$1 = state_24283;
var statearr_24305_24335 = state_24283__$1;
(statearr_24305_24335[(2)] = inst_24277);

(statearr_24305_24335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (19))){
var inst_24264 = (state_24283[(2)]);
var state_24283__$1 = state_24283;
var statearr_24306_24336 = state_24283__$1;
(statearr_24306_24336[(2)] = inst_24264);

(statearr_24306_24336[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (11))){
var inst_24235 = (state_24283[(8)]);
var inst_24249 = (state_24283[(7)]);
var inst_24249__$1 = cljs.core.seq.call(null,inst_24235);
var state_24283__$1 = (function (){var statearr_24307 = state_24283;
(statearr_24307[(7)] = inst_24249__$1);

return statearr_24307;
})();
if(inst_24249__$1){
var statearr_24308_24337 = state_24283__$1;
(statearr_24308_24337[(1)] = (14));

} else {
var statearr_24309_24338 = state_24283__$1;
(statearr_24309_24338[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (9))){
var inst_24271 = (state_24283[(2)]);
var inst_24272 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24283__$1 = (function (){var statearr_24310 = state_24283;
(statearr_24310[(15)] = inst_24271);

return statearr_24310;
})();
if(cljs.core.truth_(inst_24272)){
var statearr_24311_24339 = state_24283__$1;
(statearr_24311_24339[(1)] = (21));

} else {
var statearr_24312_24340 = state_24283__$1;
(statearr_24312_24340[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (5))){
var inst_24227 = cljs.core.async.close_BANG_.call(null,out);
var state_24283__$1 = state_24283;
var statearr_24313_24341 = state_24283__$1;
(statearr_24313_24341[(2)] = inst_24227);

(statearr_24313_24341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (14))){
var inst_24249 = (state_24283[(7)]);
var inst_24251 = cljs.core.chunked_seq_QMARK_.call(null,inst_24249);
var state_24283__$1 = state_24283;
if(inst_24251){
var statearr_24314_24342 = state_24283__$1;
(statearr_24314_24342[(1)] = (17));

} else {
var statearr_24315_24343 = state_24283__$1;
(statearr_24315_24343[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (16))){
var inst_24267 = (state_24283[(2)]);
var state_24283__$1 = state_24283;
var statearr_24316_24344 = state_24283__$1;
(statearr_24316_24344[(2)] = inst_24267);

(statearr_24316_24344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (10))){
var inst_24238 = (state_24283[(9)]);
var inst_24236 = (state_24283[(10)]);
var inst_24243 = cljs.core._nth.call(null,inst_24236,inst_24238);
var state_24283__$1 = state_24283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24283__$1,(13),out,inst_24243);
} else {
if((state_val_24284 === (18))){
var inst_24249 = (state_24283[(7)]);
var inst_24258 = cljs.core.first.call(null,inst_24249);
var state_24283__$1 = state_24283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24283__$1,(20),out,inst_24258);
} else {
if((state_val_24284 === (8))){
var inst_24238 = (state_24283[(9)]);
var inst_24237 = (state_24283[(12)]);
var inst_24240 = (inst_24238 < inst_24237);
var inst_24241 = inst_24240;
var state_24283__$1 = state_24283;
if(cljs.core.truth_(inst_24241)){
var statearr_24317_24345 = state_24283__$1;
(statearr_24317_24345[(1)] = (10));

} else {
var statearr_24318_24346 = state_24283__$1;
(statearr_24318_24346[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22667__auto__))
;
return ((function (switch__22572__auto__,c__22667__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22573__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22573__auto____0 = (function (){
var statearr_24319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24319[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22573__auto__);

(statearr_24319[(1)] = (1));

return statearr_24319;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22573__auto____1 = (function (state_24283){
while(true){
var ret_value__22574__auto__ = (function (){try{while(true){
var result__22575__auto__ = switch__22572__auto__.call(null,state_24283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22575__auto__;
}
break;
}
}catch (e24320){if((e24320 instanceof Object)){
var ex__22576__auto__ = e24320;
var statearr_24321_24347 = state_24283;
(statearr_24321_24347[(5)] = ex__22576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24348 = state_24283;
state_24283 = G__24348;
continue;
} else {
return ret_value__22574__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22573__auto__ = function(state_24283){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22573__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22573__auto____1.call(this,state_24283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22573__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22573__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22573__auto__;
})()
;})(switch__22572__auto__,c__22667__auto__))
})();
var state__22669__auto__ = (function (){var statearr_24322 = f__22668__auto__.call(null);
(statearr_24322[(6)] = c__22667__auto__);

return statearr_24322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22669__auto__);
});})(c__22667__auto__))
);

return c__22667__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24350 = arguments.length;
switch (G__24350) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__24353 = arguments.length;
switch (G__24353) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__24356 = arguments.length;
switch (G__24356) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22667__auto___24403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22667__auto___24403,out){
return (function (){
var f__22668__auto__ = (function (){var switch__22572__auto__ = ((function (c__22667__auto___24403,out){
return (function (state_24380){
var state_val_24381 = (state_24380[(1)]);
if((state_val_24381 === (7))){
var inst_24375 = (state_24380[(2)]);
var state_24380__$1 = state_24380;
var statearr_24382_24404 = state_24380__$1;
(statearr_24382_24404[(2)] = inst_24375);

(statearr_24382_24404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24381 === (1))){
var inst_24357 = null;
var state_24380__$1 = (function (){var statearr_24383 = state_24380;
(statearr_24383[(7)] = inst_24357);

return statearr_24383;
})();
var statearr_24384_24405 = state_24380__$1;
(statearr_24384_24405[(2)] = null);

(statearr_24384_24405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24381 === (4))){
var inst_24360 = (state_24380[(8)]);
var inst_24360__$1 = (state_24380[(2)]);
var inst_24361 = (inst_24360__$1 == null);
var inst_24362 = cljs.core.not.call(null,inst_24361);
var state_24380__$1 = (function (){var statearr_24385 = state_24380;
(statearr_24385[(8)] = inst_24360__$1);

return statearr_24385;
})();
if(inst_24362){
var statearr_24386_24406 = state_24380__$1;
(statearr_24386_24406[(1)] = (5));

} else {
var statearr_24387_24407 = state_24380__$1;
(statearr_24387_24407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24381 === (6))){
var state_24380__$1 = state_24380;
var statearr_24388_24408 = state_24380__$1;
(statearr_24388_24408[(2)] = null);

(statearr_24388_24408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24381 === (3))){
var inst_24377 = (state_24380[(2)]);
var inst_24378 = cljs.core.async.close_BANG_.call(null,out);
var state_24380__$1 = (function (){var statearr_24389 = state_24380;
(statearr_24389[(9)] = inst_24377);

return statearr_24389;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24380__$1,inst_24378);
} else {
if((state_val_24381 === (2))){
var state_24380__$1 = state_24380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24380__$1,(4),ch);
} else {
if((state_val_24381 === (11))){
var inst_24360 = (state_24380[(8)]);
var inst_24369 = (state_24380[(2)]);
var inst_24357 = inst_24360;
var state_24380__$1 = (function (){var statearr_24390 = state_24380;
(statearr_24390[(10)] = inst_24369);

(statearr_24390[(7)] = inst_24357);

return statearr_24390;
})();
var statearr_24391_24409 = state_24380__$1;
(statearr_24391_24409[(2)] = null);

(statearr_24391_24409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24381 === (9))){
var inst_24360 = (state_24380[(8)]);
var state_24380__$1 = state_24380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24380__$1,(11),out,inst_24360);
} else {
if((state_val_24381 === (5))){
var inst_24360 = (state_24380[(8)]);
var inst_24357 = (state_24380[(7)]);
var inst_24364 = cljs.core._EQ_.call(null,inst_24360,inst_24357);
var state_24380__$1 = state_24380;
if(inst_24364){
var statearr_24393_24410 = state_24380__$1;
(statearr_24393_24410[(1)] = (8));

} else {
var statearr_24394_24411 = state_24380__$1;
(statearr_24394_24411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24381 === (10))){
var inst_24372 = (state_24380[(2)]);
var state_24380__$1 = state_24380;
var statearr_24395_24412 = state_24380__$1;
(statearr_24395_24412[(2)] = inst_24372);

(statearr_24395_24412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24381 === (8))){
var inst_24357 = (state_24380[(7)]);
var tmp24392 = inst_24357;
var inst_24357__$1 = tmp24392;
var state_24380__$1 = (function (){var statearr_24396 = state_24380;
(statearr_24396[(7)] = inst_24357__$1);

return statearr_24396;
})();
var statearr_24397_24413 = state_24380__$1;
(statearr_24397_24413[(2)] = null);

(statearr_24397_24413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22667__auto___24403,out))
;
return ((function (switch__22572__auto__,c__22667__auto___24403,out){
return (function() {
var cljs$core$async$state_machine__22573__auto__ = null;
var cljs$core$async$state_machine__22573__auto____0 = (function (){
var statearr_24398 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24398[(0)] = cljs$core$async$state_machine__22573__auto__);

(statearr_24398[(1)] = (1));

return statearr_24398;
});
var cljs$core$async$state_machine__22573__auto____1 = (function (state_24380){
while(true){
var ret_value__22574__auto__ = (function (){try{while(true){
var result__22575__auto__ = switch__22572__auto__.call(null,state_24380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22575__auto__;
}
break;
}
}catch (e24399){if((e24399 instanceof Object)){
var ex__22576__auto__ = e24399;
var statearr_24400_24414 = state_24380;
(statearr_24400_24414[(5)] = ex__22576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24415 = state_24380;
state_24380 = G__24415;
continue;
} else {
return ret_value__22574__auto__;
}
break;
}
});
cljs$core$async$state_machine__22573__auto__ = function(state_24380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22573__auto____1.call(this,state_24380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22573__auto____0;
cljs$core$async$state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22573__auto____1;
return cljs$core$async$state_machine__22573__auto__;
})()
;})(switch__22572__auto__,c__22667__auto___24403,out))
})();
var state__22669__auto__ = (function (){var statearr_24401 = f__22668__auto__.call(null);
(statearr_24401[(6)] = c__22667__auto___24403);

return statearr_24401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22669__auto__);
});})(c__22667__auto___24403,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__24417 = arguments.length;
switch (G__24417) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22667__auto___24483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22667__auto___24483,out){
return (function (){
var f__22668__auto__ = (function (){var switch__22572__auto__ = ((function (c__22667__auto___24483,out){
return (function (state_24455){
var state_val_24456 = (state_24455[(1)]);
if((state_val_24456 === (7))){
var inst_24451 = (state_24455[(2)]);
var state_24455__$1 = state_24455;
var statearr_24457_24484 = state_24455__$1;
(statearr_24457_24484[(2)] = inst_24451);

(statearr_24457_24484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24456 === (1))){
var inst_24418 = (new Array(n));
var inst_24419 = inst_24418;
var inst_24420 = (0);
var state_24455__$1 = (function (){var statearr_24458 = state_24455;
(statearr_24458[(7)] = inst_24420);

(statearr_24458[(8)] = inst_24419);

return statearr_24458;
})();
var statearr_24459_24485 = state_24455__$1;
(statearr_24459_24485[(2)] = null);

(statearr_24459_24485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24456 === (4))){
var inst_24423 = (state_24455[(9)]);
var inst_24423__$1 = (state_24455[(2)]);
var inst_24424 = (inst_24423__$1 == null);
var inst_24425 = cljs.core.not.call(null,inst_24424);
var state_24455__$1 = (function (){var statearr_24460 = state_24455;
(statearr_24460[(9)] = inst_24423__$1);

return statearr_24460;
})();
if(inst_24425){
var statearr_24461_24486 = state_24455__$1;
(statearr_24461_24486[(1)] = (5));

} else {
var statearr_24462_24487 = state_24455__$1;
(statearr_24462_24487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24456 === (15))){
var inst_24445 = (state_24455[(2)]);
var state_24455__$1 = state_24455;
var statearr_24463_24488 = state_24455__$1;
(statearr_24463_24488[(2)] = inst_24445);

(statearr_24463_24488[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24456 === (13))){
var state_24455__$1 = state_24455;
var statearr_24464_24489 = state_24455__$1;
(statearr_24464_24489[(2)] = null);

(statearr_24464_24489[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24456 === (6))){
var inst_24420 = (state_24455[(7)]);
var inst_24441 = (inst_24420 > (0));
var state_24455__$1 = state_24455;
if(cljs.core.truth_(inst_24441)){
var statearr_24465_24490 = state_24455__$1;
(statearr_24465_24490[(1)] = (12));

} else {
var statearr_24466_24491 = state_24455__$1;
(statearr_24466_24491[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24456 === (3))){
var inst_24453 = (state_24455[(2)]);
var state_24455__$1 = state_24455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24455__$1,inst_24453);
} else {
if((state_val_24456 === (12))){
var inst_24419 = (state_24455[(8)]);
var inst_24443 = cljs.core.vec.call(null,inst_24419);
var state_24455__$1 = state_24455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24455__$1,(15),out,inst_24443);
} else {
if((state_val_24456 === (2))){
var state_24455__$1 = state_24455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24455__$1,(4),ch);
} else {
if((state_val_24456 === (11))){
var inst_24435 = (state_24455[(2)]);
var inst_24436 = (new Array(n));
var inst_24419 = inst_24436;
var inst_24420 = (0);
var state_24455__$1 = (function (){var statearr_24467 = state_24455;
(statearr_24467[(7)] = inst_24420);

(statearr_24467[(10)] = inst_24435);

(statearr_24467[(8)] = inst_24419);

return statearr_24467;
})();
var statearr_24468_24492 = state_24455__$1;
(statearr_24468_24492[(2)] = null);

(statearr_24468_24492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24456 === (9))){
var inst_24419 = (state_24455[(8)]);
var inst_24433 = cljs.core.vec.call(null,inst_24419);
var state_24455__$1 = state_24455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24455__$1,(11),out,inst_24433);
} else {
if((state_val_24456 === (5))){
var inst_24428 = (state_24455[(11)]);
var inst_24420 = (state_24455[(7)]);
var inst_24423 = (state_24455[(9)]);
var inst_24419 = (state_24455[(8)]);
var inst_24427 = (inst_24419[inst_24420] = inst_24423);
var inst_24428__$1 = (inst_24420 + (1));
var inst_24429 = (inst_24428__$1 < n);
var state_24455__$1 = (function (){var statearr_24469 = state_24455;
(statearr_24469[(11)] = inst_24428__$1);

(statearr_24469[(12)] = inst_24427);

return statearr_24469;
})();
if(cljs.core.truth_(inst_24429)){
var statearr_24470_24493 = state_24455__$1;
(statearr_24470_24493[(1)] = (8));

} else {
var statearr_24471_24494 = state_24455__$1;
(statearr_24471_24494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24456 === (14))){
var inst_24448 = (state_24455[(2)]);
var inst_24449 = cljs.core.async.close_BANG_.call(null,out);
var state_24455__$1 = (function (){var statearr_24473 = state_24455;
(statearr_24473[(13)] = inst_24448);

return statearr_24473;
})();
var statearr_24474_24495 = state_24455__$1;
(statearr_24474_24495[(2)] = inst_24449);

(statearr_24474_24495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24456 === (10))){
var inst_24439 = (state_24455[(2)]);
var state_24455__$1 = state_24455;
var statearr_24475_24496 = state_24455__$1;
(statearr_24475_24496[(2)] = inst_24439);

(statearr_24475_24496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24456 === (8))){
var inst_24428 = (state_24455[(11)]);
var inst_24419 = (state_24455[(8)]);
var tmp24472 = inst_24419;
var inst_24419__$1 = tmp24472;
var inst_24420 = inst_24428;
var state_24455__$1 = (function (){var statearr_24476 = state_24455;
(statearr_24476[(7)] = inst_24420);

(statearr_24476[(8)] = inst_24419__$1);

return statearr_24476;
})();
var statearr_24477_24497 = state_24455__$1;
(statearr_24477_24497[(2)] = null);

(statearr_24477_24497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22667__auto___24483,out))
;
return ((function (switch__22572__auto__,c__22667__auto___24483,out){
return (function() {
var cljs$core$async$state_machine__22573__auto__ = null;
var cljs$core$async$state_machine__22573__auto____0 = (function (){
var statearr_24478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24478[(0)] = cljs$core$async$state_machine__22573__auto__);

(statearr_24478[(1)] = (1));

return statearr_24478;
});
var cljs$core$async$state_machine__22573__auto____1 = (function (state_24455){
while(true){
var ret_value__22574__auto__ = (function (){try{while(true){
var result__22575__auto__ = switch__22572__auto__.call(null,state_24455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22575__auto__;
}
break;
}
}catch (e24479){if((e24479 instanceof Object)){
var ex__22576__auto__ = e24479;
var statearr_24480_24498 = state_24455;
(statearr_24480_24498[(5)] = ex__22576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24499 = state_24455;
state_24455 = G__24499;
continue;
} else {
return ret_value__22574__auto__;
}
break;
}
});
cljs$core$async$state_machine__22573__auto__ = function(state_24455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22573__auto____1.call(this,state_24455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22573__auto____0;
cljs$core$async$state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22573__auto____1;
return cljs$core$async$state_machine__22573__auto__;
})()
;})(switch__22572__auto__,c__22667__auto___24483,out))
})();
var state__22669__auto__ = (function (){var statearr_24481 = f__22668__auto__.call(null);
(statearr_24481[(6)] = c__22667__auto___24483);

return statearr_24481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22669__auto__);
});})(c__22667__auto___24483,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__24501 = arguments.length;
switch (G__24501) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22667__auto___24571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22667__auto___24571,out){
return (function (){
var f__22668__auto__ = (function (){var switch__22572__auto__ = ((function (c__22667__auto___24571,out){
return (function (state_24543){
var state_val_24544 = (state_24543[(1)]);
if((state_val_24544 === (7))){
var inst_24539 = (state_24543[(2)]);
var state_24543__$1 = state_24543;
var statearr_24545_24572 = state_24543__$1;
(statearr_24545_24572[(2)] = inst_24539);

(statearr_24545_24572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (1))){
var inst_24502 = [];
var inst_24503 = inst_24502;
var inst_24504 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24543__$1 = (function (){var statearr_24546 = state_24543;
(statearr_24546[(7)] = inst_24503);

(statearr_24546[(8)] = inst_24504);

return statearr_24546;
})();
var statearr_24547_24573 = state_24543__$1;
(statearr_24547_24573[(2)] = null);

(statearr_24547_24573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (4))){
var inst_24507 = (state_24543[(9)]);
var inst_24507__$1 = (state_24543[(2)]);
var inst_24508 = (inst_24507__$1 == null);
var inst_24509 = cljs.core.not.call(null,inst_24508);
var state_24543__$1 = (function (){var statearr_24548 = state_24543;
(statearr_24548[(9)] = inst_24507__$1);

return statearr_24548;
})();
if(inst_24509){
var statearr_24549_24574 = state_24543__$1;
(statearr_24549_24574[(1)] = (5));

} else {
var statearr_24550_24575 = state_24543__$1;
(statearr_24550_24575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (15))){
var inst_24533 = (state_24543[(2)]);
var state_24543__$1 = state_24543;
var statearr_24551_24576 = state_24543__$1;
(statearr_24551_24576[(2)] = inst_24533);

(statearr_24551_24576[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (13))){
var state_24543__$1 = state_24543;
var statearr_24552_24577 = state_24543__$1;
(statearr_24552_24577[(2)] = null);

(statearr_24552_24577[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (6))){
var inst_24503 = (state_24543[(7)]);
var inst_24528 = inst_24503.length;
var inst_24529 = (inst_24528 > (0));
var state_24543__$1 = state_24543;
if(cljs.core.truth_(inst_24529)){
var statearr_24553_24578 = state_24543__$1;
(statearr_24553_24578[(1)] = (12));

} else {
var statearr_24554_24579 = state_24543__$1;
(statearr_24554_24579[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (3))){
var inst_24541 = (state_24543[(2)]);
var state_24543__$1 = state_24543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24543__$1,inst_24541);
} else {
if((state_val_24544 === (12))){
var inst_24503 = (state_24543[(7)]);
var inst_24531 = cljs.core.vec.call(null,inst_24503);
var state_24543__$1 = state_24543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24543__$1,(15),out,inst_24531);
} else {
if((state_val_24544 === (2))){
var state_24543__$1 = state_24543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24543__$1,(4),ch);
} else {
if((state_val_24544 === (11))){
var inst_24507 = (state_24543[(9)]);
var inst_24511 = (state_24543[(10)]);
var inst_24521 = (state_24543[(2)]);
var inst_24522 = [];
var inst_24523 = inst_24522.push(inst_24507);
var inst_24503 = inst_24522;
var inst_24504 = inst_24511;
var state_24543__$1 = (function (){var statearr_24555 = state_24543;
(statearr_24555[(7)] = inst_24503);

(statearr_24555[(11)] = inst_24523);

(statearr_24555[(8)] = inst_24504);

(statearr_24555[(12)] = inst_24521);

return statearr_24555;
})();
var statearr_24556_24580 = state_24543__$1;
(statearr_24556_24580[(2)] = null);

(statearr_24556_24580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (9))){
var inst_24503 = (state_24543[(7)]);
var inst_24519 = cljs.core.vec.call(null,inst_24503);
var state_24543__$1 = state_24543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24543__$1,(11),out,inst_24519);
} else {
if((state_val_24544 === (5))){
var inst_24507 = (state_24543[(9)]);
var inst_24511 = (state_24543[(10)]);
var inst_24504 = (state_24543[(8)]);
var inst_24511__$1 = f.call(null,inst_24507);
var inst_24512 = cljs.core._EQ_.call(null,inst_24511__$1,inst_24504);
var inst_24513 = cljs.core.keyword_identical_QMARK_.call(null,inst_24504,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24514 = ((inst_24512) || (inst_24513));
var state_24543__$1 = (function (){var statearr_24557 = state_24543;
(statearr_24557[(10)] = inst_24511__$1);

return statearr_24557;
})();
if(cljs.core.truth_(inst_24514)){
var statearr_24558_24581 = state_24543__$1;
(statearr_24558_24581[(1)] = (8));

} else {
var statearr_24559_24582 = state_24543__$1;
(statearr_24559_24582[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (14))){
var inst_24536 = (state_24543[(2)]);
var inst_24537 = cljs.core.async.close_BANG_.call(null,out);
var state_24543__$1 = (function (){var statearr_24561 = state_24543;
(statearr_24561[(13)] = inst_24536);

return statearr_24561;
})();
var statearr_24562_24583 = state_24543__$1;
(statearr_24562_24583[(2)] = inst_24537);

(statearr_24562_24583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (10))){
var inst_24526 = (state_24543[(2)]);
var state_24543__$1 = state_24543;
var statearr_24563_24584 = state_24543__$1;
(statearr_24563_24584[(2)] = inst_24526);

(statearr_24563_24584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (8))){
var inst_24503 = (state_24543[(7)]);
var inst_24507 = (state_24543[(9)]);
var inst_24511 = (state_24543[(10)]);
var inst_24516 = inst_24503.push(inst_24507);
var tmp24560 = inst_24503;
var inst_24503__$1 = tmp24560;
var inst_24504 = inst_24511;
var state_24543__$1 = (function (){var statearr_24564 = state_24543;
(statearr_24564[(7)] = inst_24503__$1);

(statearr_24564[(14)] = inst_24516);

(statearr_24564[(8)] = inst_24504);

return statearr_24564;
})();
var statearr_24565_24585 = state_24543__$1;
(statearr_24565_24585[(2)] = null);

(statearr_24565_24585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22667__auto___24571,out))
;
return ((function (switch__22572__auto__,c__22667__auto___24571,out){
return (function() {
var cljs$core$async$state_machine__22573__auto__ = null;
var cljs$core$async$state_machine__22573__auto____0 = (function (){
var statearr_24566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24566[(0)] = cljs$core$async$state_machine__22573__auto__);

(statearr_24566[(1)] = (1));

return statearr_24566;
});
var cljs$core$async$state_machine__22573__auto____1 = (function (state_24543){
while(true){
var ret_value__22574__auto__ = (function (){try{while(true){
var result__22575__auto__ = switch__22572__auto__.call(null,state_24543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22575__auto__;
}
break;
}
}catch (e24567){if((e24567 instanceof Object)){
var ex__22576__auto__ = e24567;
var statearr_24568_24586 = state_24543;
(statearr_24568_24586[(5)] = ex__22576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24587 = state_24543;
state_24543 = G__24587;
continue;
} else {
return ret_value__22574__auto__;
}
break;
}
});
cljs$core$async$state_machine__22573__auto__ = function(state_24543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22573__auto____1.call(this,state_24543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22573__auto____0;
cljs$core$async$state_machine__22573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22573__auto____1;
return cljs$core$async$state_machine__22573__auto__;
})()
;})(switch__22572__auto__,c__22667__auto___24571,out))
})();
var state__22669__auto__ = (function (){var statearr_24569 = f__22668__auto__.call(null);
(statearr_24569[(6)] = c__22667__auto___24571);

return statearr_24569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22669__auto__);
});})(c__22667__auto___24571,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1581262051232
