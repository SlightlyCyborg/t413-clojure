// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args40795 = [];
var len__26323__auto___40801 = arguments.length;
var i__26324__auto___40802 = (0);
while(true){
if((i__26324__auto___40802 < len__26323__auto___40801)){
args40795.push((arguments[i__26324__auto___40802]));

var G__40803 = (i__26324__auto___40802 + (1));
i__26324__auto___40802 = G__40803;
continue;
} else {
}
break;
}

var G__40797 = args40795.length;
switch (G__40797) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40795.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async40798 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40798 = (function (f,blockable,meta40799){
this.f = f;
this.blockable = blockable;
this.meta40799 = meta40799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40800,meta40799__$1){
var self__ = this;
var _40800__$1 = this;
return (new cljs.core.async.t_cljs$core$async40798(self__.f,self__.blockable,meta40799__$1));
});

cljs.core.async.t_cljs$core$async40798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40800){
var self__ = this;
var _40800__$1 = this;
return self__.meta40799;
});

cljs.core.async.t_cljs$core$async40798.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40798.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40798.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async40798.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async40798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40799","meta40799",-179532945,null)], null);
});

cljs.core.async.t_cljs$core$async40798.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40798";

cljs.core.async.t_cljs$core$async40798.cljs$lang$ctorPrWriter = (function (this__25863__auto__,writer__25864__auto__,opt__25865__auto__){
return cljs.core._write.call(null,writer__25864__auto__,"cljs.core.async/t_cljs$core$async40798");
});

cljs.core.async.__GT_t_cljs$core$async40798 = (function cljs$core$async$__GT_t_cljs$core$async40798(f__$1,blockable__$1,meta40799){
return (new cljs.core.async.t_cljs$core$async40798(f__$1,blockable__$1,meta40799));
});

}

return (new cljs.core.async.t_cljs$core$async40798(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
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
var args40807 = [];
var len__26323__auto___40810 = arguments.length;
var i__26324__auto___40811 = (0);
while(true){
if((i__26324__auto___40811 < len__26323__auto___40810)){
args40807.push((arguments[i__26324__auto___40811]));

var G__40812 = (i__26324__auto___40811 + (1));
i__26324__auto___40811 = G__40812;
continue;
} else {
}
break;
}

var G__40809 = args40807.length;
switch (G__40809) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40807.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
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
var args40814 = [];
var len__26323__auto___40817 = arguments.length;
var i__26324__auto___40818 = (0);
while(true){
if((i__26324__auto___40818 < len__26323__auto___40817)){
args40814.push((arguments[i__26324__auto___40818]));

var G__40819 = (i__26324__auto___40818 + (1));
i__26324__auto___40818 = G__40819;
continue;
} else {
}
break;
}

var G__40816 = args40814.length;
switch (G__40816) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40814.length)].join('')));

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
var args40821 = [];
var len__26323__auto___40824 = arguments.length;
var i__26324__auto___40825 = (0);
while(true){
if((i__26324__auto___40825 < len__26323__auto___40824)){
args40821.push((arguments[i__26324__auto___40825]));

var G__40826 = (i__26324__auto___40825 + (1));
i__26324__auto___40825 = G__40826;
continue;
} else {
}
break;
}

var G__40823 = args40821.length;
switch (G__40823) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40821.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_40828 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_40828);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_40828,ret){
return (function (){
return fn1.call(null,val_40828);
});})(val_40828,ret))
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
var args40829 = [];
var len__26323__auto___40832 = arguments.length;
var i__26324__auto___40833 = (0);
while(true){
if((i__26324__auto___40833 < len__26323__auto___40832)){
args40829.push((arguments[i__26324__auto___40833]));

var G__40834 = (i__26324__auto___40833 + (1));
i__26324__auto___40833 = G__40834;
continue;
} else {
}
break;
}

var G__40831 = args40829.length;
switch (G__40831) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40829.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__26168__auto___40836 = n;
var x_40837 = (0);
while(true){
if((x_40837 < n__26168__auto___40836)){
(a[x_40837] = (0));

var G__40838 = (x_40837 + (1));
x_40837 = G__40838;
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

var G__40839 = (i + (1));
i = G__40839;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async40843 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40843 = (function (alt_flag,flag,meta40844){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta40844 = meta40844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40845,meta40844__$1){
var self__ = this;
var _40845__$1 = this;
return (new cljs.core.async.t_cljs$core$async40843(self__.alt_flag,self__.flag,meta40844__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async40843.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40845){
var self__ = this;
var _40845__$1 = this;
return self__.meta40844;
});})(flag))
;

cljs.core.async.t_cljs$core$async40843.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40843.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async40843.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40843.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40843.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40844","meta40844",-1597580015,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async40843.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40843";

cljs.core.async.t_cljs$core$async40843.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25863__auto__,writer__25864__auto__,opt__25865__auto__){
return cljs.core._write.call(null,writer__25864__auto__,"cljs.core.async/t_cljs$core$async40843");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async40843 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40843(alt_flag__$1,flag__$1,meta40844){
return (new cljs.core.async.t_cljs$core$async40843(alt_flag__$1,flag__$1,meta40844));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async40843(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async40849 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40849 = (function (alt_handler,flag,cb,meta40850){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta40850 = meta40850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40851,meta40850__$1){
var self__ = this;
var _40851__$1 = this;
return (new cljs.core.async.t_cljs$core$async40849(self__.alt_handler,self__.flag,self__.cb,meta40850__$1));
});

cljs.core.async.t_cljs$core$async40849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40851){
var self__ = this;
var _40851__$1 = this;
return self__.meta40850;
});

cljs.core.async.t_cljs$core$async40849.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40849.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async40849.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40849.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async40849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40850","meta40850",1928576363,null)], null);
});

cljs.core.async.t_cljs$core$async40849.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40849";

cljs.core.async.t_cljs$core$async40849.cljs$lang$ctorPrWriter = (function (this__25863__auto__,writer__25864__auto__,opt__25865__auto__){
return cljs.core._write.call(null,writer__25864__auto__,"cljs.core.async/t_cljs$core$async40849");
});

cljs.core.async.__GT_t_cljs$core$async40849 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40849(alt_handler__$1,flag__$1,cb__$1,meta40850){
return (new cljs.core.async.t_cljs$core$async40849(alt_handler__$1,flag__$1,cb__$1,meta40850));
});

}

return (new cljs.core.async.t_cljs$core$async40849(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__40852_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40852_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40853_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40853_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25265__auto__ = wport;
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40854 = (i + (1));
i = G__40854;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25265__auto__ = ret;
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25253__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25253__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25253__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__26330__auto__ = [];
var len__26323__auto___40860 = arguments.length;
var i__26324__auto___40861 = (0);
while(true){
if((i__26324__auto___40861 < len__26323__auto___40860)){
args__26330__auto__.push((arguments[i__26324__auto___40861]));

var G__40862 = (i__26324__auto___40861 + (1));
i__26324__auto___40861 = G__40862;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40857){
var map__40858 = p__40857;
var map__40858__$1 = ((((!((map__40858 == null)))?((((map__40858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40858):map__40858);
var opts = map__40858__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40855){
var G__40856 = cljs.core.first.call(null,seq40855);
var seq40855__$1 = cljs.core.next.call(null,seq40855);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40856,seq40855__$1);
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
var args40863 = [];
var len__26323__auto___40913 = arguments.length;
var i__26324__auto___40914 = (0);
while(true){
if((i__26324__auto___40914 < len__26323__auto___40913)){
args40863.push((arguments[i__26324__auto___40914]));

var G__40915 = (i__26324__auto___40914 + (1));
i__26324__auto___40914 = G__40915;
continue;
} else {
}
break;
}

var G__40865 = args40863.length;
switch (G__40865) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40863.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28419__auto___40917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28419__auto___40917){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (c__28419__auto___40917){
return (function (state_40889){
var state_val_40890 = (state_40889[(1)]);
if((state_val_40890 === (7))){
var inst_40885 = (state_40889[(2)]);
var state_40889__$1 = state_40889;
var statearr_40891_40918 = state_40889__$1;
(statearr_40891_40918[(2)] = inst_40885);

(statearr_40891_40918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40890 === (1))){
var state_40889__$1 = state_40889;
var statearr_40892_40919 = state_40889__$1;
(statearr_40892_40919[(2)] = null);

(statearr_40892_40919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40890 === (4))){
var inst_40868 = (state_40889[(7)]);
var inst_40868__$1 = (state_40889[(2)]);
var inst_40869 = (inst_40868__$1 == null);
var state_40889__$1 = (function (){var statearr_40893 = state_40889;
(statearr_40893[(7)] = inst_40868__$1);

return statearr_40893;
})();
if(cljs.core.truth_(inst_40869)){
var statearr_40894_40920 = state_40889__$1;
(statearr_40894_40920[(1)] = (5));

} else {
var statearr_40895_40921 = state_40889__$1;
(statearr_40895_40921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40890 === (13))){
var state_40889__$1 = state_40889;
var statearr_40896_40922 = state_40889__$1;
(statearr_40896_40922[(2)] = null);

(statearr_40896_40922[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40890 === (6))){
var inst_40868 = (state_40889[(7)]);
var state_40889__$1 = state_40889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40889__$1,(11),to,inst_40868);
} else {
if((state_val_40890 === (3))){
var inst_40887 = (state_40889[(2)]);
var state_40889__$1 = state_40889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40889__$1,inst_40887);
} else {
if((state_val_40890 === (12))){
var state_40889__$1 = state_40889;
var statearr_40897_40923 = state_40889__$1;
(statearr_40897_40923[(2)] = null);

(statearr_40897_40923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40890 === (2))){
var state_40889__$1 = state_40889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40889__$1,(4),from);
} else {
if((state_val_40890 === (11))){
var inst_40878 = (state_40889[(2)]);
var state_40889__$1 = state_40889;
if(cljs.core.truth_(inst_40878)){
var statearr_40898_40924 = state_40889__$1;
(statearr_40898_40924[(1)] = (12));

} else {
var statearr_40899_40925 = state_40889__$1;
(statearr_40899_40925[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40890 === (9))){
var state_40889__$1 = state_40889;
var statearr_40900_40926 = state_40889__$1;
(statearr_40900_40926[(2)] = null);

(statearr_40900_40926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40890 === (5))){
var state_40889__$1 = state_40889;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40901_40927 = state_40889__$1;
(statearr_40901_40927[(1)] = (8));

} else {
var statearr_40902_40928 = state_40889__$1;
(statearr_40902_40928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40890 === (14))){
var inst_40883 = (state_40889[(2)]);
var state_40889__$1 = state_40889;
var statearr_40903_40929 = state_40889__$1;
(statearr_40903_40929[(2)] = inst_40883);

(statearr_40903_40929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40890 === (10))){
var inst_40875 = (state_40889[(2)]);
var state_40889__$1 = state_40889;
var statearr_40904_40930 = state_40889__$1;
(statearr_40904_40930[(2)] = inst_40875);

(statearr_40904_40930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40890 === (8))){
var inst_40872 = cljs.core.async.close_BANG_.call(null,to);
var state_40889__$1 = state_40889;
var statearr_40905_40931 = state_40889__$1;
(statearr_40905_40931[(2)] = inst_40872);

(statearr_40905_40931[(1)] = (10));


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
});})(c__28419__auto___40917))
;
return ((function (switch__28354__auto__,c__28419__auto___40917){
return (function() {
var cljs$core$async$state_machine__28355__auto__ = null;
var cljs$core$async$state_machine__28355__auto____0 = (function (){
var statearr_40909 = [null,null,null,null,null,null,null,null];
(statearr_40909[(0)] = cljs$core$async$state_machine__28355__auto__);

(statearr_40909[(1)] = (1));

return statearr_40909;
});
var cljs$core$async$state_machine__28355__auto____1 = (function (state_40889){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_40889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e40910){if((e40910 instanceof Object)){
var ex__28358__auto__ = e40910;
var statearr_40911_40932 = state_40889;
(statearr_40911_40932[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40933 = state_40889;
state_40889 = G__40933;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
cljs$core$async$state_machine__28355__auto__ = function(state_40889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28355__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28355__auto____1.call(this,state_40889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28355__auto____0;
cljs$core$async$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28355__auto____1;
return cljs$core$async$state_machine__28355__auto__;
})()
;})(switch__28354__auto__,c__28419__auto___40917))
})();
var state__28421__auto__ = (function (){var statearr_40912 = f__28420__auto__.call(null);
(statearr_40912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto___40917);

return statearr_40912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(c__28419__auto___40917))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__41117){
var vec__41118 = p__41117;
var v = cljs.core.nth.call(null,vec__41118,(0),null);
var p = cljs.core.nth.call(null,vec__41118,(1),null);
var job = vec__41118;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28419__auto___41300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28419__auto___41300,res,vec__41118,v,p,job,jobs,results){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (c__28419__auto___41300,res,vec__41118,v,p,job,jobs,results){
return (function (state_41123){
var state_val_41124 = (state_41123[(1)]);
if((state_val_41124 === (1))){
var state_41123__$1 = state_41123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41123__$1,(2),res,v);
} else {
if((state_val_41124 === (2))){
var inst_41120 = (state_41123[(2)]);
var inst_41121 = cljs.core.async.close_BANG_.call(null,res);
var state_41123__$1 = (function (){var statearr_41125 = state_41123;
(statearr_41125[(7)] = inst_41120);

return statearr_41125;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41123__$1,inst_41121);
} else {
return null;
}
}
});})(c__28419__auto___41300,res,vec__41118,v,p,job,jobs,results))
;
return ((function (switch__28354__auto__,c__28419__auto___41300,res,vec__41118,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____0 = (function (){
var statearr_41129 = [null,null,null,null,null,null,null,null];
(statearr_41129[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__);

(statearr_41129[(1)] = (1));

return statearr_41129;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____1 = (function (state_41123){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_41123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e41130){if((e41130 instanceof Object)){
var ex__28358__auto__ = e41130;
var statearr_41131_41301 = state_41123;
(statearr_41131_41301[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41302 = state_41123;
state_41123 = G__41302;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__ = function(state_41123){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____1.call(this,state_41123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__;
})()
;})(switch__28354__auto__,c__28419__auto___41300,res,vec__41118,v,p,job,jobs,results))
})();
var state__28421__auto__ = (function (){var statearr_41132 = f__28420__auto__.call(null);
(statearr_41132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto___41300);

return statearr_41132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(c__28419__auto___41300,res,vec__41118,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__41133){
var vec__41134 = p__41133;
var v = cljs.core.nth.call(null,vec__41134,(0),null);
var p = cljs.core.nth.call(null,vec__41134,(1),null);
var job = vec__41134;
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
var n__26168__auto___41303 = n;
var __41304 = (0);
while(true){
if((__41304 < n__26168__auto___41303)){
var G__41135_41305 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__41135_41305) {
case "compute":
var c__28419__auto___41307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41304,c__28419__auto___41307,G__41135_41305,n__26168__auto___41303,jobs,results,process,async){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (__41304,c__28419__auto___41307,G__41135_41305,n__26168__auto___41303,jobs,results,process,async){
return (function (state_41148){
var state_val_41149 = (state_41148[(1)]);
if((state_val_41149 === (1))){
var state_41148__$1 = state_41148;
var statearr_41150_41308 = state_41148__$1;
(statearr_41150_41308[(2)] = null);

(statearr_41150_41308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41149 === (2))){
var state_41148__$1 = state_41148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41148__$1,(4),jobs);
} else {
if((state_val_41149 === (3))){
var inst_41146 = (state_41148[(2)]);
var state_41148__$1 = state_41148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41148__$1,inst_41146);
} else {
if((state_val_41149 === (4))){
var inst_41138 = (state_41148[(2)]);
var inst_41139 = process.call(null,inst_41138);
var state_41148__$1 = state_41148;
if(cljs.core.truth_(inst_41139)){
var statearr_41151_41309 = state_41148__$1;
(statearr_41151_41309[(1)] = (5));

} else {
var statearr_41152_41310 = state_41148__$1;
(statearr_41152_41310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41149 === (5))){
var state_41148__$1 = state_41148;
var statearr_41153_41311 = state_41148__$1;
(statearr_41153_41311[(2)] = null);

(statearr_41153_41311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41149 === (6))){
var state_41148__$1 = state_41148;
var statearr_41154_41312 = state_41148__$1;
(statearr_41154_41312[(2)] = null);

(statearr_41154_41312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41149 === (7))){
var inst_41144 = (state_41148[(2)]);
var state_41148__$1 = state_41148;
var statearr_41155_41313 = state_41148__$1;
(statearr_41155_41313[(2)] = inst_41144);

(statearr_41155_41313[(1)] = (3));


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
});})(__41304,c__28419__auto___41307,G__41135_41305,n__26168__auto___41303,jobs,results,process,async))
;
return ((function (__41304,switch__28354__auto__,c__28419__auto___41307,G__41135_41305,n__26168__auto___41303,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____0 = (function (){
var statearr_41159 = [null,null,null,null,null,null,null];
(statearr_41159[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__);

(statearr_41159[(1)] = (1));

return statearr_41159;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____1 = (function (state_41148){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_41148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e41160){if((e41160 instanceof Object)){
var ex__28358__auto__ = e41160;
var statearr_41161_41314 = state_41148;
(statearr_41161_41314[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41315 = state_41148;
state_41148 = G__41315;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__ = function(state_41148){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____1.call(this,state_41148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__;
})()
;})(__41304,switch__28354__auto__,c__28419__auto___41307,G__41135_41305,n__26168__auto___41303,jobs,results,process,async))
})();
var state__28421__auto__ = (function (){var statearr_41162 = f__28420__auto__.call(null);
(statearr_41162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto___41307);

return statearr_41162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(__41304,c__28419__auto___41307,G__41135_41305,n__26168__auto___41303,jobs,results,process,async))
);


break;
case "async":
var c__28419__auto___41316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41304,c__28419__auto___41316,G__41135_41305,n__26168__auto___41303,jobs,results,process,async){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (__41304,c__28419__auto___41316,G__41135_41305,n__26168__auto___41303,jobs,results,process,async){
return (function (state_41175){
var state_val_41176 = (state_41175[(1)]);
if((state_val_41176 === (1))){
var state_41175__$1 = state_41175;
var statearr_41177_41317 = state_41175__$1;
(statearr_41177_41317[(2)] = null);

(statearr_41177_41317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41176 === (2))){
var state_41175__$1 = state_41175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41175__$1,(4),jobs);
} else {
if((state_val_41176 === (3))){
var inst_41173 = (state_41175[(2)]);
var state_41175__$1 = state_41175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41175__$1,inst_41173);
} else {
if((state_val_41176 === (4))){
var inst_41165 = (state_41175[(2)]);
var inst_41166 = async.call(null,inst_41165);
var state_41175__$1 = state_41175;
if(cljs.core.truth_(inst_41166)){
var statearr_41178_41318 = state_41175__$1;
(statearr_41178_41318[(1)] = (5));

} else {
var statearr_41179_41319 = state_41175__$1;
(statearr_41179_41319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41176 === (5))){
var state_41175__$1 = state_41175;
var statearr_41180_41320 = state_41175__$1;
(statearr_41180_41320[(2)] = null);

(statearr_41180_41320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41176 === (6))){
var state_41175__$1 = state_41175;
var statearr_41181_41321 = state_41175__$1;
(statearr_41181_41321[(2)] = null);

(statearr_41181_41321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41176 === (7))){
var inst_41171 = (state_41175[(2)]);
var state_41175__$1 = state_41175;
var statearr_41182_41322 = state_41175__$1;
(statearr_41182_41322[(2)] = inst_41171);

(statearr_41182_41322[(1)] = (3));


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
});})(__41304,c__28419__auto___41316,G__41135_41305,n__26168__auto___41303,jobs,results,process,async))
;
return ((function (__41304,switch__28354__auto__,c__28419__auto___41316,G__41135_41305,n__26168__auto___41303,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____0 = (function (){
var statearr_41186 = [null,null,null,null,null,null,null];
(statearr_41186[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__);

(statearr_41186[(1)] = (1));

return statearr_41186;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____1 = (function (state_41175){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_41175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e41187){if((e41187 instanceof Object)){
var ex__28358__auto__ = e41187;
var statearr_41188_41323 = state_41175;
(statearr_41188_41323[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41324 = state_41175;
state_41175 = G__41324;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__ = function(state_41175){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____1.call(this,state_41175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__;
})()
;})(__41304,switch__28354__auto__,c__28419__auto___41316,G__41135_41305,n__26168__auto___41303,jobs,results,process,async))
})();
var state__28421__auto__ = (function (){var statearr_41189 = f__28420__auto__.call(null);
(statearr_41189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto___41316);

return statearr_41189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(__41304,c__28419__auto___41316,G__41135_41305,n__26168__auto___41303,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__41325 = (__41304 + (1));
__41304 = G__41325;
continue;
} else {
}
break;
}

var c__28419__auto___41326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28419__auto___41326,jobs,results,process,async){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (c__28419__auto___41326,jobs,results,process,async){
return (function (state_41211){
var state_val_41212 = (state_41211[(1)]);
if((state_val_41212 === (1))){
var state_41211__$1 = state_41211;
var statearr_41213_41327 = state_41211__$1;
(statearr_41213_41327[(2)] = null);

(statearr_41213_41327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41212 === (2))){
var state_41211__$1 = state_41211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41211__$1,(4),from);
} else {
if((state_val_41212 === (3))){
var inst_41209 = (state_41211[(2)]);
var state_41211__$1 = state_41211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41211__$1,inst_41209);
} else {
if((state_val_41212 === (4))){
var inst_41192 = (state_41211[(7)]);
var inst_41192__$1 = (state_41211[(2)]);
var inst_41193 = (inst_41192__$1 == null);
var state_41211__$1 = (function (){var statearr_41214 = state_41211;
(statearr_41214[(7)] = inst_41192__$1);

return statearr_41214;
})();
if(cljs.core.truth_(inst_41193)){
var statearr_41215_41328 = state_41211__$1;
(statearr_41215_41328[(1)] = (5));

} else {
var statearr_41216_41329 = state_41211__$1;
(statearr_41216_41329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41212 === (5))){
var inst_41195 = cljs.core.async.close_BANG_.call(null,jobs);
var state_41211__$1 = state_41211;
var statearr_41217_41330 = state_41211__$1;
(statearr_41217_41330[(2)] = inst_41195);

(statearr_41217_41330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41212 === (6))){
var inst_41197 = (state_41211[(8)]);
var inst_41192 = (state_41211[(7)]);
var inst_41197__$1 = cljs.core.async.chan.call(null,(1));
var inst_41198 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41199 = [inst_41192,inst_41197__$1];
var inst_41200 = (new cljs.core.PersistentVector(null,2,(5),inst_41198,inst_41199,null));
var state_41211__$1 = (function (){var statearr_41218 = state_41211;
(statearr_41218[(8)] = inst_41197__$1);

return statearr_41218;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41211__$1,(8),jobs,inst_41200);
} else {
if((state_val_41212 === (7))){
var inst_41207 = (state_41211[(2)]);
var state_41211__$1 = state_41211;
var statearr_41219_41331 = state_41211__$1;
(statearr_41219_41331[(2)] = inst_41207);

(statearr_41219_41331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41212 === (8))){
var inst_41197 = (state_41211[(8)]);
var inst_41202 = (state_41211[(2)]);
var state_41211__$1 = (function (){var statearr_41220 = state_41211;
(statearr_41220[(9)] = inst_41202);

return statearr_41220;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41211__$1,(9),results,inst_41197);
} else {
if((state_val_41212 === (9))){
var inst_41204 = (state_41211[(2)]);
var state_41211__$1 = (function (){var statearr_41221 = state_41211;
(statearr_41221[(10)] = inst_41204);

return statearr_41221;
})();
var statearr_41222_41332 = state_41211__$1;
(statearr_41222_41332[(2)] = null);

(statearr_41222_41332[(1)] = (2));


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
});})(c__28419__auto___41326,jobs,results,process,async))
;
return ((function (switch__28354__auto__,c__28419__auto___41326,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____0 = (function (){
var statearr_41226 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41226[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__);

(statearr_41226[(1)] = (1));

return statearr_41226;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____1 = (function (state_41211){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_41211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e41227){if((e41227 instanceof Object)){
var ex__28358__auto__ = e41227;
var statearr_41228_41333 = state_41211;
(statearr_41228_41333[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41334 = state_41211;
state_41211 = G__41334;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__ = function(state_41211){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____1.call(this,state_41211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__;
})()
;})(switch__28354__auto__,c__28419__auto___41326,jobs,results,process,async))
})();
var state__28421__auto__ = (function (){var statearr_41229 = f__28420__auto__.call(null);
(statearr_41229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto___41326);

return statearr_41229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(c__28419__auto___41326,jobs,results,process,async))
);


var c__28419__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28419__auto__,jobs,results,process,async){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (c__28419__auto__,jobs,results,process,async){
return (function (state_41267){
var state_val_41268 = (state_41267[(1)]);
if((state_val_41268 === (7))){
var inst_41263 = (state_41267[(2)]);
var state_41267__$1 = state_41267;
var statearr_41269_41335 = state_41267__$1;
(statearr_41269_41335[(2)] = inst_41263);

(statearr_41269_41335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41268 === (20))){
var state_41267__$1 = state_41267;
var statearr_41270_41336 = state_41267__$1;
(statearr_41270_41336[(2)] = null);

(statearr_41270_41336[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41268 === (1))){
var state_41267__$1 = state_41267;
var statearr_41271_41337 = state_41267__$1;
(statearr_41271_41337[(2)] = null);

(statearr_41271_41337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41268 === (4))){
var inst_41232 = (state_41267[(7)]);
var inst_41232__$1 = (state_41267[(2)]);
var inst_41233 = (inst_41232__$1 == null);
var state_41267__$1 = (function (){var statearr_41272 = state_41267;
(statearr_41272[(7)] = inst_41232__$1);

return statearr_41272;
})();
if(cljs.core.truth_(inst_41233)){
var statearr_41273_41338 = state_41267__$1;
(statearr_41273_41338[(1)] = (5));

} else {
var statearr_41274_41339 = state_41267__$1;
(statearr_41274_41339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41268 === (15))){
var inst_41245 = (state_41267[(8)]);
var state_41267__$1 = state_41267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41267__$1,(18),to,inst_41245);
} else {
if((state_val_41268 === (21))){
var inst_41258 = (state_41267[(2)]);
var state_41267__$1 = state_41267;
var statearr_41275_41340 = state_41267__$1;
(statearr_41275_41340[(2)] = inst_41258);

(statearr_41275_41340[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41268 === (13))){
var inst_41260 = (state_41267[(2)]);
var state_41267__$1 = (function (){var statearr_41276 = state_41267;
(statearr_41276[(9)] = inst_41260);

return statearr_41276;
})();
var statearr_41277_41341 = state_41267__$1;
(statearr_41277_41341[(2)] = null);

(statearr_41277_41341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41268 === (6))){
var inst_41232 = (state_41267[(7)]);
var state_41267__$1 = state_41267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41267__$1,(11),inst_41232);
} else {
if((state_val_41268 === (17))){
var inst_41253 = (state_41267[(2)]);
var state_41267__$1 = state_41267;
if(cljs.core.truth_(inst_41253)){
var statearr_41278_41342 = state_41267__$1;
(statearr_41278_41342[(1)] = (19));

} else {
var statearr_41279_41343 = state_41267__$1;
(statearr_41279_41343[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41268 === (3))){
var inst_41265 = (state_41267[(2)]);
var state_41267__$1 = state_41267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41267__$1,inst_41265);
} else {
if((state_val_41268 === (12))){
var inst_41242 = (state_41267[(10)]);
var state_41267__$1 = state_41267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41267__$1,(14),inst_41242);
} else {
if((state_val_41268 === (2))){
var state_41267__$1 = state_41267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41267__$1,(4),results);
} else {
if((state_val_41268 === (19))){
var state_41267__$1 = state_41267;
var statearr_41280_41344 = state_41267__$1;
(statearr_41280_41344[(2)] = null);

(statearr_41280_41344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41268 === (11))){
var inst_41242 = (state_41267[(2)]);
var state_41267__$1 = (function (){var statearr_41281 = state_41267;
(statearr_41281[(10)] = inst_41242);

return statearr_41281;
})();
var statearr_41282_41345 = state_41267__$1;
(statearr_41282_41345[(2)] = null);

(statearr_41282_41345[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41268 === (9))){
var state_41267__$1 = state_41267;
var statearr_41283_41346 = state_41267__$1;
(statearr_41283_41346[(2)] = null);

(statearr_41283_41346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41268 === (5))){
var state_41267__$1 = state_41267;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41284_41347 = state_41267__$1;
(statearr_41284_41347[(1)] = (8));

} else {
var statearr_41285_41348 = state_41267__$1;
(statearr_41285_41348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41268 === (14))){
var inst_41247 = (state_41267[(11)]);
var inst_41245 = (state_41267[(8)]);
var inst_41245__$1 = (state_41267[(2)]);
var inst_41246 = (inst_41245__$1 == null);
var inst_41247__$1 = cljs.core.not.call(null,inst_41246);
var state_41267__$1 = (function (){var statearr_41286 = state_41267;
(statearr_41286[(11)] = inst_41247__$1);

(statearr_41286[(8)] = inst_41245__$1);

return statearr_41286;
})();
if(inst_41247__$1){
var statearr_41287_41349 = state_41267__$1;
(statearr_41287_41349[(1)] = (15));

} else {
var statearr_41288_41350 = state_41267__$1;
(statearr_41288_41350[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41268 === (16))){
var inst_41247 = (state_41267[(11)]);
var state_41267__$1 = state_41267;
var statearr_41289_41351 = state_41267__$1;
(statearr_41289_41351[(2)] = inst_41247);

(statearr_41289_41351[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41268 === (10))){
var inst_41239 = (state_41267[(2)]);
var state_41267__$1 = state_41267;
var statearr_41290_41352 = state_41267__$1;
(statearr_41290_41352[(2)] = inst_41239);

(statearr_41290_41352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41268 === (18))){
var inst_41250 = (state_41267[(2)]);
var state_41267__$1 = state_41267;
var statearr_41291_41353 = state_41267__$1;
(statearr_41291_41353[(2)] = inst_41250);

(statearr_41291_41353[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41268 === (8))){
var inst_41236 = cljs.core.async.close_BANG_.call(null,to);
var state_41267__$1 = state_41267;
var statearr_41292_41354 = state_41267__$1;
(statearr_41292_41354[(2)] = inst_41236);

(statearr_41292_41354[(1)] = (10));


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
});})(c__28419__auto__,jobs,results,process,async))
;
return ((function (switch__28354__auto__,c__28419__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____0 = (function (){
var statearr_41296 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41296[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__);

(statearr_41296[(1)] = (1));

return statearr_41296;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____1 = (function (state_41267){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_41267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e41297){if((e41297 instanceof Object)){
var ex__28358__auto__ = e41297;
var statearr_41298_41355 = state_41267;
(statearr_41298_41355[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41356 = state_41267;
state_41267 = G__41356;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__ = function(state_41267){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____1.call(this,state_41267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28355__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28355__auto__;
})()
;})(switch__28354__auto__,c__28419__auto__,jobs,results,process,async))
})();
var state__28421__auto__ = (function (){var statearr_41299 = f__28420__auto__.call(null);
(statearr_41299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto__);

return statearr_41299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(c__28419__auto__,jobs,results,process,async))
);

return c__28419__auto__;
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
var args41357 = [];
var len__26323__auto___41360 = arguments.length;
var i__26324__auto___41361 = (0);
while(true){
if((i__26324__auto___41361 < len__26323__auto___41360)){
args41357.push((arguments[i__26324__auto___41361]));

var G__41362 = (i__26324__auto___41361 + (1));
i__26324__auto___41361 = G__41362;
continue;
} else {
}
break;
}

var G__41359 = args41357.length;
switch (G__41359) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41357.length)].join('')));

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
var args41364 = [];
var len__26323__auto___41367 = arguments.length;
var i__26324__auto___41368 = (0);
while(true){
if((i__26324__auto___41368 < len__26323__auto___41367)){
args41364.push((arguments[i__26324__auto___41368]));

var G__41369 = (i__26324__auto___41368 + (1));
i__26324__auto___41368 = G__41369;
continue;
} else {
}
break;
}

var G__41366 = args41364.length;
switch (G__41366) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41364.length)].join('')));

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
var args41371 = [];
var len__26323__auto___41424 = arguments.length;
var i__26324__auto___41425 = (0);
while(true){
if((i__26324__auto___41425 < len__26323__auto___41424)){
args41371.push((arguments[i__26324__auto___41425]));

var G__41426 = (i__26324__auto___41425 + (1));
i__26324__auto___41425 = G__41426;
continue;
} else {
}
break;
}

var G__41373 = args41371.length;
switch (G__41373) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41371.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28419__auto___41428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28419__auto___41428,tc,fc){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (c__28419__auto___41428,tc,fc){
return (function (state_41399){
var state_val_41400 = (state_41399[(1)]);
if((state_val_41400 === (7))){
var inst_41395 = (state_41399[(2)]);
var state_41399__$1 = state_41399;
var statearr_41401_41429 = state_41399__$1;
(statearr_41401_41429[(2)] = inst_41395);

(statearr_41401_41429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41400 === (1))){
var state_41399__$1 = state_41399;
var statearr_41402_41430 = state_41399__$1;
(statearr_41402_41430[(2)] = null);

(statearr_41402_41430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41400 === (4))){
var inst_41376 = (state_41399[(7)]);
var inst_41376__$1 = (state_41399[(2)]);
var inst_41377 = (inst_41376__$1 == null);
var state_41399__$1 = (function (){var statearr_41403 = state_41399;
(statearr_41403[(7)] = inst_41376__$1);

return statearr_41403;
})();
if(cljs.core.truth_(inst_41377)){
var statearr_41404_41431 = state_41399__$1;
(statearr_41404_41431[(1)] = (5));

} else {
var statearr_41405_41432 = state_41399__$1;
(statearr_41405_41432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41400 === (13))){
var state_41399__$1 = state_41399;
var statearr_41406_41433 = state_41399__$1;
(statearr_41406_41433[(2)] = null);

(statearr_41406_41433[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41400 === (6))){
var inst_41376 = (state_41399[(7)]);
var inst_41382 = p.call(null,inst_41376);
var state_41399__$1 = state_41399;
if(cljs.core.truth_(inst_41382)){
var statearr_41407_41434 = state_41399__$1;
(statearr_41407_41434[(1)] = (9));

} else {
var statearr_41408_41435 = state_41399__$1;
(statearr_41408_41435[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41400 === (3))){
var inst_41397 = (state_41399[(2)]);
var state_41399__$1 = state_41399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41399__$1,inst_41397);
} else {
if((state_val_41400 === (12))){
var state_41399__$1 = state_41399;
var statearr_41409_41436 = state_41399__$1;
(statearr_41409_41436[(2)] = null);

(statearr_41409_41436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41400 === (2))){
var state_41399__$1 = state_41399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41399__$1,(4),ch);
} else {
if((state_val_41400 === (11))){
var inst_41376 = (state_41399[(7)]);
var inst_41386 = (state_41399[(2)]);
var state_41399__$1 = state_41399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41399__$1,(8),inst_41386,inst_41376);
} else {
if((state_val_41400 === (9))){
var state_41399__$1 = state_41399;
var statearr_41410_41437 = state_41399__$1;
(statearr_41410_41437[(2)] = tc);

(statearr_41410_41437[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41400 === (5))){
var inst_41379 = cljs.core.async.close_BANG_.call(null,tc);
var inst_41380 = cljs.core.async.close_BANG_.call(null,fc);
var state_41399__$1 = (function (){var statearr_41411 = state_41399;
(statearr_41411[(8)] = inst_41379);

return statearr_41411;
})();
var statearr_41412_41438 = state_41399__$1;
(statearr_41412_41438[(2)] = inst_41380);

(statearr_41412_41438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41400 === (14))){
var inst_41393 = (state_41399[(2)]);
var state_41399__$1 = state_41399;
var statearr_41413_41439 = state_41399__$1;
(statearr_41413_41439[(2)] = inst_41393);

(statearr_41413_41439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41400 === (10))){
var state_41399__$1 = state_41399;
var statearr_41414_41440 = state_41399__$1;
(statearr_41414_41440[(2)] = fc);

(statearr_41414_41440[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41400 === (8))){
var inst_41388 = (state_41399[(2)]);
var state_41399__$1 = state_41399;
if(cljs.core.truth_(inst_41388)){
var statearr_41415_41441 = state_41399__$1;
(statearr_41415_41441[(1)] = (12));

} else {
var statearr_41416_41442 = state_41399__$1;
(statearr_41416_41442[(1)] = (13));

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
});})(c__28419__auto___41428,tc,fc))
;
return ((function (switch__28354__auto__,c__28419__auto___41428,tc,fc){
return (function() {
var cljs$core$async$state_machine__28355__auto__ = null;
var cljs$core$async$state_machine__28355__auto____0 = (function (){
var statearr_41420 = [null,null,null,null,null,null,null,null,null];
(statearr_41420[(0)] = cljs$core$async$state_machine__28355__auto__);

(statearr_41420[(1)] = (1));

return statearr_41420;
});
var cljs$core$async$state_machine__28355__auto____1 = (function (state_41399){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_41399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e41421){if((e41421 instanceof Object)){
var ex__28358__auto__ = e41421;
var statearr_41422_41443 = state_41399;
(statearr_41422_41443[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41444 = state_41399;
state_41399 = G__41444;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
cljs$core$async$state_machine__28355__auto__ = function(state_41399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28355__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28355__auto____1.call(this,state_41399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28355__auto____0;
cljs$core$async$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28355__auto____1;
return cljs$core$async$state_machine__28355__auto__;
})()
;})(switch__28354__auto__,c__28419__auto___41428,tc,fc))
})();
var state__28421__auto__ = (function (){var statearr_41423 = f__28420__auto__.call(null);
(statearr_41423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto___41428);

return statearr_41423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(c__28419__auto___41428,tc,fc))
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
var c__28419__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28419__auto__){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (c__28419__auto__){
return (function (state_41508){
var state_val_41509 = (state_41508[(1)]);
if((state_val_41509 === (7))){
var inst_41504 = (state_41508[(2)]);
var state_41508__$1 = state_41508;
var statearr_41510_41531 = state_41508__$1;
(statearr_41510_41531[(2)] = inst_41504);

(statearr_41510_41531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41509 === (1))){
var inst_41488 = init;
var state_41508__$1 = (function (){var statearr_41511 = state_41508;
(statearr_41511[(7)] = inst_41488);

return statearr_41511;
})();
var statearr_41512_41532 = state_41508__$1;
(statearr_41512_41532[(2)] = null);

(statearr_41512_41532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41509 === (4))){
var inst_41491 = (state_41508[(8)]);
var inst_41491__$1 = (state_41508[(2)]);
var inst_41492 = (inst_41491__$1 == null);
var state_41508__$1 = (function (){var statearr_41513 = state_41508;
(statearr_41513[(8)] = inst_41491__$1);

return statearr_41513;
})();
if(cljs.core.truth_(inst_41492)){
var statearr_41514_41533 = state_41508__$1;
(statearr_41514_41533[(1)] = (5));

} else {
var statearr_41515_41534 = state_41508__$1;
(statearr_41515_41534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41509 === (6))){
var inst_41488 = (state_41508[(7)]);
var inst_41495 = (state_41508[(9)]);
var inst_41491 = (state_41508[(8)]);
var inst_41495__$1 = f.call(null,inst_41488,inst_41491);
var inst_41496 = cljs.core.reduced_QMARK_.call(null,inst_41495__$1);
var state_41508__$1 = (function (){var statearr_41516 = state_41508;
(statearr_41516[(9)] = inst_41495__$1);

return statearr_41516;
})();
if(inst_41496){
var statearr_41517_41535 = state_41508__$1;
(statearr_41517_41535[(1)] = (8));

} else {
var statearr_41518_41536 = state_41508__$1;
(statearr_41518_41536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41509 === (3))){
var inst_41506 = (state_41508[(2)]);
var state_41508__$1 = state_41508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41508__$1,inst_41506);
} else {
if((state_val_41509 === (2))){
var state_41508__$1 = state_41508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41508__$1,(4),ch);
} else {
if((state_val_41509 === (9))){
var inst_41495 = (state_41508[(9)]);
var inst_41488 = inst_41495;
var state_41508__$1 = (function (){var statearr_41519 = state_41508;
(statearr_41519[(7)] = inst_41488);

return statearr_41519;
})();
var statearr_41520_41537 = state_41508__$1;
(statearr_41520_41537[(2)] = null);

(statearr_41520_41537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41509 === (5))){
var inst_41488 = (state_41508[(7)]);
var state_41508__$1 = state_41508;
var statearr_41521_41538 = state_41508__$1;
(statearr_41521_41538[(2)] = inst_41488);

(statearr_41521_41538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41509 === (10))){
var inst_41502 = (state_41508[(2)]);
var state_41508__$1 = state_41508;
var statearr_41522_41539 = state_41508__$1;
(statearr_41522_41539[(2)] = inst_41502);

(statearr_41522_41539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41509 === (8))){
var inst_41495 = (state_41508[(9)]);
var inst_41498 = cljs.core.deref.call(null,inst_41495);
var state_41508__$1 = state_41508;
var statearr_41523_41540 = state_41508__$1;
(statearr_41523_41540[(2)] = inst_41498);

(statearr_41523_41540[(1)] = (10));


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
});})(c__28419__auto__))
;
return ((function (switch__28354__auto__,c__28419__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28355__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28355__auto____0 = (function (){
var statearr_41527 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41527[(0)] = cljs$core$async$reduce_$_state_machine__28355__auto__);

(statearr_41527[(1)] = (1));

return statearr_41527;
});
var cljs$core$async$reduce_$_state_machine__28355__auto____1 = (function (state_41508){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_41508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e41528){if((e41528 instanceof Object)){
var ex__28358__auto__ = e41528;
var statearr_41529_41541 = state_41508;
(statearr_41529_41541[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41542 = state_41508;
state_41508 = G__41542;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28355__auto__ = function(state_41508){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28355__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28355__auto____1.call(this,state_41508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28355__auto____0;
cljs$core$async$reduce_$_state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28355__auto____1;
return cljs$core$async$reduce_$_state_machine__28355__auto__;
})()
;})(switch__28354__auto__,c__28419__auto__))
})();
var state__28421__auto__ = (function (){var statearr_41530 = f__28420__auto__.call(null);
(statearr_41530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto__);

return statearr_41530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(c__28419__auto__))
);

return c__28419__auto__;
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
var args41543 = [];
var len__26323__auto___41595 = arguments.length;
var i__26324__auto___41596 = (0);
while(true){
if((i__26324__auto___41596 < len__26323__auto___41595)){
args41543.push((arguments[i__26324__auto___41596]));

var G__41597 = (i__26324__auto___41596 + (1));
i__26324__auto___41596 = G__41597;
continue;
} else {
}
break;
}

var G__41545 = args41543.length;
switch (G__41545) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41543.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28419__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28419__auto__){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (c__28419__auto__){
return (function (state_41570){
var state_val_41571 = (state_41570[(1)]);
if((state_val_41571 === (7))){
var inst_41552 = (state_41570[(2)]);
var state_41570__$1 = state_41570;
var statearr_41572_41599 = state_41570__$1;
(statearr_41572_41599[(2)] = inst_41552);

(statearr_41572_41599[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (1))){
var inst_41546 = cljs.core.seq.call(null,coll);
var inst_41547 = inst_41546;
var state_41570__$1 = (function (){var statearr_41573 = state_41570;
(statearr_41573[(7)] = inst_41547);

return statearr_41573;
})();
var statearr_41574_41600 = state_41570__$1;
(statearr_41574_41600[(2)] = null);

(statearr_41574_41600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (4))){
var inst_41547 = (state_41570[(7)]);
var inst_41550 = cljs.core.first.call(null,inst_41547);
var state_41570__$1 = state_41570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41570__$1,(7),ch,inst_41550);
} else {
if((state_val_41571 === (13))){
var inst_41564 = (state_41570[(2)]);
var state_41570__$1 = state_41570;
var statearr_41575_41601 = state_41570__$1;
(statearr_41575_41601[(2)] = inst_41564);

(statearr_41575_41601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (6))){
var inst_41555 = (state_41570[(2)]);
var state_41570__$1 = state_41570;
if(cljs.core.truth_(inst_41555)){
var statearr_41576_41602 = state_41570__$1;
(statearr_41576_41602[(1)] = (8));

} else {
var statearr_41577_41603 = state_41570__$1;
(statearr_41577_41603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (3))){
var inst_41568 = (state_41570[(2)]);
var state_41570__$1 = state_41570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41570__$1,inst_41568);
} else {
if((state_val_41571 === (12))){
var state_41570__$1 = state_41570;
var statearr_41578_41604 = state_41570__$1;
(statearr_41578_41604[(2)] = null);

(statearr_41578_41604[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (2))){
var inst_41547 = (state_41570[(7)]);
var state_41570__$1 = state_41570;
if(cljs.core.truth_(inst_41547)){
var statearr_41579_41605 = state_41570__$1;
(statearr_41579_41605[(1)] = (4));

} else {
var statearr_41580_41606 = state_41570__$1;
(statearr_41580_41606[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (11))){
var inst_41561 = cljs.core.async.close_BANG_.call(null,ch);
var state_41570__$1 = state_41570;
var statearr_41581_41607 = state_41570__$1;
(statearr_41581_41607[(2)] = inst_41561);

(statearr_41581_41607[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (9))){
var state_41570__$1 = state_41570;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41582_41608 = state_41570__$1;
(statearr_41582_41608[(1)] = (11));

} else {
var statearr_41583_41609 = state_41570__$1;
(statearr_41583_41609[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (5))){
var inst_41547 = (state_41570[(7)]);
var state_41570__$1 = state_41570;
var statearr_41584_41610 = state_41570__$1;
(statearr_41584_41610[(2)] = inst_41547);

(statearr_41584_41610[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (10))){
var inst_41566 = (state_41570[(2)]);
var state_41570__$1 = state_41570;
var statearr_41585_41611 = state_41570__$1;
(statearr_41585_41611[(2)] = inst_41566);

(statearr_41585_41611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (8))){
var inst_41547 = (state_41570[(7)]);
var inst_41557 = cljs.core.next.call(null,inst_41547);
var inst_41547__$1 = inst_41557;
var state_41570__$1 = (function (){var statearr_41586 = state_41570;
(statearr_41586[(7)] = inst_41547__$1);

return statearr_41586;
})();
var statearr_41587_41612 = state_41570__$1;
(statearr_41587_41612[(2)] = null);

(statearr_41587_41612[(1)] = (2));


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
});})(c__28419__auto__))
;
return ((function (switch__28354__auto__,c__28419__auto__){
return (function() {
var cljs$core$async$state_machine__28355__auto__ = null;
var cljs$core$async$state_machine__28355__auto____0 = (function (){
var statearr_41591 = [null,null,null,null,null,null,null,null];
(statearr_41591[(0)] = cljs$core$async$state_machine__28355__auto__);

(statearr_41591[(1)] = (1));

return statearr_41591;
});
var cljs$core$async$state_machine__28355__auto____1 = (function (state_41570){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_41570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e41592){if((e41592 instanceof Object)){
var ex__28358__auto__ = e41592;
var statearr_41593_41613 = state_41570;
(statearr_41593_41613[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41614 = state_41570;
state_41570 = G__41614;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
cljs$core$async$state_machine__28355__auto__ = function(state_41570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28355__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28355__auto____1.call(this,state_41570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28355__auto____0;
cljs$core$async$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28355__auto____1;
return cljs$core$async$state_machine__28355__auto__;
})()
;})(switch__28354__auto__,c__28419__auto__))
})();
var state__28421__auto__ = (function (){var statearr_41594 = f__28420__auto__.call(null);
(statearr_41594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto__);

return statearr_41594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(c__28419__auto__))
);

return c__28419__auto__;
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
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25920__auto__ = (((_ == null))?null:_);
var m__25921__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25920__auto__)]);
if(!((m__25921__auto__ == null))){
return m__25921__auto__.call(null,_);
} else {
var m__25921__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25921__auto____$1 == null))){
return m__25921__auto____$1.call(null,_);
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
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25920__auto__ = (((m == null))?null:m);
var m__25921__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25920__auto__)]);
if(!((m__25921__auto__ == null))){
return m__25921__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25921__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25921__auto____$1 == null))){
return m__25921__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25920__auto__ = (((m == null))?null:m);
var m__25921__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25920__auto__)]);
if(!((m__25921__auto__ == null))){
return m__25921__auto__.call(null,m,ch);
} else {
var m__25921__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25921__auto____$1 == null))){
return m__25921__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25920__auto__ = (((m == null))?null:m);
var m__25921__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25920__auto__)]);
if(!((m__25921__auto__ == null))){
return m__25921__auto__.call(null,m);
} else {
var m__25921__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25921__auto____$1 == null))){
return m__25921__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async41836 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41836 = (function (mult,ch,cs,meta41837){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta41837 = meta41837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41838,meta41837__$1){
var self__ = this;
var _41838__$1 = this;
return (new cljs.core.async.t_cljs$core$async41836(self__.mult,self__.ch,self__.cs,meta41837__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async41836.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41838){
var self__ = this;
var _41838__$1 = this;
return self__.meta41837;
});})(cs))
;

cljs.core.async.t_cljs$core$async41836.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async41836.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async41836.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async41836.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41836.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41836.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41836.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41837","meta41837",-1387913041,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async41836.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41836";

cljs.core.async.t_cljs$core$async41836.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25863__auto__,writer__25864__auto__,opt__25865__auto__){
return cljs.core._write.call(null,writer__25864__auto__,"cljs.core.async/t_cljs$core$async41836");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async41836 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async41836(mult__$1,ch__$1,cs__$1,meta41837){
return (new cljs.core.async.t_cljs$core$async41836(mult__$1,ch__$1,cs__$1,meta41837));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async41836(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28419__auto___42057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28419__auto___42057,cs,m,dchan,dctr,done){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (c__28419__auto___42057,cs,m,dchan,dctr,done){
return (function (state_41969){
var state_val_41970 = (state_41969[(1)]);
if((state_val_41970 === (7))){
var inst_41965 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
var statearr_41971_42058 = state_41969__$1;
(statearr_41971_42058[(2)] = inst_41965);

(statearr_41971_42058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (20))){
var inst_41870 = (state_41969[(7)]);
var inst_41880 = cljs.core.first.call(null,inst_41870);
var inst_41881 = cljs.core.nth.call(null,inst_41880,(0),null);
var inst_41882 = cljs.core.nth.call(null,inst_41880,(1),null);
var state_41969__$1 = (function (){var statearr_41972 = state_41969;
(statearr_41972[(8)] = inst_41881);

return statearr_41972;
})();
if(cljs.core.truth_(inst_41882)){
var statearr_41973_42059 = state_41969__$1;
(statearr_41973_42059[(1)] = (22));

} else {
var statearr_41974_42060 = state_41969__$1;
(statearr_41974_42060[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (27))){
var inst_41841 = (state_41969[(9)]);
var inst_41917 = (state_41969[(10)]);
var inst_41912 = (state_41969[(11)]);
var inst_41910 = (state_41969[(12)]);
var inst_41917__$1 = cljs.core._nth.call(null,inst_41910,inst_41912);
var inst_41918 = cljs.core.async.put_BANG_.call(null,inst_41917__$1,inst_41841,done);
var state_41969__$1 = (function (){var statearr_41975 = state_41969;
(statearr_41975[(10)] = inst_41917__$1);

return statearr_41975;
})();
if(cljs.core.truth_(inst_41918)){
var statearr_41976_42061 = state_41969__$1;
(statearr_41976_42061[(1)] = (30));

} else {
var statearr_41977_42062 = state_41969__$1;
(statearr_41977_42062[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (1))){
var state_41969__$1 = state_41969;
var statearr_41978_42063 = state_41969__$1;
(statearr_41978_42063[(2)] = null);

(statearr_41978_42063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (24))){
var inst_41870 = (state_41969[(7)]);
var inst_41887 = (state_41969[(2)]);
var inst_41888 = cljs.core.next.call(null,inst_41870);
var inst_41850 = inst_41888;
var inst_41851 = null;
var inst_41852 = (0);
var inst_41853 = (0);
var state_41969__$1 = (function (){var statearr_41979 = state_41969;
(statearr_41979[(13)] = inst_41853);

(statearr_41979[(14)] = inst_41852);

(statearr_41979[(15)] = inst_41887);

(statearr_41979[(16)] = inst_41851);

(statearr_41979[(17)] = inst_41850);

return statearr_41979;
})();
var statearr_41980_42064 = state_41969__$1;
(statearr_41980_42064[(2)] = null);

(statearr_41980_42064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (39))){
var state_41969__$1 = state_41969;
var statearr_41984_42065 = state_41969__$1;
(statearr_41984_42065[(2)] = null);

(statearr_41984_42065[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (4))){
var inst_41841 = (state_41969[(9)]);
var inst_41841__$1 = (state_41969[(2)]);
var inst_41842 = (inst_41841__$1 == null);
var state_41969__$1 = (function (){var statearr_41985 = state_41969;
(statearr_41985[(9)] = inst_41841__$1);

return statearr_41985;
})();
if(cljs.core.truth_(inst_41842)){
var statearr_41986_42066 = state_41969__$1;
(statearr_41986_42066[(1)] = (5));

} else {
var statearr_41987_42067 = state_41969__$1;
(statearr_41987_42067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (15))){
var inst_41853 = (state_41969[(13)]);
var inst_41852 = (state_41969[(14)]);
var inst_41851 = (state_41969[(16)]);
var inst_41850 = (state_41969[(17)]);
var inst_41866 = (state_41969[(2)]);
var inst_41867 = (inst_41853 + (1));
var tmp41981 = inst_41852;
var tmp41982 = inst_41851;
var tmp41983 = inst_41850;
var inst_41850__$1 = tmp41983;
var inst_41851__$1 = tmp41982;
var inst_41852__$1 = tmp41981;
var inst_41853__$1 = inst_41867;
var state_41969__$1 = (function (){var statearr_41988 = state_41969;
(statearr_41988[(18)] = inst_41866);

(statearr_41988[(13)] = inst_41853__$1);

(statearr_41988[(14)] = inst_41852__$1);

(statearr_41988[(16)] = inst_41851__$1);

(statearr_41988[(17)] = inst_41850__$1);

return statearr_41988;
})();
var statearr_41989_42068 = state_41969__$1;
(statearr_41989_42068[(2)] = null);

(statearr_41989_42068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (21))){
var inst_41891 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
var statearr_41993_42069 = state_41969__$1;
(statearr_41993_42069[(2)] = inst_41891);

(statearr_41993_42069[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (31))){
var inst_41917 = (state_41969[(10)]);
var inst_41921 = done.call(null,null);
var inst_41922 = cljs.core.async.untap_STAR_.call(null,m,inst_41917);
var state_41969__$1 = (function (){var statearr_41994 = state_41969;
(statearr_41994[(19)] = inst_41921);

return statearr_41994;
})();
var statearr_41995_42070 = state_41969__$1;
(statearr_41995_42070[(2)] = inst_41922);

(statearr_41995_42070[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (32))){
var inst_41909 = (state_41969[(20)]);
var inst_41911 = (state_41969[(21)]);
var inst_41912 = (state_41969[(11)]);
var inst_41910 = (state_41969[(12)]);
var inst_41924 = (state_41969[(2)]);
var inst_41925 = (inst_41912 + (1));
var tmp41990 = inst_41909;
var tmp41991 = inst_41911;
var tmp41992 = inst_41910;
var inst_41909__$1 = tmp41990;
var inst_41910__$1 = tmp41992;
var inst_41911__$1 = tmp41991;
var inst_41912__$1 = inst_41925;
var state_41969__$1 = (function (){var statearr_41996 = state_41969;
(statearr_41996[(20)] = inst_41909__$1);

(statearr_41996[(21)] = inst_41911__$1);

(statearr_41996[(22)] = inst_41924);

(statearr_41996[(11)] = inst_41912__$1);

(statearr_41996[(12)] = inst_41910__$1);

return statearr_41996;
})();
var statearr_41997_42071 = state_41969__$1;
(statearr_41997_42071[(2)] = null);

(statearr_41997_42071[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (40))){
var inst_41937 = (state_41969[(23)]);
var inst_41941 = done.call(null,null);
var inst_41942 = cljs.core.async.untap_STAR_.call(null,m,inst_41937);
var state_41969__$1 = (function (){var statearr_41998 = state_41969;
(statearr_41998[(24)] = inst_41941);

return statearr_41998;
})();
var statearr_41999_42072 = state_41969__$1;
(statearr_41999_42072[(2)] = inst_41942);

(statearr_41999_42072[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (33))){
var inst_41928 = (state_41969[(25)]);
var inst_41930 = cljs.core.chunked_seq_QMARK_.call(null,inst_41928);
var state_41969__$1 = state_41969;
if(inst_41930){
var statearr_42000_42073 = state_41969__$1;
(statearr_42000_42073[(1)] = (36));

} else {
var statearr_42001_42074 = state_41969__$1;
(statearr_42001_42074[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (13))){
var inst_41860 = (state_41969[(26)]);
var inst_41863 = cljs.core.async.close_BANG_.call(null,inst_41860);
var state_41969__$1 = state_41969;
var statearr_42002_42075 = state_41969__$1;
(statearr_42002_42075[(2)] = inst_41863);

(statearr_42002_42075[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (22))){
var inst_41881 = (state_41969[(8)]);
var inst_41884 = cljs.core.async.close_BANG_.call(null,inst_41881);
var state_41969__$1 = state_41969;
var statearr_42003_42076 = state_41969__$1;
(statearr_42003_42076[(2)] = inst_41884);

(statearr_42003_42076[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (36))){
var inst_41928 = (state_41969[(25)]);
var inst_41932 = cljs.core.chunk_first.call(null,inst_41928);
var inst_41933 = cljs.core.chunk_rest.call(null,inst_41928);
var inst_41934 = cljs.core.count.call(null,inst_41932);
var inst_41909 = inst_41933;
var inst_41910 = inst_41932;
var inst_41911 = inst_41934;
var inst_41912 = (0);
var state_41969__$1 = (function (){var statearr_42004 = state_41969;
(statearr_42004[(20)] = inst_41909);

(statearr_42004[(21)] = inst_41911);

(statearr_42004[(11)] = inst_41912);

(statearr_42004[(12)] = inst_41910);

return statearr_42004;
})();
var statearr_42005_42077 = state_41969__$1;
(statearr_42005_42077[(2)] = null);

(statearr_42005_42077[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (41))){
var inst_41928 = (state_41969[(25)]);
var inst_41944 = (state_41969[(2)]);
var inst_41945 = cljs.core.next.call(null,inst_41928);
var inst_41909 = inst_41945;
var inst_41910 = null;
var inst_41911 = (0);
var inst_41912 = (0);
var state_41969__$1 = (function (){var statearr_42006 = state_41969;
(statearr_42006[(20)] = inst_41909);

(statearr_42006[(21)] = inst_41911);

(statearr_42006[(27)] = inst_41944);

(statearr_42006[(11)] = inst_41912);

(statearr_42006[(12)] = inst_41910);

return statearr_42006;
})();
var statearr_42007_42078 = state_41969__$1;
(statearr_42007_42078[(2)] = null);

(statearr_42007_42078[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (43))){
var state_41969__$1 = state_41969;
var statearr_42008_42079 = state_41969__$1;
(statearr_42008_42079[(2)] = null);

(statearr_42008_42079[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (29))){
var inst_41953 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
var statearr_42009_42080 = state_41969__$1;
(statearr_42009_42080[(2)] = inst_41953);

(statearr_42009_42080[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (44))){
var inst_41962 = (state_41969[(2)]);
var state_41969__$1 = (function (){var statearr_42010 = state_41969;
(statearr_42010[(28)] = inst_41962);

return statearr_42010;
})();
var statearr_42011_42081 = state_41969__$1;
(statearr_42011_42081[(2)] = null);

(statearr_42011_42081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (6))){
var inst_41901 = (state_41969[(29)]);
var inst_41900 = cljs.core.deref.call(null,cs);
var inst_41901__$1 = cljs.core.keys.call(null,inst_41900);
var inst_41902 = cljs.core.count.call(null,inst_41901__$1);
var inst_41903 = cljs.core.reset_BANG_.call(null,dctr,inst_41902);
var inst_41908 = cljs.core.seq.call(null,inst_41901__$1);
var inst_41909 = inst_41908;
var inst_41910 = null;
var inst_41911 = (0);
var inst_41912 = (0);
var state_41969__$1 = (function (){var statearr_42012 = state_41969;
(statearr_42012[(20)] = inst_41909);

(statearr_42012[(29)] = inst_41901__$1);

(statearr_42012[(30)] = inst_41903);

(statearr_42012[(21)] = inst_41911);

(statearr_42012[(11)] = inst_41912);

(statearr_42012[(12)] = inst_41910);

return statearr_42012;
})();
var statearr_42013_42082 = state_41969__$1;
(statearr_42013_42082[(2)] = null);

(statearr_42013_42082[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (28))){
var inst_41909 = (state_41969[(20)]);
var inst_41928 = (state_41969[(25)]);
var inst_41928__$1 = cljs.core.seq.call(null,inst_41909);
var state_41969__$1 = (function (){var statearr_42014 = state_41969;
(statearr_42014[(25)] = inst_41928__$1);

return statearr_42014;
})();
if(inst_41928__$1){
var statearr_42015_42083 = state_41969__$1;
(statearr_42015_42083[(1)] = (33));

} else {
var statearr_42016_42084 = state_41969__$1;
(statearr_42016_42084[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (25))){
var inst_41911 = (state_41969[(21)]);
var inst_41912 = (state_41969[(11)]);
var inst_41914 = (inst_41912 < inst_41911);
var inst_41915 = inst_41914;
var state_41969__$1 = state_41969;
if(cljs.core.truth_(inst_41915)){
var statearr_42017_42085 = state_41969__$1;
(statearr_42017_42085[(1)] = (27));

} else {
var statearr_42018_42086 = state_41969__$1;
(statearr_42018_42086[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (34))){
var state_41969__$1 = state_41969;
var statearr_42019_42087 = state_41969__$1;
(statearr_42019_42087[(2)] = null);

(statearr_42019_42087[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (17))){
var state_41969__$1 = state_41969;
var statearr_42020_42088 = state_41969__$1;
(statearr_42020_42088[(2)] = null);

(statearr_42020_42088[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (3))){
var inst_41967 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41969__$1,inst_41967);
} else {
if((state_val_41970 === (12))){
var inst_41896 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
var statearr_42021_42089 = state_41969__$1;
(statearr_42021_42089[(2)] = inst_41896);

(statearr_42021_42089[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (2))){
var state_41969__$1 = state_41969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41969__$1,(4),ch);
} else {
if((state_val_41970 === (23))){
var state_41969__$1 = state_41969;
var statearr_42022_42090 = state_41969__$1;
(statearr_42022_42090[(2)] = null);

(statearr_42022_42090[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (35))){
var inst_41951 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
var statearr_42023_42091 = state_41969__$1;
(statearr_42023_42091[(2)] = inst_41951);

(statearr_42023_42091[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (19))){
var inst_41870 = (state_41969[(7)]);
var inst_41874 = cljs.core.chunk_first.call(null,inst_41870);
var inst_41875 = cljs.core.chunk_rest.call(null,inst_41870);
var inst_41876 = cljs.core.count.call(null,inst_41874);
var inst_41850 = inst_41875;
var inst_41851 = inst_41874;
var inst_41852 = inst_41876;
var inst_41853 = (0);
var state_41969__$1 = (function (){var statearr_42024 = state_41969;
(statearr_42024[(13)] = inst_41853);

(statearr_42024[(14)] = inst_41852);

(statearr_42024[(16)] = inst_41851);

(statearr_42024[(17)] = inst_41850);

return statearr_42024;
})();
var statearr_42025_42092 = state_41969__$1;
(statearr_42025_42092[(2)] = null);

(statearr_42025_42092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (11))){
var inst_41870 = (state_41969[(7)]);
var inst_41850 = (state_41969[(17)]);
var inst_41870__$1 = cljs.core.seq.call(null,inst_41850);
var state_41969__$1 = (function (){var statearr_42026 = state_41969;
(statearr_42026[(7)] = inst_41870__$1);

return statearr_42026;
})();
if(inst_41870__$1){
var statearr_42027_42093 = state_41969__$1;
(statearr_42027_42093[(1)] = (16));

} else {
var statearr_42028_42094 = state_41969__$1;
(statearr_42028_42094[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (9))){
var inst_41898 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
var statearr_42029_42095 = state_41969__$1;
(statearr_42029_42095[(2)] = inst_41898);

(statearr_42029_42095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (5))){
var inst_41848 = cljs.core.deref.call(null,cs);
var inst_41849 = cljs.core.seq.call(null,inst_41848);
var inst_41850 = inst_41849;
var inst_41851 = null;
var inst_41852 = (0);
var inst_41853 = (0);
var state_41969__$1 = (function (){var statearr_42030 = state_41969;
(statearr_42030[(13)] = inst_41853);

(statearr_42030[(14)] = inst_41852);

(statearr_42030[(16)] = inst_41851);

(statearr_42030[(17)] = inst_41850);

return statearr_42030;
})();
var statearr_42031_42096 = state_41969__$1;
(statearr_42031_42096[(2)] = null);

(statearr_42031_42096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (14))){
var state_41969__$1 = state_41969;
var statearr_42032_42097 = state_41969__$1;
(statearr_42032_42097[(2)] = null);

(statearr_42032_42097[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (45))){
var inst_41959 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
var statearr_42033_42098 = state_41969__$1;
(statearr_42033_42098[(2)] = inst_41959);

(statearr_42033_42098[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (26))){
var inst_41901 = (state_41969[(29)]);
var inst_41955 = (state_41969[(2)]);
var inst_41956 = cljs.core.seq.call(null,inst_41901);
var state_41969__$1 = (function (){var statearr_42034 = state_41969;
(statearr_42034[(31)] = inst_41955);

return statearr_42034;
})();
if(inst_41956){
var statearr_42035_42099 = state_41969__$1;
(statearr_42035_42099[(1)] = (42));

} else {
var statearr_42036_42100 = state_41969__$1;
(statearr_42036_42100[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (16))){
var inst_41870 = (state_41969[(7)]);
var inst_41872 = cljs.core.chunked_seq_QMARK_.call(null,inst_41870);
var state_41969__$1 = state_41969;
if(inst_41872){
var statearr_42037_42101 = state_41969__$1;
(statearr_42037_42101[(1)] = (19));

} else {
var statearr_42038_42102 = state_41969__$1;
(statearr_42038_42102[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (38))){
var inst_41948 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
var statearr_42039_42103 = state_41969__$1;
(statearr_42039_42103[(2)] = inst_41948);

(statearr_42039_42103[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (30))){
var state_41969__$1 = state_41969;
var statearr_42040_42104 = state_41969__$1;
(statearr_42040_42104[(2)] = null);

(statearr_42040_42104[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (10))){
var inst_41853 = (state_41969[(13)]);
var inst_41851 = (state_41969[(16)]);
var inst_41859 = cljs.core._nth.call(null,inst_41851,inst_41853);
var inst_41860 = cljs.core.nth.call(null,inst_41859,(0),null);
var inst_41861 = cljs.core.nth.call(null,inst_41859,(1),null);
var state_41969__$1 = (function (){var statearr_42041 = state_41969;
(statearr_42041[(26)] = inst_41860);

return statearr_42041;
})();
if(cljs.core.truth_(inst_41861)){
var statearr_42042_42105 = state_41969__$1;
(statearr_42042_42105[(1)] = (13));

} else {
var statearr_42043_42106 = state_41969__$1;
(statearr_42043_42106[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (18))){
var inst_41894 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
var statearr_42044_42107 = state_41969__$1;
(statearr_42044_42107[(2)] = inst_41894);

(statearr_42044_42107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (42))){
var state_41969__$1 = state_41969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41969__$1,(45),dchan);
} else {
if((state_val_41970 === (37))){
var inst_41841 = (state_41969[(9)]);
var inst_41937 = (state_41969[(23)]);
var inst_41928 = (state_41969[(25)]);
var inst_41937__$1 = cljs.core.first.call(null,inst_41928);
var inst_41938 = cljs.core.async.put_BANG_.call(null,inst_41937__$1,inst_41841,done);
var state_41969__$1 = (function (){var statearr_42045 = state_41969;
(statearr_42045[(23)] = inst_41937__$1);

return statearr_42045;
})();
if(cljs.core.truth_(inst_41938)){
var statearr_42046_42108 = state_41969__$1;
(statearr_42046_42108[(1)] = (39));

} else {
var statearr_42047_42109 = state_41969__$1;
(statearr_42047_42109[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (8))){
var inst_41853 = (state_41969[(13)]);
var inst_41852 = (state_41969[(14)]);
var inst_41855 = (inst_41853 < inst_41852);
var inst_41856 = inst_41855;
var state_41969__$1 = state_41969;
if(cljs.core.truth_(inst_41856)){
var statearr_42048_42110 = state_41969__$1;
(statearr_42048_42110[(1)] = (10));

} else {
var statearr_42049_42111 = state_41969__$1;
(statearr_42049_42111[(1)] = (11));

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
});})(c__28419__auto___42057,cs,m,dchan,dctr,done))
;
return ((function (switch__28354__auto__,c__28419__auto___42057,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28355__auto__ = null;
var cljs$core$async$mult_$_state_machine__28355__auto____0 = (function (){
var statearr_42053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42053[(0)] = cljs$core$async$mult_$_state_machine__28355__auto__);

(statearr_42053[(1)] = (1));

return statearr_42053;
});
var cljs$core$async$mult_$_state_machine__28355__auto____1 = (function (state_41969){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_41969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e42054){if((e42054 instanceof Object)){
var ex__28358__auto__ = e42054;
var statearr_42055_42112 = state_41969;
(statearr_42055_42112[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42113 = state_41969;
state_41969 = G__42113;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28355__auto__ = function(state_41969){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28355__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28355__auto____1.call(this,state_41969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28355__auto____0;
cljs$core$async$mult_$_state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28355__auto____1;
return cljs$core$async$mult_$_state_machine__28355__auto__;
})()
;})(switch__28354__auto__,c__28419__auto___42057,cs,m,dchan,dctr,done))
})();
var state__28421__auto__ = (function (){var statearr_42056 = f__28420__auto__.call(null);
(statearr_42056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto___42057);

return statearr_42056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(c__28419__auto___42057,cs,m,dchan,dctr,done))
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
var args42114 = [];
var len__26323__auto___42117 = arguments.length;
var i__26324__auto___42118 = (0);
while(true){
if((i__26324__auto___42118 < len__26323__auto___42117)){
args42114.push((arguments[i__26324__auto___42118]));

var G__42119 = (i__26324__auto___42118 + (1));
i__26324__auto___42118 = G__42119;
continue;
} else {
}
break;
}

var G__42116 = args42114.length;
switch (G__42116) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42114.length)].join('')));

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
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25920__auto__ = (((m == null))?null:m);
var m__25921__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25920__auto__)]);
if(!((m__25921__auto__ == null))){
return m__25921__auto__.call(null,m,ch);
} else {
var m__25921__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25921__auto____$1 == null))){
return m__25921__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25920__auto__ = (((m == null))?null:m);
var m__25921__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25920__auto__)]);
if(!((m__25921__auto__ == null))){
return m__25921__auto__.call(null,m,ch);
} else {
var m__25921__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25921__auto____$1 == null))){
return m__25921__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25920__auto__ = (((m == null))?null:m);
var m__25921__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25920__auto__)]);
if(!((m__25921__auto__ == null))){
return m__25921__auto__.call(null,m);
} else {
var m__25921__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25921__auto____$1 == null))){
return m__25921__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25920__auto__ = (((m == null))?null:m);
var m__25921__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25920__auto__)]);
if(!((m__25921__auto__ == null))){
return m__25921__auto__.call(null,m,state_map);
} else {
var m__25921__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25921__auto____$1 == null))){
return m__25921__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25920__auto__ = (((m == null))?null:m);
var m__25921__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25920__auto__)]);
if(!((m__25921__auto__ == null))){
return m__25921__auto__.call(null,m,mode);
} else {
var m__25921__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25921__auto____$1 == null))){
return m__25921__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26330__auto__ = [];
var len__26323__auto___42131 = arguments.length;
var i__26324__auto___42132 = (0);
while(true){
if((i__26324__auto___42132 < len__26323__auto___42131)){
args__26330__auto__.push((arguments[i__26324__auto___42132]));

var G__42133 = (i__26324__auto___42132 + (1));
i__26324__auto___42132 = G__42133;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((3) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26331__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42125){
var map__42126 = p__42125;
var map__42126__$1 = ((((!((map__42126 == null)))?((((map__42126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42126):map__42126);
var opts = map__42126__$1;
var statearr_42128_42134 = state;
(statearr_42128_42134[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__42126,map__42126__$1,opts){
return (function (val){
var statearr_42129_42135 = state;
(statearr_42129_42135[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__42126,map__42126__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_42130_42136 = state;
(statearr_42130_42136[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42121){
var G__42122 = cljs.core.first.call(null,seq42121);
var seq42121__$1 = cljs.core.next.call(null,seq42121);
var G__42123 = cljs.core.first.call(null,seq42121__$1);
var seq42121__$2 = cljs.core.next.call(null,seq42121__$1);
var G__42124 = cljs.core.first.call(null,seq42121__$2);
var seq42121__$3 = cljs.core.next.call(null,seq42121__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42122,G__42123,G__42124,seq42121__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async42300 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42300 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42301){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta42301 = meta42301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42302,meta42301__$1){
var self__ = this;
var _42302__$1 = this;
return (new cljs.core.async.t_cljs$core$async42300(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42301__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42300.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42302){
var self__ = this;
var _42302__$1 = this;
return self__.meta42301;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42300.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42300.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42300.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async42300.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42300.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42300.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42300.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42300.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42300.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta42301","meta42301",-1015369756,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42300.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42300.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42300";

cljs.core.async.t_cljs$core$async42300.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25863__auto__,writer__25864__auto__,opt__25865__auto__){
return cljs.core._write.call(null,writer__25864__auto__,"cljs.core.async/t_cljs$core$async42300");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async42300 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async42300(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42301){
return (new cljs.core.async.t_cljs$core$async42300(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42301));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async42300(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28419__auto___42463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28419__auto___42463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (c__28419__auto___42463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42400){
var state_val_42401 = (state_42400[(1)]);
if((state_val_42401 === (7))){
var inst_42318 = (state_42400[(2)]);
var state_42400__$1 = state_42400;
var statearr_42402_42464 = state_42400__$1;
(statearr_42402_42464[(2)] = inst_42318);

(statearr_42402_42464[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (20))){
var inst_42330 = (state_42400[(7)]);
var state_42400__$1 = state_42400;
var statearr_42403_42465 = state_42400__$1;
(statearr_42403_42465[(2)] = inst_42330);

(statearr_42403_42465[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (27))){
var state_42400__$1 = state_42400;
var statearr_42404_42466 = state_42400__$1;
(statearr_42404_42466[(2)] = null);

(statearr_42404_42466[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (1))){
var inst_42306 = (state_42400[(8)]);
var inst_42306__$1 = calc_state.call(null);
var inst_42308 = (inst_42306__$1 == null);
var inst_42309 = cljs.core.not.call(null,inst_42308);
var state_42400__$1 = (function (){var statearr_42405 = state_42400;
(statearr_42405[(8)] = inst_42306__$1);

return statearr_42405;
})();
if(inst_42309){
var statearr_42406_42467 = state_42400__$1;
(statearr_42406_42467[(1)] = (2));

} else {
var statearr_42407_42468 = state_42400__$1;
(statearr_42407_42468[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (24))){
var inst_42360 = (state_42400[(9)]);
var inst_42374 = (state_42400[(10)]);
var inst_42353 = (state_42400[(11)]);
var inst_42374__$1 = inst_42353.call(null,inst_42360);
var state_42400__$1 = (function (){var statearr_42408 = state_42400;
(statearr_42408[(10)] = inst_42374__$1);

return statearr_42408;
})();
if(cljs.core.truth_(inst_42374__$1)){
var statearr_42409_42469 = state_42400__$1;
(statearr_42409_42469[(1)] = (29));

} else {
var statearr_42410_42470 = state_42400__$1;
(statearr_42410_42470[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (4))){
var inst_42321 = (state_42400[(2)]);
var state_42400__$1 = state_42400;
if(cljs.core.truth_(inst_42321)){
var statearr_42411_42471 = state_42400__$1;
(statearr_42411_42471[(1)] = (8));

} else {
var statearr_42412_42472 = state_42400__$1;
(statearr_42412_42472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (15))){
var inst_42347 = (state_42400[(2)]);
var state_42400__$1 = state_42400;
if(cljs.core.truth_(inst_42347)){
var statearr_42413_42473 = state_42400__$1;
(statearr_42413_42473[(1)] = (19));

} else {
var statearr_42414_42474 = state_42400__$1;
(statearr_42414_42474[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (21))){
var inst_42352 = (state_42400[(12)]);
var inst_42352__$1 = (state_42400[(2)]);
var inst_42353 = cljs.core.get.call(null,inst_42352__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42354 = cljs.core.get.call(null,inst_42352__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42355 = cljs.core.get.call(null,inst_42352__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42400__$1 = (function (){var statearr_42415 = state_42400;
(statearr_42415[(13)] = inst_42354);

(statearr_42415[(12)] = inst_42352__$1);

(statearr_42415[(11)] = inst_42353);

return statearr_42415;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_42400__$1,(22),inst_42355);
} else {
if((state_val_42401 === (31))){
var inst_42382 = (state_42400[(2)]);
var state_42400__$1 = state_42400;
if(cljs.core.truth_(inst_42382)){
var statearr_42416_42475 = state_42400__$1;
(statearr_42416_42475[(1)] = (32));

} else {
var statearr_42417_42476 = state_42400__$1;
(statearr_42417_42476[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (32))){
var inst_42359 = (state_42400[(14)]);
var state_42400__$1 = state_42400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42400__$1,(35),out,inst_42359);
} else {
if((state_val_42401 === (33))){
var inst_42352 = (state_42400[(12)]);
var inst_42330 = inst_42352;
var state_42400__$1 = (function (){var statearr_42418 = state_42400;
(statearr_42418[(7)] = inst_42330);

return statearr_42418;
})();
var statearr_42419_42477 = state_42400__$1;
(statearr_42419_42477[(2)] = null);

(statearr_42419_42477[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (13))){
var inst_42330 = (state_42400[(7)]);
var inst_42337 = inst_42330.cljs$lang$protocol_mask$partition0$;
var inst_42338 = (inst_42337 & (64));
var inst_42339 = inst_42330.cljs$core$ISeq$;
var inst_42340 = (inst_42338) || (inst_42339);
var state_42400__$1 = state_42400;
if(cljs.core.truth_(inst_42340)){
var statearr_42420_42478 = state_42400__$1;
(statearr_42420_42478[(1)] = (16));

} else {
var statearr_42421_42479 = state_42400__$1;
(statearr_42421_42479[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (22))){
var inst_42359 = (state_42400[(14)]);
var inst_42360 = (state_42400[(9)]);
var inst_42358 = (state_42400[(2)]);
var inst_42359__$1 = cljs.core.nth.call(null,inst_42358,(0),null);
var inst_42360__$1 = cljs.core.nth.call(null,inst_42358,(1),null);
var inst_42361 = (inst_42359__$1 == null);
var inst_42362 = cljs.core._EQ_.call(null,inst_42360__$1,change);
var inst_42363 = (inst_42361) || (inst_42362);
var state_42400__$1 = (function (){var statearr_42422 = state_42400;
(statearr_42422[(14)] = inst_42359__$1);

(statearr_42422[(9)] = inst_42360__$1);

return statearr_42422;
})();
if(cljs.core.truth_(inst_42363)){
var statearr_42423_42480 = state_42400__$1;
(statearr_42423_42480[(1)] = (23));

} else {
var statearr_42424_42481 = state_42400__$1;
(statearr_42424_42481[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (36))){
var inst_42352 = (state_42400[(12)]);
var inst_42330 = inst_42352;
var state_42400__$1 = (function (){var statearr_42425 = state_42400;
(statearr_42425[(7)] = inst_42330);

return statearr_42425;
})();
var statearr_42426_42482 = state_42400__$1;
(statearr_42426_42482[(2)] = null);

(statearr_42426_42482[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (29))){
var inst_42374 = (state_42400[(10)]);
var state_42400__$1 = state_42400;
var statearr_42427_42483 = state_42400__$1;
(statearr_42427_42483[(2)] = inst_42374);

(statearr_42427_42483[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (6))){
var state_42400__$1 = state_42400;
var statearr_42428_42484 = state_42400__$1;
(statearr_42428_42484[(2)] = false);

(statearr_42428_42484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (28))){
var inst_42370 = (state_42400[(2)]);
var inst_42371 = calc_state.call(null);
var inst_42330 = inst_42371;
var state_42400__$1 = (function (){var statearr_42429 = state_42400;
(statearr_42429[(7)] = inst_42330);

(statearr_42429[(15)] = inst_42370);

return statearr_42429;
})();
var statearr_42430_42485 = state_42400__$1;
(statearr_42430_42485[(2)] = null);

(statearr_42430_42485[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (25))){
var inst_42396 = (state_42400[(2)]);
var state_42400__$1 = state_42400;
var statearr_42431_42486 = state_42400__$1;
(statearr_42431_42486[(2)] = inst_42396);

(statearr_42431_42486[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (34))){
var inst_42394 = (state_42400[(2)]);
var state_42400__$1 = state_42400;
var statearr_42432_42487 = state_42400__$1;
(statearr_42432_42487[(2)] = inst_42394);

(statearr_42432_42487[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (17))){
var state_42400__$1 = state_42400;
var statearr_42433_42488 = state_42400__$1;
(statearr_42433_42488[(2)] = false);

(statearr_42433_42488[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (3))){
var state_42400__$1 = state_42400;
var statearr_42434_42489 = state_42400__$1;
(statearr_42434_42489[(2)] = false);

(statearr_42434_42489[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (12))){
var inst_42398 = (state_42400[(2)]);
var state_42400__$1 = state_42400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42400__$1,inst_42398);
} else {
if((state_val_42401 === (2))){
var inst_42306 = (state_42400[(8)]);
var inst_42311 = inst_42306.cljs$lang$protocol_mask$partition0$;
var inst_42312 = (inst_42311 & (64));
var inst_42313 = inst_42306.cljs$core$ISeq$;
var inst_42314 = (inst_42312) || (inst_42313);
var state_42400__$1 = state_42400;
if(cljs.core.truth_(inst_42314)){
var statearr_42435_42490 = state_42400__$1;
(statearr_42435_42490[(1)] = (5));

} else {
var statearr_42436_42491 = state_42400__$1;
(statearr_42436_42491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (23))){
var inst_42359 = (state_42400[(14)]);
var inst_42365 = (inst_42359 == null);
var state_42400__$1 = state_42400;
if(cljs.core.truth_(inst_42365)){
var statearr_42437_42492 = state_42400__$1;
(statearr_42437_42492[(1)] = (26));

} else {
var statearr_42438_42493 = state_42400__$1;
(statearr_42438_42493[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (35))){
var inst_42385 = (state_42400[(2)]);
var state_42400__$1 = state_42400;
if(cljs.core.truth_(inst_42385)){
var statearr_42439_42494 = state_42400__$1;
(statearr_42439_42494[(1)] = (36));

} else {
var statearr_42440_42495 = state_42400__$1;
(statearr_42440_42495[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (19))){
var inst_42330 = (state_42400[(7)]);
var inst_42349 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42330);
var state_42400__$1 = state_42400;
var statearr_42441_42496 = state_42400__$1;
(statearr_42441_42496[(2)] = inst_42349);

(statearr_42441_42496[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (11))){
var inst_42330 = (state_42400[(7)]);
var inst_42334 = (inst_42330 == null);
var inst_42335 = cljs.core.not.call(null,inst_42334);
var state_42400__$1 = state_42400;
if(inst_42335){
var statearr_42442_42497 = state_42400__$1;
(statearr_42442_42497[(1)] = (13));

} else {
var statearr_42443_42498 = state_42400__$1;
(statearr_42443_42498[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (9))){
var inst_42306 = (state_42400[(8)]);
var state_42400__$1 = state_42400;
var statearr_42444_42499 = state_42400__$1;
(statearr_42444_42499[(2)] = inst_42306);

(statearr_42444_42499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (5))){
var state_42400__$1 = state_42400;
var statearr_42445_42500 = state_42400__$1;
(statearr_42445_42500[(2)] = true);

(statearr_42445_42500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (14))){
var state_42400__$1 = state_42400;
var statearr_42446_42501 = state_42400__$1;
(statearr_42446_42501[(2)] = false);

(statearr_42446_42501[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (26))){
var inst_42360 = (state_42400[(9)]);
var inst_42367 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42360);
var state_42400__$1 = state_42400;
var statearr_42447_42502 = state_42400__$1;
(statearr_42447_42502[(2)] = inst_42367);

(statearr_42447_42502[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (16))){
var state_42400__$1 = state_42400;
var statearr_42448_42503 = state_42400__$1;
(statearr_42448_42503[(2)] = true);

(statearr_42448_42503[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (38))){
var inst_42390 = (state_42400[(2)]);
var state_42400__$1 = state_42400;
var statearr_42449_42504 = state_42400__$1;
(statearr_42449_42504[(2)] = inst_42390);

(statearr_42449_42504[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (30))){
var inst_42354 = (state_42400[(13)]);
var inst_42360 = (state_42400[(9)]);
var inst_42353 = (state_42400[(11)]);
var inst_42377 = cljs.core.empty_QMARK_.call(null,inst_42353);
var inst_42378 = inst_42354.call(null,inst_42360);
var inst_42379 = cljs.core.not.call(null,inst_42378);
var inst_42380 = (inst_42377) && (inst_42379);
var state_42400__$1 = state_42400;
var statearr_42450_42505 = state_42400__$1;
(statearr_42450_42505[(2)] = inst_42380);

(statearr_42450_42505[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (10))){
var inst_42306 = (state_42400[(8)]);
var inst_42326 = (state_42400[(2)]);
var inst_42327 = cljs.core.get.call(null,inst_42326,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42328 = cljs.core.get.call(null,inst_42326,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42329 = cljs.core.get.call(null,inst_42326,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42330 = inst_42306;
var state_42400__$1 = (function (){var statearr_42451 = state_42400;
(statearr_42451[(16)] = inst_42328);

(statearr_42451[(7)] = inst_42330);

(statearr_42451[(17)] = inst_42327);

(statearr_42451[(18)] = inst_42329);

return statearr_42451;
})();
var statearr_42452_42506 = state_42400__$1;
(statearr_42452_42506[(2)] = null);

(statearr_42452_42506[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (18))){
var inst_42344 = (state_42400[(2)]);
var state_42400__$1 = state_42400;
var statearr_42453_42507 = state_42400__$1;
(statearr_42453_42507[(2)] = inst_42344);

(statearr_42453_42507[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (37))){
var state_42400__$1 = state_42400;
var statearr_42454_42508 = state_42400__$1;
(statearr_42454_42508[(2)] = null);

(statearr_42454_42508[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42401 === (8))){
var inst_42306 = (state_42400[(8)]);
var inst_42323 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42306);
var state_42400__$1 = state_42400;
var statearr_42455_42509 = state_42400__$1;
(statearr_42455_42509[(2)] = inst_42323);

(statearr_42455_42509[(1)] = (10));


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
});})(c__28419__auto___42463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28354__auto__,c__28419__auto___42463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28355__auto__ = null;
var cljs$core$async$mix_$_state_machine__28355__auto____0 = (function (){
var statearr_42459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42459[(0)] = cljs$core$async$mix_$_state_machine__28355__auto__);

(statearr_42459[(1)] = (1));

return statearr_42459;
});
var cljs$core$async$mix_$_state_machine__28355__auto____1 = (function (state_42400){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_42400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e42460){if((e42460 instanceof Object)){
var ex__28358__auto__ = e42460;
var statearr_42461_42510 = state_42400;
(statearr_42461_42510[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42511 = state_42400;
state_42400 = G__42511;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28355__auto__ = function(state_42400){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28355__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28355__auto____1.call(this,state_42400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28355__auto____0;
cljs$core$async$mix_$_state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28355__auto____1;
return cljs$core$async$mix_$_state_machine__28355__auto__;
})()
;})(switch__28354__auto__,c__28419__auto___42463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28421__auto__ = (function (){var statearr_42462 = f__28420__auto__.call(null);
(statearr_42462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto___42463);

return statearr_42462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(c__28419__auto___42463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25920__auto__ = (((p == null))?null:p);
var m__25921__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25920__auto__)]);
if(!((m__25921__auto__ == null))){
return m__25921__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25921__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25921__auto____$1 == null))){
return m__25921__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25920__auto__ = (((p == null))?null:p);
var m__25921__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25920__auto__)]);
if(!((m__25921__auto__ == null))){
return m__25921__auto__.call(null,p,v,ch);
} else {
var m__25921__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25921__auto____$1 == null))){
return m__25921__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args42512 = [];
var len__26323__auto___42515 = arguments.length;
var i__26324__auto___42516 = (0);
while(true){
if((i__26324__auto___42516 < len__26323__auto___42515)){
args42512.push((arguments[i__26324__auto___42516]));

var G__42517 = (i__26324__auto___42516 + (1));
i__26324__auto___42516 = G__42517;
continue;
} else {
}
break;
}

var G__42514 = args42512.length;
switch (G__42514) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42512.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25920__auto__ = (((p == null))?null:p);
var m__25921__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25920__auto__)]);
if(!((m__25921__auto__ == null))){
return m__25921__auto__.call(null,p);
} else {
var m__25921__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25921__auto____$1 == null))){
return m__25921__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25920__auto__ = (((p == null))?null:p);
var m__25921__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25920__auto__)]);
if(!((m__25921__auto__ == null))){
return m__25921__auto__.call(null,p,v);
} else {
var m__25921__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25921__auto____$1 == null))){
return m__25921__auto____$1.call(null,p,v);
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
var args42520 = [];
var len__26323__auto___42645 = arguments.length;
var i__26324__auto___42646 = (0);
while(true){
if((i__26324__auto___42646 < len__26323__auto___42645)){
args42520.push((arguments[i__26324__auto___42646]));

var G__42647 = (i__26324__auto___42646 + (1));
i__26324__auto___42646 = G__42647;
continue;
} else {
}
break;
}

var G__42522 = args42520.length;
switch (G__42522) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42520.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25265__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25265__auto__,mults){
return (function (p1__42519_SHARP_){
if(cljs.core.truth_(p1__42519_SHARP_.call(null,topic))){
return p1__42519_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__42519_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25265__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async42523 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42523 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42524){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42524 = meta42524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42525,meta42524__$1){
var self__ = this;
var _42525__$1 = this;
return (new cljs.core.async.t_cljs$core$async42523(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42524__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42523.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42525){
var self__ = this;
var _42525__$1 = this;
return self__.meta42524;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42523.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42523.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42523.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async42523.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42523.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42523.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42523.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42523.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42524","meta42524",1440868612,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42523.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42523";

cljs.core.async.t_cljs$core$async42523.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25863__auto__,writer__25864__auto__,opt__25865__auto__){
return cljs.core._write.call(null,writer__25864__auto__,"cljs.core.async/t_cljs$core$async42523");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async42523 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async42523(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42524){
return (new cljs.core.async.t_cljs$core$async42523(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42524));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async42523(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28419__auto___42649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28419__auto___42649,mults,ensure_mult,p){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (c__28419__auto___42649,mults,ensure_mult,p){
return (function (state_42597){
var state_val_42598 = (state_42597[(1)]);
if((state_val_42598 === (7))){
var inst_42593 = (state_42597[(2)]);
var state_42597__$1 = state_42597;
var statearr_42599_42650 = state_42597__$1;
(statearr_42599_42650[(2)] = inst_42593);

(statearr_42599_42650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42598 === (20))){
var state_42597__$1 = state_42597;
var statearr_42600_42651 = state_42597__$1;
(statearr_42600_42651[(2)] = null);

(statearr_42600_42651[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42598 === (1))){
var state_42597__$1 = state_42597;
var statearr_42601_42652 = state_42597__$1;
(statearr_42601_42652[(2)] = null);

(statearr_42601_42652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42598 === (24))){
var inst_42576 = (state_42597[(7)]);
var inst_42585 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_42576);
var state_42597__$1 = state_42597;
var statearr_42602_42653 = state_42597__$1;
(statearr_42602_42653[(2)] = inst_42585);

(statearr_42602_42653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42598 === (4))){
var inst_42528 = (state_42597[(8)]);
var inst_42528__$1 = (state_42597[(2)]);
var inst_42529 = (inst_42528__$1 == null);
var state_42597__$1 = (function (){var statearr_42603 = state_42597;
(statearr_42603[(8)] = inst_42528__$1);

return statearr_42603;
})();
if(cljs.core.truth_(inst_42529)){
var statearr_42604_42654 = state_42597__$1;
(statearr_42604_42654[(1)] = (5));

} else {
var statearr_42605_42655 = state_42597__$1;
(statearr_42605_42655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42598 === (15))){
var inst_42570 = (state_42597[(2)]);
var state_42597__$1 = state_42597;
var statearr_42606_42656 = state_42597__$1;
(statearr_42606_42656[(2)] = inst_42570);

(statearr_42606_42656[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42598 === (21))){
var inst_42590 = (state_42597[(2)]);
var state_42597__$1 = (function (){var statearr_42607 = state_42597;
(statearr_42607[(9)] = inst_42590);

return statearr_42607;
})();
var statearr_42608_42657 = state_42597__$1;
(statearr_42608_42657[(2)] = null);

(statearr_42608_42657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42598 === (13))){
var inst_42552 = (state_42597[(10)]);
var inst_42554 = cljs.core.chunked_seq_QMARK_.call(null,inst_42552);
var state_42597__$1 = state_42597;
if(inst_42554){
var statearr_42609_42658 = state_42597__$1;
(statearr_42609_42658[(1)] = (16));

} else {
var statearr_42610_42659 = state_42597__$1;
(statearr_42610_42659[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42598 === (22))){
var inst_42582 = (state_42597[(2)]);
var state_42597__$1 = state_42597;
if(cljs.core.truth_(inst_42582)){
var statearr_42611_42660 = state_42597__$1;
(statearr_42611_42660[(1)] = (23));

} else {
var statearr_42612_42661 = state_42597__$1;
(statearr_42612_42661[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42598 === (6))){
var inst_42528 = (state_42597[(8)]);
var inst_42578 = (state_42597[(11)]);
var inst_42576 = (state_42597[(7)]);
var inst_42576__$1 = topic_fn.call(null,inst_42528);
var inst_42577 = cljs.core.deref.call(null,mults);
var inst_42578__$1 = cljs.core.get.call(null,inst_42577,inst_42576__$1);
var state_42597__$1 = (function (){var statearr_42613 = state_42597;
(statearr_42613[(11)] = inst_42578__$1);

(statearr_42613[(7)] = inst_42576__$1);

return statearr_42613;
})();
if(cljs.core.truth_(inst_42578__$1)){
var statearr_42614_42662 = state_42597__$1;
(statearr_42614_42662[(1)] = (19));

} else {
var statearr_42615_42663 = state_42597__$1;
(statearr_42615_42663[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42598 === (25))){
var inst_42587 = (state_42597[(2)]);
var state_42597__$1 = state_42597;
var statearr_42616_42664 = state_42597__$1;
(statearr_42616_42664[(2)] = inst_42587);

(statearr_42616_42664[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42598 === (17))){
var inst_42552 = (state_42597[(10)]);
var inst_42561 = cljs.core.first.call(null,inst_42552);
var inst_42562 = cljs.core.async.muxch_STAR_.call(null,inst_42561);
var inst_42563 = cljs.core.async.close_BANG_.call(null,inst_42562);
var inst_42564 = cljs.core.next.call(null,inst_42552);
var inst_42538 = inst_42564;
var inst_42539 = null;
var inst_42540 = (0);
var inst_42541 = (0);
var state_42597__$1 = (function (){var statearr_42617 = state_42597;
(statearr_42617[(12)] = inst_42539);

(statearr_42617[(13)] = inst_42540);

(statearr_42617[(14)] = inst_42563);

(statearr_42617[(15)] = inst_42538);

(statearr_42617[(16)] = inst_42541);

return statearr_42617;
})();
var statearr_42618_42665 = state_42597__$1;
(statearr_42618_42665[(2)] = null);

(statearr_42618_42665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42598 === (3))){
var inst_42595 = (state_42597[(2)]);
var state_42597__$1 = state_42597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42597__$1,inst_42595);
} else {
if((state_val_42598 === (12))){
var inst_42572 = (state_42597[(2)]);
var state_42597__$1 = state_42597;
var statearr_42619_42666 = state_42597__$1;
(statearr_42619_42666[(2)] = inst_42572);

(statearr_42619_42666[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42598 === (2))){
var state_42597__$1 = state_42597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42597__$1,(4),ch);
} else {
if((state_val_42598 === (23))){
var state_42597__$1 = state_42597;
var statearr_42620_42667 = state_42597__$1;
(statearr_42620_42667[(2)] = null);

(statearr_42620_42667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42598 === (19))){
var inst_42528 = (state_42597[(8)]);
var inst_42578 = (state_42597[(11)]);
var inst_42580 = cljs.core.async.muxch_STAR_.call(null,inst_42578);
var state_42597__$1 = state_42597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42597__$1,(22),inst_42580,inst_42528);
} else {
if((state_val_42598 === (11))){
var inst_42538 = (state_42597[(15)]);
var inst_42552 = (state_42597[(10)]);
var inst_42552__$1 = cljs.core.seq.call(null,inst_42538);
var state_42597__$1 = (function (){var statearr_42621 = state_42597;
(statearr_42621[(10)] = inst_42552__$1);

return statearr_42621;
})();
if(inst_42552__$1){
var statearr_42622_42668 = state_42597__$1;
(statearr_42622_42668[(1)] = (13));

} else {
var statearr_42623_42669 = state_42597__$1;
(statearr_42623_42669[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42598 === (9))){
var inst_42574 = (state_42597[(2)]);
var state_42597__$1 = state_42597;
var statearr_42624_42670 = state_42597__$1;
(statearr_42624_42670[(2)] = inst_42574);

(statearr_42624_42670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42598 === (5))){
var inst_42535 = cljs.core.deref.call(null,mults);
var inst_42536 = cljs.core.vals.call(null,inst_42535);
var inst_42537 = cljs.core.seq.call(null,inst_42536);
var inst_42538 = inst_42537;
var inst_42539 = null;
var inst_42540 = (0);
var inst_42541 = (0);
var state_42597__$1 = (function (){var statearr_42625 = state_42597;
(statearr_42625[(12)] = inst_42539);

(statearr_42625[(13)] = inst_42540);

(statearr_42625[(15)] = inst_42538);

(statearr_42625[(16)] = inst_42541);

return statearr_42625;
})();
var statearr_42626_42671 = state_42597__$1;
(statearr_42626_42671[(2)] = null);

(statearr_42626_42671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42598 === (14))){
var state_42597__$1 = state_42597;
var statearr_42630_42672 = state_42597__$1;
(statearr_42630_42672[(2)] = null);

(statearr_42630_42672[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42598 === (16))){
var inst_42552 = (state_42597[(10)]);
var inst_42556 = cljs.core.chunk_first.call(null,inst_42552);
var inst_42557 = cljs.core.chunk_rest.call(null,inst_42552);
var inst_42558 = cljs.core.count.call(null,inst_42556);
var inst_42538 = inst_42557;
var inst_42539 = inst_42556;
var inst_42540 = inst_42558;
var inst_42541 = (0);
var state_42597__$1 = (function (){var statearr_42631 = state_42597;
(statearr_42631[(12)] = inst_42539);

(statearr_42631[(13)] = inst_42540);

(statearr_42631[(15)] = inst_42538);

(statearr_42631[(16)] = inst_42541);

return statearr_42631;
})();
var statearr_42632_42673 = state_42597__$1;
(statearr_42632_42673[(2)] = null);

(statearr_42632_42673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42598 === (10))){
var inst_42539 = (state_42597[(12)]);
var inst_42540 = (state_42597[(13)]);
var inst_42538 = (state_42597[(15)]);
var inst_42541 = (state_42597[(16)]);
var inst_42546 = cljs.core._nth.call(null,inst_42539,inst_42541);
var inst_42547 = cljs.core.async.muxch_STAR_.call(null,inst_42546);
var inst_42548 = cljs.core.async.close_BANG_.call(null,inst_42547);
var inst_42549 = (inst_42541 + (1));
var tmp42627 = inst_42539;
var tmp42628 = inst_42540;
var tmp42629 = inst_42538;
var inst_42538__$1 = tmp42629;
var inst_42539__$1 = tmp42627;
var inst_42540__$1 = tmp42628;
var inst_42541__$1 = inst_42549;
var state_42597__$1 = (function (){var statearr_42633 = state_42597;
(statearr_42633[(12)] = inst_42539__$1);

(statearr_42633[(13)] = inst_42540__$1);

(statearr_42633[(17)] = inst_42548);

(statearr_42633[(15)] = inst_42538__$1);

(statearr_42633[(16)] = inst_42541__$1);

return statearr_42633;
})();
var statearr_42634_42674 = state_42597__$1;
(statearr_42634_42674[(2)] = null);

(statearr_42634_42674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42598 === (18))){
var inst_42567 = (state_42597[(2)]);
var state_42597__$1 = state_42597;
var statearr_42635_42675 = state_42597__$1;
(statearr_42635_42675[(2)] = inst_42567);

(statearr_42635_42675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42598 === (8))){
var inst_42540 = (state_42597[(13)]);
var inst_42541 = (state_42597[(16)]);
var inst_42543 = (inst_42541 < inst_42540);
var inst_42544 = inst_42543;
var state_42597__$1 = state_42597;
if(cljs.core.truth_(inst_42544)){
var statearr_42636_42676 = state_42597__$1;
(statearr_42636_42676[(1)] = (10));

} else {
var statearr_42637_42677 = state_42597__$1;
(statearr_42637_42677[(1)] = (11));

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
});})(c__28419__auto___42649,mults,ensure_mult,p))
;
return ((function (switch__28354__auto__,c__28419__auto___42649,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28355__auto__ = null;
var cljs$core$async$state_machine__28355__auto____0 = (function (){
var statearr_42641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42641[(0)] = cljs$core$async$state_machine__28355__auto__);

(statearr_42641[(1)] = (1));

return statearr_42641;
});
var cljs$core$async$state_machine__28355__auto____1 = (function (state_42597){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_42597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e42642){if((e42642 instanceof Object)){
var ex__28358__auto__ = e42642;
var statearr_42643_42678 = state_42597;
(statearr_42643_42678[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42679 = state_42597;
state_42597 = G__42679;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
cljs$core$async$state_machine__28355__auto__ = function(state_42597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28355__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28355__auto____1.call(this,state_42597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28355__auto____0;
cljs$core$async$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28355__auto____1;
return cljs$core$async$state_machine__28355__auto__;
})()
;})(switch__28354__auto__,c__28419__auto___42649,mults,ensure_mult,p))
})();
var state__28421__auto__ = (function (){var statearr_42644 = f__28420__auto__.call(null);
(statearr_42644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto___42649);

return statearr_42644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(c__28419__auto___42649,mults,ensure_mult,p))
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
var args42680 = [];
var len__26323__auto___42683 = arguments.length;
var i__26324__auto___42684 = (0);
while(true){
if((i__26324__auto___42684 < len__26323__auto___42683)){
args42680.push((arguments[i__26324__auto___42684]));

var G__42685 = (i__26324__auto___42684 + (1));
i__26324__auto___42684 = G__42685;
continue;
} else {
}
break;
}

var G__42682 = args42680.length;
switch (G__42682) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42680.length)].join('')));

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
var args42687 = [];
var len__26323__auto___42690 = arguments.length;
var i__26324__auto___42691 = (0);
while(true){
if((i__26324__auto___42691 < len__26323__auto___42690)){
args42687.push((arguments[i__26324__auto___42691]));

var G__42692 = (i__26324__auto___42691 + (1));
i__26324__auto___42691 = G__42692;
continue;
} else {
}
break;
}

var G__42689 = args42687.length;
switch (G__42689) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42687.length)].join('')));

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
var args42694 = [];
var len__26323__auto___42765 = arguments.length;
var i__26324__auto___42766 = (0);
while(true){
if((i__26324__auto___42766 < len__26323__auto___42765)){
args42694.push((arguments[i__26324__auto___42766]));

var G__42767 = (i__26324__auto___42766 + (1));
i__26324__auto___42766 = G__42767;
continue;
} else {
}
break;
}

var G__42696 = args42694.length;
switch (G__42696) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42694.length)].join('')));

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
var c__28419__auto___42769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28419__auto___42769,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (c__28419__auto___42769,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42735){
var state_val_42736 = (state_42735[(1)]);
if((state_val_42736 === (7))){
var state_42735__$1 = state_42735;
var statearr_42737_42770 = state_42735__$1;
(statearr_42737_42770[(2)] = null);

(statearr_42737_42770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42736 === (1))){
var state_42735__$1 = state_42735;
var statearr_42738_42771 = state_42735__$1;
(statearr_42738_42771[(2)] = null);

(statearr_42738_42771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42736 === (4))){
var inst_42699 = (state_42735[(7)]);
var inst_42701 = (inst_42699 < cnt);
var state_42735__$1 = state_42735;
if(cljs.core.truth_(inst_42701)){
var statearr_42739_42772 = state_42735__$1;
(statearr_42739_42772[(1)] = (6));

} else {
var statearr_42740_42773 = state_42735__$1;
(statearr_42740_42773[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42736 === (15))){
var inst_42731 = (state_42735[(2)]);
var state_42735__$1 = state_42735;
var statearr_42741_42774 = state_42735__$1;
(statearr_42741_42774[(2)] = inst_42731);

(statearr_42741_42774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42736 === (13))){
var inst_42724 = cljs.core.async.close_BANG_.call(null,out);
var state_42735__$1 = state_42735;
var statearr_42742_42775 = state_42735__$1;
(statearr_42742_42775[(2)] = inst_42724);

(statearr_42742_42775[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42736 === (6))){
var state_42735__$1 = state_42735;
var statearr_42743_42776 = state_42735__$1;
(statearr_42743_42776[(2)] = null);

(statearr_42743_42776[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42736 === (3))){
var inst_42733 = (state_42735[(2)]);
var state_42735__$1 = state_42735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42735__$1,inst_42733);
} else {
if((state_val_42736 === (12))){
var inst_42721 = (state_42735[(8)]);
var inst_42721__$1 = (state_42735[(2)]);
var inst_42722 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42721__$1);
var state_42735__$1 = (function (){var statearr_42744 = state_42735;
(statearr_42744[(8)] = inst_42721__$1);

return statearr_42744;
})();
if(cljs.core.truth_(inst_42722)){
var statearr_42745_42777 = state_42735__$1;
(statearr_42745_42777[(1)] = (13));

} else {
var statearr_42746_42778 = state_42735__$1;
(statearr_42746_42778[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42736 === (2))){
var inst_42698 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_42699 = (0);
var state_42735__$1 = (function (){var statearr_42747 = state_42735;
(statearr_42747[(9)] = inst_42698);

(statearr_42747[(7)] = inst_42699);

return statearr_42747;
})();
var statearr_42748_42779 = state_42735__$1;
(statearr_42748_42779[(2)] = null);

(statearr_42748_42779[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42736 === (11))){
var inst_42699 = (state_42735[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42735,(10),Object,null,(9));
var inst_42708 = chs__$1.call(null,inst_42699);
var inst_42709 = done.call(null,inst_42699);
var inst_42710 = cljs.core.async.take_BANG_.call(null,inst_42708,inst_42709);
var state_42735__$1 = state_42735;
var statearr_42749_42780 = state_42735__$1;
(statearr_42749_42780[(2)] = inst_42710);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42735__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42736 === (9))){
var inst_42699 = (state_42735[(7)]);
var inst_42712 = (state_42735[(2)]);
var inst_42713 = (inst_42699 + (1));
var inst_42699__$1 = inst_42713;
var state_42735__$1 = (function (){var statearr_42750 = state_42735;
(statearr_42750[(10)] = inst_42712);

(statearr_42750[(7)] = inst_42699__$1);

return statearr_42750;
})();
var statearr_42751_42781 = state_42735__$1;
(statearr_42751_42781[(2)] = null);

(statearr_42751_42781[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42736 === (5))){
var inst_42719 = (state_42735[(2)]);
var state_42735__$1 = (function (){var statearr_42752 = state_42735;
(statearr_42752[(11)] = inst_42719);

return statearr_42752;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42735__$1,(12),dchan);
} else {
if((state_val_42736 === (14))){
var inst_42721 = (state_42735[(8)]);
var inst_42726 = cljs.core.apply.call(null,f,inst_42721);
var state_42735__$1 = state_42735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42735__$1,(16),out,inst_42726);
} else {
if((state_val_42736 === (16))){
var inst_42728 = (state_42735[(2)]);
var state_42735__$1 = (function (){var statearr_42753 = state_42735;
(statearr_42753[(12)] = inst_42728);

return statearr_42753;
})();
var statearr_42754_42782 = state_42735__$1;
(statearr_42754_42782[(2)] = null);

(statearr_42754_42782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42736 === (10))){
var inst_42703 = (state_42735[(2)]);
var inst_42704 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_42735__$1 = (function (){var statearr_42755 = state_42735;
(statearr_42755[(13)] = inst_42703);

return statearr_42755;
})();
var statearr_42756_42783 = state_42735__$1;
(statearr_42756_42783[(2)] = inst_42704);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42735__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42736 === (8))){
var inst_42717 = (state_42735[(2)]);
var state_42735__$1 = state_42735;
var statearr_42757_42784 = state_42735__$1;
(statearr_42757_42784[(2)] = inst_42717);

(statearr_42757_42784[(1)] = (5));


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
});})(c__28419__auto___42769,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28354__auto__,c__28419__auto___42769,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28355__auto__ = null;
var cljs$core$async$state_machine__28355__auto____0 = (function (){
var statearr_42761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42761[(0)] = cljs$core$async$state_machine__28355__auto__);

(statearr_42761[(1)] = (1));

return statearr_42761;
});
var cljs$core$async$state_machine__28355__auto____1 = (function (state_42735){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_42735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e42762){if((e42762 instanceof Object)){
var ex__28358__auto__ = e42762;
var statearr_42763_42785 = state_42735;
(statearr_42763_42785[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42786 = state_42735;
state_42735 = G__42786;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
cljs$core$async$state_machine__28355__auto__ = function(state_42735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28355__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28355__auto____1.call(this,state_42735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28355__auto____0;
cljs$core$async$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28355__auto____1;
return cljs$core$async$state_machine__28355__auto__;
})()
;})(switch__28354__auto__,c__28419__auto___42769,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28421__auto__ = (function (){var statearr_42764 = f__28420__auto__.call(null);
(statearr_42764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto___42769);

return statearr_42764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(c__28419__auto___42769,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args42788 = [];
var len__26323__auto___42844 = arguments.length;
var i__26324__auto___42845 = (0);
while(true){
if((i__26324__auto___42845 < len__26323__auto___42844)){
args42788.push((arguments[i__26324__auto___42845]));

var G__42846 = (i__26324__auto___42845 + (1));
i__26324__auto___42845 = G__42846;
continue;
} else {
}
break;
}

var G__42790 = args42788.length;
switch (G__42790) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42788.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28419__auto___42848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28419__auto___42848,out){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (c__28419__auto___42848,out){
return (function (state_42820){
var state_val_42821 = (state_42820[(1)]);
if((state_val_42821 === (7))){
var inst_42799 = (state_42820[(7)]);
var inst_42800 = (state_42820[(8)]);
var inst_42799__$1 = (state_42820[(2)]);
var inst_42800__$1 = cljs.core.nth.call(null,inst_42799__$1,(0),null);
var inst_42801 = cljs.core.nth.call(null,inst_42799__$1,(1),null);
var inst_42802 = (inst_42800__$1 == null);
var state_42820__$1 = (function (){var statearr_42822 = state_42820;
(statearr_42822[(9)] = inst_42801);

(statearr_42822[(7)] = inst_42799__$1);

(statearr_42822[(8)] = inst_42800__$1);

return statearr_42822;
})();
if(cljs.core.truth_(inst_42802)){
var statearr_42823_42849 = state_42820__$1;
(statearr_42823_42849[(1)] = (8));

} else {
var statearr_42824_42850 = state_42820__$1;
(statearr_42824_42850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42821 === (1))){
var inst_42791 = cljs.core.vec.call(null,chs);
var inst_42792 = inst_42791;
var state_42820__$1 = (function (){var statearr_42825 = state_42820;
(statearr_42825[(10)] = inst_42792);

return statearr_42825;
})();
var statearr_42826_42851 = state_42820__$1;
(statearr_42826_42851[(2)] = null);

(statearr_42826_42851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42821 === (4))){
var inst_42792 = (state_42820[(10)]);
var state_42820__$1 = state_42820;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42820__$1,(7),inst_42792);
} else {
if((state_val_42821 === (6))){
var inst_42816 = (state_42820[(2)]);
var state_42820__$1 = state_42820;
var statearr_42827_42852 = state_42820__$1;
(statearr_42827_42852[(2)] = inst_42816);

(statearr_42827_42852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42821 === (3))){
var inst_42818 = (state_42820[(2)]);
var state_42820__$1 = state_42820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42820__$1,inst_42818);
} else {
if((state_val_42821 === (2))){
var inst_42792 = (state_42820[(10)]);
var inst_42794 = cljs.core.count.call(null,inst_42792);
var inst_42795 = (inst_42794 > (0));
var state_42820__$1 = state_42820;
if(cljs.core.truth_(inst_42795)){
var statearr_42829_42853 = state_42820__$1;
(statearr_42829_42853[(1)] = (4));

} else {
var statearr_42830_42854 = state_42820__$1;
(statearr_42830_42854[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42821 === (11))){
var inst_42792 = (state_42820[(10)]);
var inst_42809 = (state_42820[(2)]);
var tmp42828 = inst_42792;
var inst_42792__$1 = tmp42828;
var state_42820__$1 = (function (){var statearr_42831 = state_42820;
(statearr_42831[(10)] = inst_42792__$1);

(statearr_42831[(11)] = inst_42809);

return statearr_42831;
})();
var statearr_42832_42855 = state_42820__$1;
(statearr_42832_42855[(2)] = null);

(statearr_42832_42855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42821 === (9))){
var inst_42800 = (state_42820[(8)]);
var state_42820__$1 = state_42820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42820__$1,(11),out,inst_42800);
} else {
if((state_val_42821 === (5))){
var inst_42814 = cljs.core.async.close_BANG_.call(null,out);
var state_42820__$1 = state_42820;
var statearr_42833_42856 = state_42820__$1;
(statearr_42833_42856[(2)] = inst_42814);

(statearr_42833_42856[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42821 === (10))){
var inst_42812 = (state_42820[(2)]);
var state_42820__$1 = state_42820;
var statearr_42834_42857 = state_42820__$1;
(statearr_42834_42857[(2)] = inst_42812);

(statearr_42834_42857[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42821 === (8))){
var inst_42801 = (state_42820[(9)]);
var inst_42799 = (state_42820[(7)]);
var inst_42792 = (state_42820[(10)]);
var inst_42800 = (state_42820[(8)]);
var inst_42804 = (function (){var cs = inst_42792;
var vec__42797 = inst_42799;
var v = inst_42800;
var c = inst_42801;
return ((function (cs,vec__42797,v,c,inst_42801,inst_42799,inst_42792,inst_42800,state_val_42821,c__28419__auto___42848,out){
return (function (p1__42787_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__42787_SHARP_);
});
;})(cs,vec__42797,v,c,inst_42801,inst_42799,inst_42792,inst_42800,state_val_42821,c__28419__auto___42848,out))
})();
var inst_42805 = cljs.core.filterv.call(null,inst_42804,inst_42792);
var inst_42792__$1 = inst_42805;
var state_42820__$1 = (function (){var statearr_42835 = state_42820;
(statearr_42835[(10)] = inst_42792__$1);

return statearr_42835;
})();
var statearr_42836_42858 = state_42820__$1;
(statearr_42836_42858[(2)] = null);

(statearr_42836_42858[(1)] = (2));


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
});})(c__28419__auto___42848,out))
;
return ((function (switch__28354__auto__,c__28419__auto___42848,out){
return (function() {
var cljs$core$async$state_machine__28355__auto__ = null;
var cljs$core$async$state_machine__28355__auto____0 = (function (){
var statearr_42840 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42840[(0)] = cljs$core$async$state_machine__28355__auto__);

(statearr_42840[(1)] = (1));

return statearr_42840;
});
var cljs$core$async$state_machine__28355__auto____1 = (function (state_42820){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_42820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e42841){if((e42841 instanceof Object)){
var ex__28358__auto__ = e42841;
var statearr_42842_42859 = state_42820;
(statearr_42842_42859[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42860 = state_42820;
state_42820 = G__42860;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
cljs$core$async$state_machine__28355__auto__ = function(state_42820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28355__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28355__auto____1.call(this,state_42820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28355__auto____0;
cljs$core$async$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28355__auto____1;
return cljs$core$async$state_machine__28355__auto__;
})()
;})(switch__28354__auto__,c__28419__auto___42848,out))
})();
var state__28421__auto__ = (function (){var statearr_42843 = f__28420__auto__.call(null);
(statearr_42843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto___42848);

return statearr_42843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(c__28419__auto___42848,out))
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
var args42861 = [];
var len__26323__auto___42910 = arguments.length;
var i__26324__auto___42911 = (0);
while(true){
if((i__26324__auto___42911 < len__26323__auto___42910)){
args42861.push((arguments[i__26324__auto___42911]));

var G__42912 = (i__26324__auto___42911 + (1));
i__26324__auto___42911 = G__42912;
continue;
} else {
}
break;
}

var G__42863 = args42861.length;
switch (G__42863) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42861.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28419__auto___42914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28419__auto___42914,out){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (c__28419__auto___42914,out){
return (function (state_42887){
var state_val_42888 = (state_42887[(1)]);
if((state_val_42888 === (7))){
var inst_42869 = (state_42887[(7)]);
var inst_42869__$1 = (state_42887[(2)]);
var inst_42870 = (inst_42869__$1 == null);
var inst_42871 = cljs.core.not.call(null,inst_42870);
var state_42887__$1 = (function (){var statearr_42889 = state_42887;
(statearr_42889[(7)] = inst_42869__$1);

return statearr_42889;
})();
if(inst_42871){
var statearr_42890_42915 = state_42887__$1;
(statearr_42890_42915[(1)] = (8));

} else {
var statearr_42891_42916 = state_42887__$1;
(statearr_42891_42916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42888 === (1))){
var inst_42864 = (0);
var state_42887__$1 = (function (){var statearr_42892 = state_42887;
(statearr_42892[(8)] = inst_42864);

return statearr_42892;
})();
var statearr_42893_42917 = state_42887__$1;
(statearr_42893_42917[(2)] = null);

(statearr_42893_42917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42888 === (4))){
var state_42887__$1 = state_42887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42887__$1,(7),ch);
} else {
if((state_val_42888 === (6))){
var inst_42882 = (state_42887[(2)]);
var state_42887__$1 = state_42887;
var statearr_42894_42918 = state_42887__$1;
(statearr_42894_42918[(2)] = inst_42882);

(statearr_42894_42918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42888 === (3))){
var inst_42884 = (state_42887[(2)]);
var inst_42885 = cljs.core.async.close_BANG_.call(null,out);
var state_42887__$1 = (function (){var statearr_42895 = state_42887;
(statearr_42895[(9)] = inst_42884);

return statearr_42895;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42887__$1,inst_42885);
} else {
if((state_val_42888 === (2))){
var inst_42864 = (state_42887[(8)]);
var inst_42866 = (inst_42864 < n);
var state_42887__$1 = state_42887;
if(cljs.core.truth_(inst_42866)){
var statearr_42896_42919 = state_42887__$1;
(statearr_42896_42919[(1)] = (4));

} else {
var statearr_42897_42920 = state_42887__$1;
(statearr_42897_42920[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42888 === (11))){
var inst_42864 = (state_42887[(8)]);
var inst_42874 = (state_42887[(2)]);
var inst_42875 = (inst_42864 + (1));
var inst_42864__$1 = inst_42875;
var state_42887__$1 = (function (){var statearr_42898 = state_42887;
(statearr_42898[(10)] = inst_42874);

(statearr_42898[(8)] = inst_42864__$1);

return statearr_42898;
})();
var statearr_42899_42921 = state_42887__$1;
(statearr_42899_42921[(2)] = null);

(statearr_42899_42921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42888 === (9))){
var state_42887__$1 = state_42887;
var statearr_42900_42922 = state_42887__$1;
(statearr_42900_42922[(2)] = null);

(statearr_42900_42922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42888 === (5))){
var state_42887__$1 = state_42887;
var statearr_42901_42923 = state_42887__$1;
(statearr_42901_42923[(2)] = null);

(statearr_42901_42923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42888 === (10))){
var inst_42879 = (state_42887[(2)]);
var state_42887__$1 = state_42887;
var statearr_42902_42924 = state_42887__$1;
(statearr_42902_42924[(2)] = inst_42879);

(statearr_42902_42924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42888 === (8))){
var inst_42869 = (state_42887[(7)]);
var state_42887__$1 = state_42887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42887__$1,(11),out,inst_42869);
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
});})(c__28419__auto___42914,out))
;
return ((function (switch__28354__auto__,c__28419__auto___42914,out){
return (function() {
var cljs$core$async$state_machine__28355__auto__ = null;
var cljs$core$async$state_machine__28355__auto____0 = (function (){
var statearr_42906 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42906[(0)] = cljs$core$async$state_machine__28355__auto__);

(statearr_42906[(1)] = (1));

return statearr_42906;
});
var cljs$core$async$state_machine__28355__auto____1 = (function (state_42887){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_42887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e42907){if((e42907 instanceof Object)){
var ex__28358__auto__ = e42907;
var statearr_42908_42925 = state_42887;
(statearr_42908_42925[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42926 = state_42887;
state_42887 = G__42926;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
cljs$core$async$state_machine__28355__auto__ = function(state_42887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28355__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28355__auto____1.call(this,state_42887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28355__auto____0;
cljs$core$async$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28355__auto____1;
return cljs$core$async$state_machine__28355__auto__;
})()
;})(switch__28354__auto__,c__28419__auto___42914,out))
})();
var state__28421__auto__ = (function (){var statearr_42909 = f__28420__auto__.call(null);
(statearr_42909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto___42914);

return statearr_42909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(c__28419__auto___42914,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42934 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42934 = (function (map_LT_,f,ch,meta42935){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta42935 = meta42935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42936,meta42935__$1){
var self__ = this;
var _42936__$1 = this;
return (new cljs.core.async.t_cljs$core$async42934(self__.map_LT_,self__.f,self__.ch,meta42935__$1));
});

cljs.core.async.t_cljs$core$async42934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42936){
var self__ = this;
var _42936__$1 = this;
return self__.meta42935;
});

cljs.core.async.t_cljs$core$async42934.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42934.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42934.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42934.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42934.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async42937 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42937 = (function (map_LT_,f,ch,meta42935,_,fn1,meta42938){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta42935 = meta42935;
this._ = _;
this.fn1 = fn1;
this.meta42938 = meta42938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42939,meta42938__$1){
var self__ = this;
var _42939__$1 = this;
return (new cljs.core.async.t_cljs$core$async42937(self__.map_LT_,self__.f,self__.ch,self__.meta42935,self__._,self__.fn1,meta42938__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async42937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42939){
var self__ = this;
var _42939__$1 = this;
return self__.meta42938;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42937.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async42937.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42937.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42937.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42927_SHARP_){
return f1.call(null,(((p1__42927_SHARP_ == null))?null:self__.f.call(null,p1__42927_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async42937.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42935","meta42935",1008613526,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42934","cljs.core.async/t_cljs$core$async42934",1486303469,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42938","meta42938",-923945734,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42937.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42937";

cljs.core.async.t_cljs$core$async42937.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25863__auto__,writer__25864__auto__,opt__25865__auto__){
return cljs.core._write.call(null,writer__25864__auto__,"cljs.core.async/t_cljs$core$async42937");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async42937 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42937(map_LT___$1,f__$1,ch__$1,meta42935__$1,___$2,fn1__$1,meta42938){
return (new cljs.core.async.t_cljs$core$async42937(map_LT___$1,f__$1,ch__$1,meta42935__$1,___$2,fn1__$1,meta42938));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async42937(self__.map_LT_,self__.f,self__.ch,self__.meta42935,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25253__auto__ = ret;
if(cljs.core.truth_(and__25253__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25253__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async42934.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42934.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async42934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42935","meta42935",1008613526,null)], null);
});

cljs.core.async.t_cljs$core$async42934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42934";

cljs.core.async.t_cljs$core$async42934.cljs$lang$ctorPrWriter = (function (this__25863__auto__,writer__25864__auto__,opt__25865__auto__){
return cljs.core._write.call(null,writer__25864__auto__,"cljs.core.async/t_cljs$core$async42934");
});

cljs.core.async.__GT_t_cljs$core$async42934 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42934(map_LT___$1,f__$1,ch__$1,meta42935){
return (new cljs.core.async.t_cljs$core$async42934(map_LT___$1,f__$1,ch__$1,meta42935));
});

}

return (new cljs.core.async.t_cljs$core$async42934(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42943 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42943 = (function (map_GT_,f,ch,meta42944){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta42944 = meta42944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42945,meta42944__$1){
var self__ = this;
var _42945__$1 = this;
return (new cljs.core.async.t_cljs$core$async42943(self__.map_GT_,self__.f,self__.ch,meta42944__$1));
});

cljs.core.async.t_cljs$core$async42943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42945){
var self__ = this;
var _42945__$1 = this;
return self__.meta42944;
});

cljs.core.async.t_cljs$core$async42943.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42943.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42943.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42943.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42943.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42943.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async42943.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42944","meta42944",-890825128,null)], null);
});

cljs.core.async.t_cljs$core$async42943.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42943";

cljs.core.async.t_cljs$core$async42943.cljs$lang$ctorPrWriter = (function (this__25863__auto__,writer__25864__auto__,opt__25865__auto__){
return cljs.core._write.call(null,writer__25864__auto__,"cljs.core.async/t_cljs$core$async42943");
});

cljs.core.async.__GT_t_cljs$core$async42943 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42943(map_GT___$1,f__$1,ch__$1,meta42944){
return (new cljs.core.async.t_cljs$core$async42943(map_GT___$1,f__$1,ch__$1,meta42944));
});

}

return (new cljs.core.async.t_cljs$core$async42943(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async42949 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42949 = (function (filter_GT_,p,ch,meta42950){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta42950 = meta42950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42951,meta42950__$1){
var self__ = this;
var _42951__$1 = this;
return (new cljs.core.async.t_cljs$core$async42949(self__.filter_GT_,self__.p,self__.ch,meta42950__$1));
});

cljs.core.async.t_cljs$core$async42949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42951){
var self__ = this;
var _42951__$1 = this;
return self__.meta42950;
});

cljs.core.async.t_cljs$core$async42949.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42949.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42949.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42949.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42949.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42949.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42949.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async42949.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42950","meta42950",1160139397,null)], null);
});

cljs.core.async.t_cljs$core$async42949.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42949";

cljs.core.async.t_cljs$core$async42949.cljs$lang$ctorPrWriter = (function (this__25863__auto__,writer__25864__auto__,opt__25865__auto__){
return cljs.core._write.call(null,writer__25864__auto__,"cljs.core.async/t_cljs$core$async42949");
});

cljs.core.async.__GT_t_cljs$core$async42949 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42949(filter_GT___$1,p__$1,ch__$1,meta42950){
return (new cljs.core.async.t_cljs$core$async42949(filter_GT___$1,p__$1,ch__$1,meta42950));
});

}

return (new cljs.core.async.t_cljs$core$async42949(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args42952 = [];
var len__26323__auto___42996 = arguments.length;
var i__26324__auto___42997 = (0);
while(true){
if((i__26324__auto___42997 < len__26323__auto___42996)){
args42952.push((arguments[i__26324__auto___42997]));

var G__42998 = (i__26324__auto___42997 + (1));
i__26324__auto___42997 = G__42998;
continue;
} else {
}
break;
}

var G__42954 = args42952.length;
switch (G__42954) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42952.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28419__auto___43000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28419__auto___43000,out){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (c__28419__auto___43000,out){
return (function (state_42975){
var state_val_42976 = (state_42975[(1)]);
if((state_val_42976 === (7))){
var inst_42971 = (state_42975[(2)]);
var state_42975__$1 = state_42975;
var statearr_42977_43001 = state_42975__$1;
(statearr_42977_43001[(2)] = inst_42971);

(statearr_42977_43001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42976 === (1))){
var state_42975__$1 = state_42975;
var statearr_42978_43002 = state_42975__$1;
(statearr_42978_43002[(2)] = null);

(statearr_42978_43002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42976 === (4))){
var inst_42957 = (state_42975[(7)]);
var inst_42957__$1 = (state_42975[(2)]);
var inst_42958 = (inst_42957__$1 == null);
var state_42975__$1 = (function (){var statearr_42979 = state_42975;
(statearr_42979[(7)] = inst_42957__$1);

return statearr_42979;
})();
if(cljs.core.truth_(inst_42958)){
var statearr_42980_43003 = state_42975__$1;
(statearr_42980_43003[(1)] = (5));

} else {
var statearr_42981_43004 = state_42975__$1;
(statearr_42981_43004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42976 === (6))){
var inst_42957 = (state_42975[(7)]);
var inst_42962 = p.call(null,inst_42957);
var state_42975__$1 = state_42975;
if(cljs.core.truth_(inst_42962)){
var statearr_42982_43005 = state_42975__$1;
(statearr_42982_43005[(1)] = (8));

} else {
var statearr_42983_43006 = state_42975__$1;
(statearr_42983_43006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42976 === (3))){
var inst_42973 = (state_42975[(2)]);
var state_42975__$1 = state_42975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42975__$1,inst_42973);
} else {
if((state_val_42976 === (2))){
var state_42975__$1 = state_42975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42975__$1,(4),ch);
} else {
if((state_val_42976 === (11))){
var inst_42965 = (state_42975[(2)]);
var state_42975__$1 = state_42975;
var statearr_42984_43007 = state_42975__$1;
(statearr_42984_43007[(2)] = inst_42965);

(statearr_42984_43007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42976 === (9))){
var state_42975__$1 = state_42975;
var statearr_42985_43008 = state_42975__$1;
(statearr_42985_43008[(2)] = null);

(statearr_42985_43008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42976 === (5))){
var inst_42960 = cljs.core.async.close_BANG_.call(null,out);
var state_42975__$1 = state_42975;
var statearr_42986_43009 = state_42975__$1;
(statearr_42986_43009[(2)] = inst_42960);

(statearr_42986_43009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42976 === (10))){
var inst_42968 = (state_42975[(2)]);
var state_42975__$1 = (function (){var statearr_42987 = state_42975;
(statearr_42987[(8)] = inst_42968);

return statearr_42987;
})();
var statearr_42988_43010 = state_42975__$1;
(statearr_42988_43010[(2)] = null);

(statearr_42988_43010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42976 === (8))){
var inst_42957 = (state_42975[(7)]);
var state_42975__$1 = state_42975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42975__$1,(11),out,inst_42957);
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
});})(c__28419__auto___43000,out))
;
return ((function (switch__28354__auto__,c__28419__auto___43000,out){
return (function() {
var cljs$core$async$state_machine__28355__auto__ = null;
var cljs$core$async$state_machine__28355__auto____0 = (function (){
var statearr_42992 = [null,null,null,null,null,null,null,null,null];
(statearr_42992[(0)] = cljs$core$async$state_machine__28355__auto__);

(statearr_42992[(1)] = (1));

return statearr_42992;
});
var cljs$core$async$state_machine__28355__auto____1 = (function (state_42975){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_42975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e42993){if((e42993 instanceof Object)){
var ex__28358__auto__ = e42993;
var statearr_42994_43011 = state_42975;
(statearr_42994_43011[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43012 = state_42975;
state_42975 = G__43012;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
cljs$core$async$state_machine__28355__auto__ = function(state_42975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28355__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28355__auto____1.call(this,state_42975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28355__auto____0;
cljs$core$async$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28355__auto____1;
return cljs$core$async$state_machine__28355__auto__;
})()
;})(switch__28354__auto__,c__28419__auto___43000,out))
})();
var state__28421__auto__ = (function (){var statearr_42995 = f__28420__auto__.call(null);
(statearr_42995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto___43000);

return statearr_42995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(c__28419__auto___43000,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args43013 = [];
var len__26323__auto___43016 = arguments.length;
var i__26324__auto___43017 = (0);
while(true){
if((i__26324__auto___43017 < len__26323__auto___43016)){
args43013.push((arguments[i__26324__auto___43017]));

var G__43018 = (i__26324__auto___43017 + (1));
i__26324__auto___43017 = G__43018;
continue;
} else {
}
break;
}

var G__43015 = args43013.length;
switch (G__43015) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43013.length)].join('')));

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
var c__28419__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28419__auto__){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (c__28419__auto__){
return (function (state_43185){
var state_val_43186 = (state_43185[(1)]);
if((state_val_43186 === (7))){
var inst_43181 = (state_43185[(2)]);
var state_43185__$1 = state_43185;
var statearr_43187_43228 = state_43185__$1;
(statearr_43187_43228[(2)] = inst_43181);

(statearr_43187_43228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (20))){
var inst_43151 = (state_43185[(7)]);
var inst_43162 = (state_43185[(2)]);
var inst_43163 = cljs.core.next.call(null,inst_43151);
var inst_43137 = inst_43163;
var inst_43138 = null;
var inst_43139 = (0);
var inst_43140 = (0);
var state_43185__$1 = (function (){var statearr_43188 = state_43185;
(statearr_43188[(8)] = inst_43137);

(statearr_43188[(9)] = inst_43139);

(statearr_43188[(10)] = inst_43138);

(statearr_43188[(11)] = inst_43162);

(statearr_43188[(12)] = inst_43140);

return statearr_43188;
})();
var statearr_43189_43229 = state_43185__$1;
(statearr_43189_43229[(2)] = null);

(statearr_43189_43229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (1))){
var state_43185__$1 = state_43185;
var statearr_43190_43230 = state_43185__$1;
(statearr_43190_43230[(2)] = null);

(statearr_43190_43230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (4))){
var inst_43126 = (state_43185[(13)]);
var inst_43126__$1 = (state_43185[(2)]);
var inst_43127 = (inst_43126__$1 == null);
var state_43185__$1 = (function (){var statearr_43191 = state_43185;
(statearr_43191[(13)] = inst_43126__$1);

return statearr_43191;
})();
if(cljs.core.truth_(inst_43127)){
var statearr_43192_43231 = state_43185__$1;
(statearr_43192_43231[(1)] = (5));

} else {
var statearr_43193_43232 = state_43185__$1;
(statearr_43193_43232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (15))){
var state_43185__$1 = state_43185;
var statearr_43197_43233 = state_43185__$1;
(statearr_43197_43233[(2)] = null);

(statearr_43197_43233[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (21))){
var state_43185__$1 = state_43185;
var statearr_43198_43234 = state_43185__$1;
(statearr_43198_43234[(2)] = null);

(statearr_43198_43234[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (13))){
var inst_43137 = (state_43185[(8)]);
var inst_43139 = (state_43185[(9)]);
var inst_43138 = (state_43185[(10)]);
var inst_43140 = (state_43185[(12)]);
var inst_43147 = (state_43185[(2)]);
var inst_43148 = (inst_43140 + (1));
var tmp43194 = inst_43137;
var tmp43195 = inst_43139;
var tmp43196 = inst_43138;
var inst_43137__$1 = tmp43194;
var inst_43138__$1 = tmp43196;
var inst_43139__$1 = tmp43195;
var inst_43140__$1 = inst_43148;
var state_43185__$1 = (function (){var statearr_43199 = state_43185;
(statearr_43199[(8)] = inst_43137__$1);

(statearr_43199[(9)] = inst_43139__$1);

(statearr_43199[(14)] = inst_43147);

(statearr_43199[(10)] = inst_43138__$1);

(statearr_43199[(12)] = inst_43140__$1);

return statearr_43199;
})();
var statearr_43200_43235 = state_43185__$1;
(statearr_43200_43235[(2)] = null);

(statearr_43200_43235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (22))){
var state_43185__$1 = state_43185;
var statearr_43201_43236 = state_43185__$1;
(statearr_43201_43236[(2)] = null);

(statearr_43201_43236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (6))){
var inst_43126 = (state_43185[(13)]);
var inst_43135 = f.call(null,inst_43126);
var inst_43136 = cljs.core.seq.call(null,inst_43135);
var inst_43137 = inst_43136;
var inst_43138 = null;
var inst_43139 = (0);
var inst_43140 = (0);
var state_43185__$1 = (function (){var statearr_43202 = state_43185;
(statearr_43202[(8)] = inst_43137);

(statearr_43202[(9)] = inst_43139);

(statearr_43202[(10)] = inst_43138);

(statearr_43202[(12)] = inst_43140);

return statearr_43202;
})();
var statearr_43203_43237 = state_43185__$1;
(statearr_43203_43237[(2)] = null);

(statearr_43203_43237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (17))){
var inst_43151 = (state_43185[(7)]);
var inst_43155 = cljs.core.chunk_first.call(null,inst_43151);
var inst_43156 = cljs.core.chunk_rest.call(null,inst_43151);
var inst_43157 = cljs.core.count.call(null,inst_43155);
var inst_43137 = inst_43156;
var inst_43138 = inst_43155;
var inst_43139 = inst_43157;
var inst_43140 = (0);
var state_43185__$1 = (function (){var statearr_43204 = state_43185;
(statearr_43204[(8)] = inst_43137);

(statearr_43204[(9)] = inst_43139);

(statearr_43204[(10)] = inst_43138);

(statearr_43204[(12)] = inst_43140);

return statearr_43204;
})();
var statearr_43205_43238 = state_43185__$1;
(statearr_43205_43238[(2)] = null);

(statearr_43205_43238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (3))){
var inst_43183 = (state_43185[(2)]);
var state_43185__$1 = state_43185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43185__$1,inst_43183);
} else {
if((state_val_43186 === (12))){
var inst_43171 = (state_43185[(2)]);
var state_43185__$1 = state_43185;
var statearr_43206_43239 = state_43185__$1;
(statearr_43206_43239[(2)] = inst_43171);

(statearr_43206_43239[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (2))){
var state_43185__$1 = state_43185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43185__$1,(4),in$);
} else {
if((state_val_43186 === (23))){
var inst_43179 = (state_43185[(2)]);
var state_43185__$1 = state_43185;
var statearr_43207_43240 = state_43185__$1;
(statearr_43207_43240[(2)] = inst_43179);

(statearr_43207_43240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (19))){
var inst_43166 = (state_43185[(2)]);
var state_43185__$1 = state_43185;
var statearr_43208_43241 = state_43185__$1;
(statearr_43208_43241[(2)] = inst_43166);

(statearr_43208_43241[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (11))){
var inst_43137 = (state_43185[(8)]);
var inst_43151 = (state_43185[(7)]);
var inst_43151__$1 = cljs.core.seq.call(null,inst_43137);
var state_43185__$1 = (function (){var statearr_43209 = state_43185;
(statearr_43209[(7)] = inst_43151__$1);

return statearr_43209;
})();
if(inst_43151__$1){
var statearr_43210_43242 = state_43185__$1;
(statearr_43210_43242[(1)] = (14));

} else {
var statearr_43211_43243 = state_43185__$1;
(statearr_43211_43243[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (9))){
var inst_43173 = (state_43185[(2)]);
var inst_43174 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43185__$1 = (function (){var statearr_43212 = state_43185;
(statearr_43212[(15)] = inst_43173);

return statearr_43212;
})();
if(cljs.core.truth_(inst_43174)){
var statearr_43213_43244 = state_43185__$1;
(statearr_43213_43244[(1)] = (21));

} else {
var statearr_43214_43245 = state_43185__$1;
(statearr_43214_43245[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (5))){
var inst_43129 = cljs.core.async.close_BANG_.call(null,out);
var state_43185__$1 = state_43185;
var statearr_43215_43246 = state_43185__$1;
(statearr_43215_43246[(2)] = inst_43129);

(statearr_43215_43246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (14))){
var inst_43151 = (state_43185[(7)]);
var inst_43153 = cljs.core.chunked_seq_QMARK_.call(null,inst_43151);
var state_43185__$1 = state_43185;
if(inst_43153){
var statearr_43216_43247 = state_43185__$1;
(statearr_43216_43247[(1)] = (17));

} else {
var statearr_43217_43248 = state_43185__$1;
(statearr_43217_43248[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (16))){
var inst_43169 = (state_43185[(2)]);
var state_43185__$1 = state_43185;
var statearr_43218_43249 = state_43185__$1;
(statearr_43218_43249[(2)] = inst_43169);

(statearr_43218_43249[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (10))){
var inst_43138 = (state_43185[(10)]);
var inst_43140 = (state_43185[(12)]);
var inst_43145 = cljs.core._nth.call(null,inst_43138,inst_43140);
var state_43185__$1 = state_43185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43185__$1,(13),out,inst_43145);
} else {
if((state_val_43186 === (18))){
var inst_43151 = (state_43185[(7)]);
var inst_43160 = cljs.core.first.call(null,inst_43151);
var state_43185__$1 = state_43185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43185__$1,(20),out,inst_43160);
} else {
if((state_val_43186 === (8))){
var inst_43139 = (state_43185[(9)]);
var inst_43140 = (state_43185[(12)]);
var inst_43142 = (inst_43140 < inst_43139);
var inst_43143 = inst_43142;
var state_43185__$1 = state_43185;
if(cljs.core.truth_(inst_43143)){
var statearr_43219_43250 = state_43185__$1;
(statearr_43219_43250[(1)] = (10));

} else {
var statearr_43220_43251 = state_43185__$1;
(statearr_43220_43251[(1)] = (11));

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
});})(c__28419__auto__))
;
return ((function (switch__28354__auto__,c__28419__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28355__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28355__auto____0 = (function (){
var statearr_43224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43224[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28355__auto__);

(statearr_43224[(1)] = (1));

return statearr_43224;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28355__auto____1 = (function (state_43185){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_43185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e43225){if((e43225 instanceof Object)){
var ex__28358__auto__ = e43225;
var statearr_43226_43252 = state_43185;
(statearr_43226_43252[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43253 = state_43185;
state_43185 = G__43253;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28355__auto__ = function(state_43185){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28355__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28355__auto____1.call(this,state_43185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28355__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28355__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28355__auto__;
})()
;})(switch__28354__auto__,c__28419__auto__))
})();
var state__28421__auto__ = (function (){var statearr_43227 = f__28420__auto__.call(null);
(statearr_43227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto__);

return statearr_43227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(c__28419__auto__))
);

return c__28419__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args43254 = [];
var len__26323__auto___43257 = arguments.length;
var i__26324__auto___43258 = (0);
while(true){
if((i__26324__auto___43258 < len__26323__auto___43257)){
args43254.push((arguments[i__26324__auto___43258]));

var G__43259 = (i__26324__auto___43258 + (1));
i__26324__auto___43258 = G__43259;
continue;
} else {
}
break;
}

var G__43256 = args43254.length;
switch (G__43256) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43254.length)].join('')));

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
var args43261 = [];
var len__26323__auto___43264 = arguments.length;
var i__26324__auto___43265 = (0);
while(true){
if((i__26324__auto___43265 < len__26323__auto___43264)){
args43261.push((arguments[i__26324__auto___43265]));

var G__43266 = (i__26324__auto___43265 + (1));
i__26324__auto___43265 = G__43266;
continue;
} else {
}
break;
}

var G__43263 = args43261.length;
switch (G__43263) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43261.length)].join('')));

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
var args43268 = [];
var len__26323__auto___43319 = arguments.length;
var i__26324__auto___43320 = (0);
while(true){
if((i__26324__auto___43320 < len__26323__auto___43319)){
args43268.push((arguments[i__26324__auto___43320]));

var G__43321 = (i__26324__auto___43320 + (1));
i__26324__auto___43320 = G__43321;
continue;
} else {
}
break;
}

var G__43270 = args43268.length;
switch (G__43270) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43268.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28419__auto___43323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28419__auto___43323,out){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (c__28419__auto___43323,out){
return (function (state_43294){
var state_val_43295 = (state_43294[(1)]);
if((state_val_43295 === (7))){
var inst_43289 = (state_43294[(2)]);
var state_43294__$1 = state_43294;
var statearr_43296_43324 = state_43294__$1;
(statearr_43296_43324[(2)] = inst_43289);

(statearr_43296_43324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43295 === (1))){
var inst_43271 = null;
var state_43294__$1 = (function (){var statearr_43297 = state_43294;
(statearr_43297[(7)] = inst_43271);

return statearr_43297;
})();
var statearr_43298_43325 = state_43294__$1;
(statearr_43298_43325[(2)] = null);

(statearr_43298_43325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43295 === (4))){
var inst_43274 = (state_43294[(8)]);
var inst_43274__$1 = (state_43294[(2)]);
var inst_43275 = (inst_43274__$1 == null);
var inst_43276 = cljs.core.not.call(null,inst_43275);
var state_43294__$1 = (function (){var statearr_43299 = state_43294;
(statearr_43299[(8)] = inst_43274__$1);

return statearr_43299;
})();
if(inst_43276){
var statearr_43300_43326 = state_43294__$1;
(statearr_43300_43326[(1)] = (5));

} else {
var statearr_43301_43327 = state_43294__$1;
(statearr_43301_43327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43295 === (6))){
var state_43294__$1 = state_43294;
var statearr_43302_43328 = state_43294__$1;
(statearr_43302_43328[(2)] = null);

(statearr_43302_43328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43295 === (3))){
var inst_43291 = (state_43294[(2)]);
var inst_43292 = cljs.core.async.close_BANG_.call(null,out);
var state_43294__$1 = (function (){var statearr_43303 = state_43294;
(statearr_43303[(9)] = inst_43291);

return statearr_43303;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43294__$1,inst_43292);
} else {
if((state_val_43295 === (2))){
var state_43294__$1 = state_43294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43294__$1,(4),ch);
} else {
if((state_val_43295 === (11))){
var inst_43274 = (state_43294[(8)]);
var inst_43283 = (state_43294[(2)]);
var inst_43271 = inst_43274;
var state_43294__$1 = (function (){var statearr_43304 = state_43294;
(statearr_43304[(10)] = inst_43283);

(statearr_43304[(7)] = inst_43271);

return statearr_43304;
})();
var statearr_43305_43329 = state_43294__$1;
(statearr_43305_43329[(2)] = null);

(statearr_43305_43329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43295 === (9))){
var inst_43274 = (state_43294[(8)]);
var state_43294__$1 = state_43294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43294__$1,(11),out,inst_43274);
} else {
if((state_val_43295 === (5))){
var inst_43274 = (state_43294[(8)]);
var inst_43271 = (state_43294[(7)]);
var inst_43278 = cljs.core._EQ_.call(null,inst_43274,inst_43271);
var state_43294__$1 = state_43294;
if(inst_43278){
var statearr_43307_43330 = state_43294__$1;
(statearr_43307_43330[(1)] = (8));

} else {
var statearr_43308_43331 = state_43294__$1;
(statearr_43308_43331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43295 === (10))){
var inst_43286 = (state_43294[(2)]);
var state_43294__$1 = state_43294;
var statearr_43309_43332 = state_43294__$1;
(statearr_43309_43332[(2)] = inst_43286);

(statearr_43309_43332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43295 === (8))){
var inst_43271 = (state_43294[(7)]);
var tmp43306 = inst_43271;
var inst_43271__$1 = tmp43306;
var state_43294__$1 = (function (){var statearr_43310 = state_43294;
(statearr_43310[(7)] = inst_43271__$1);

return statearr_43310;
})();
var statearr_43311_43333 = state_43294__$1;
(statearr_43311_43333[(2)] = null);

(statearr_43311_43333[(1)] = (2));


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
});})(c__28419__auto___43323,out))
;
return ((function (switch__28354__auto__,c__28419__auto___43323,out){
return (function() {
var cljs$core$async$state_machine__28355__auto__ = null;
var cljs$core$async$state_machine__28355__auto____0 = (function (){
var statearr_43315 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43315[(0)] = cljs$core$async$state_machine__28355__auto__);

(statearr_43315[(1)] = (1));

return statearr_43315;
});
var cljs$core$async$state_machine__28355__auto____1 = (function (state_43294){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_43294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e43316){if((e43316 instanceof Object)){
var ex__28358__auto__ = e43316;
var statearr_43317_43334 = state_43294;
(statearr_43317_43334[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43335 = state_43294;
state_43294 = G__43335;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
cljs$core$async$state_machine__28355__auto__ = function(state_43294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28355__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28355__auto____1.call(this,state_43294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28355__auto____0;
cljs$core$async$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28355__auto____1;
return cljs$core$async$state_machine__28355__auto__;
})()
;})(switch__28354__auto__,c__28419__auto___43323,out))
})();
var state__28421__auto__ = (function (){var statearr_43318 = f__28420__auto__.call(null);
(statearr_43318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto___43323);

return statearr_43318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(c__28419__auto___43323,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args43336 = [];
var len__26323__auto___43406 = arguments.length;
var i__26324__auto___43407 = (0);
while(true){
if((i__26324__auto___43407 < len__26323__auto___43406)){
args43336.push((arguments[i__26324__auto___43407]));

var G__43408 = (i__26324__auto___43407 + (1));
i__26324__auto___43407 = G__43408;
continue;
} else {
}
break;
}

var G__43338 = args43336.length;
switch (G__43338) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43336.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28419__auto___43410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28419__auto___43410,out){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (c__28419__auto___43410,out){
return (function (state_43376){
var state_val_43377 = (state_43376[(1)]);
if((state_val_43377 === (7))){
var inst_43372 = (state_43376[(2)]);
var state_43376__$1 = state_43376;
var statearr_43378_43411 = state_43376__$1;
(statearr_43378_43411[(2)] = inst_43372);

(statearr_43378_43411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43377 === (1))){
var inst_43339 = (new Array(n));
var inst_43340 = inst_43339;
var inst_43341 = (0);
var state_43376__$1 = (function (){var statearr_43379 = state_43376;
(statearr_43379[(7)] = inst_43340);

(statearr_43379[(8)] = inst_43341);

return statearr_43379;
})();
var statearr_43380_43412 = state_43376__$1;
(statearr_43380_43412[(2)] = null);

(statearr_43380_43412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43377 === (4))){
var inst_43344 = (state_43376[(9)]);
var inst_43344__$1 = (state_43376[(2)]);
var inst_43345 = (inst_43344__$1 == null);
var inst_43346 = cljs.core.not.call(null,inst_43345);
var state_43376__$1 = (function (){var statearr_43381 = state_43376;
(statearr_43381[(9)] = inst_43344__$1);

return statearr_43381;
})();
if(inst_43346){
var statearr_43382_43413 = state_43376__$1;
(statearr_43382_43413[(1)] = (5));

} else {
var statearr_43383_43414 = state_43376__$1;
(statearr_43383_43414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43377 === (15))){
var inst_43366 = (state_43376[(2)]);
var state_43376__$1 = state_43376;
var statearr_43384_43415 = state_43376__$1;
(statearr_43384_43415[(2)] = inst_43366);

(statearr_43384_43415[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43377 === (13))){
var state_43376__$1 = state_43376;
var statearr_43385_43416 = state_43376__$1;
(statearr_43385_43416[(2)] = null);

(statearr_43385_43416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43377 === (6))){
var inst_43341 = (state_43376[(8)]);
var inst_43362 = (inst_43341 > (0));
var state_43376__$1 = state_43376;
if(cljs.core.truth_(inst_43362)){
var statearr_43386_43417 = state_43376__$1;
(statearr_43386_43417[(1)] = (12));

} else {
var statearr_43387_43418 = state_43376__$1;
(statearr_43387_43418[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43377 === (3))){
var inst_43374 = (state_43376[(2)]);
var state_43376__$1 = state_43376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43376__$1,inst_43374);
} else {
if((state_val_43377 === (12))){
var inst_43340 = (state_43376[(7)]);
var inst_43364 = cljs.core.vec.call(null,inst_43340);
var state_43376__$1 = state_43376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43376__$1,(15),out,inst_43364);
} else {
if((state_val_43377 === (2))){
var state_43376__$1 = state_43376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43376__$1,(4),ch);
} else {
if((state_val_43377 === (11))){
var inst_43356 = (state_43376[(2)]);
var inst_43357 = (new Array(n));
var inst_43340 = inst_43357;
var inst_43341 = (0);
var state_43376__$1 = (function (){var statearr_43388 = state_43376;
(statearr_43388[(7)] = inst_43340);

(statearr_43388[(8)] = inst_43341);

(statearr_43388[(10)] = inst_43356);

return statearr_43388;
})();
var statearr_43389_43419 = state_43376__$1;
(statearr_43389_43419[(2)] = null);

(statearr_43389_43419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43377 === (9))){
var inst_43340 = (state_43376[(7)]);
var inst_43354 = cljs.core.vec.call(null,inst_43340);
var state_43376__$1 = state_43376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43376__$1,(11),out,inst_43354);
} else {
if((state_val_43377 === (5))){
var inst_43344 = (state_43376[(9)]);
var inst_43340 = (state_43376[(7)]);
var inst_43349 = (state_43376[(11)]);
var inst_43341 = (state_43376[(8)]);
var inst_43348 = (inst_43340[inst_43341] = inst_43344);
var inst_43349__$1 = (inst_43341 + (1));
var inst_43350 = (inst_43349__$1 < n);
var state_43376__$1 = (function (){var statearr_43390 = state_43376;
(statearr_43390[(11)] = inst_43349__$1);

(statearr_43390[(12)] = inst_43348);

return statearr_43390;
})();
if(cljs.core.truth_(inst_43350)){
var statearr_43391_43420 = state_43376__$1;
(statearr_43391_43420[(1)] = (8));

} else {
var statearr_43392_43421 = state_43376__$1;
(statearr_43392_43421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43377 === (14))){
var inst_43369 = (state_43376[(2)]);
var inst_43370 = cljs.core.async.close_BANG_.call(null,out);
var state_43376__$1 = (function (){var statearr_43394 = state_43376;
(statearr_43394[(13)] = inst_43369);

return statearr_43394;
})();
var statearr_43395_43422 = state_43376__$1;
(statearr_43395_43422[(2)] = inst_43370);

(statearr_43395_43422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43377 === (10))){
var inst_43360 = (state_43376[(2)]);
var state_43376__$1 = state_43376;
var statearr_43396_43423 = state_43376__$1;
(statearr_43396_43423[(2)] = inst_43360);

(statearr_43396_43423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43377 === (8))){
var inst_43340 = (state_43376[(7)]);
var inst_43349 = (state_43376[(11)]);
var tmp43393 = inst_43340;
var inst_43340__$1 = tmp43393;
var inst_43341 = inst_43349;
var state_43376__$1 = (function (){var statearr_43397 = state_43376;
(statearr_43397[(7)] = inst_43340__$1);

(statearr_43397[(8)] = inst_43341);

return statearr_43397;
})();
var statearr_43398_43424 = state_43376__$1;
(statearr_43398_43424[(2)] = null);

(statearr_43398_43424[(1)] = (2));


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
});})(c__28419__auto___43410,out))
;
return ((function (switch__28354__auto__,c__28419__auto___43410,out){
return (function() {
var cljs$core$async$state_machine__28355__auto__ = null;
var cljs$core$async$state_machine__28355__auto____0 = (function (){
var statearr_43402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43402[(0)] = cljs$core$async$state_machine__28355__auto__);

(statearr_43402[(1)] = (1));

return statearr_43402;
});
var cljs$core$async$state_machine__28355__auto____1 = (function (state_43376){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_43376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e43403){if((e43403 instanceof Object)){
var ex__28358__auto__ = e43403;
var statearr_43404_43425 = state_43376;
(statearr_43404_43425[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43426 = state_43376;
state_43376 = G__43426;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
cljs$core$async$state_machine__28355__auto__ = function(state_43376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28355__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28355__auto____1.call(this,state_43376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28355__auto____0;
cljs$core$async$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28355__auto____1;
return cljs$core$async$state_machine__28355__auto__;
})()
;})(switch__28354__auto__,c__28419__auto___43410,out))
})();
var state__28421__auto__ = (function (){var statearr_43405 = f__28420__auto__.call(null);
(statearr_43405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto___43410);

return statearr_43405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(c__28419__auto___43410,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args43427 = [];
var len__26323__auto___43501 = arguments.length;
var i__26324__auto___43502 = (0);
while(true){
if((i__26324__auto___43502 < len__26323__auto___43501)){
args43427.push((arguments[i__26324__auto___43502]));

var G__43503 = (i__26324__auto___43502 + (1));
i__26324__auto___43502 = G__43503;
continue;
} else {
}
break;
}

var G__43429 = args43427.length;
switch (G__43429) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43427.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28419__auto___43505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28419__auto___43505,out){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (c__28419__auto___43505,out){
return (function (state_43471){
var state_val_43472 = (state_43471[(1)]);
if((state_val_43472 === (7))){
var inst_43467 = (state_43471[(2)]);
var state_43471__$1 = state_43471;
var statearr_43473_43506 = state_43471__$1;
(statearr_43473_43506[(2)] = inst_43467);

(statearr_43473_43506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43472 === (1))){
var inst_43430 = [];
var inst_43431 = inst_43430;
var inst_43432 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43471__$1 = (function (){var statearr_43474 = state_43471;
(statearr_43474[(7)] = inst_43431);

(statearr_43474[(8)] = inst_43432);

return statearr_43474;
})();
var statearr_43475_43507 = state_43471__$1;
(statearr_43475_43507[(2)] = null);

(statearr_43475_43507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43472 === (4))){
var inst_43435 = (state_43471[(9)]);
var inst_43435__$1 = (state_43471[(2)]);
var inst_43436 = (inst_43435__$1 == null);
var inst_43437 = cljs.core.not.call(null,inst_43436);
var state_43471__$1 = (function (){var statearr_43476 = state_43471;
(statearr_43476[(9)] = inst_43435__$1);

return statearr_43476;
})();
if(inst_43437){
var statearr_43477_43508 = state_43471__$1;
(statearr_43477_43508[(1)] = (5));

} else {
var statearr_43478_43509 = state_43471__$1;
(statearr_43478_43509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43472 === (15))){
var inst_43461 = (state_43471[(2)]);
var state_43471__$1 = state_43471;
var statearr_43479_43510 = state_43471__$1;
(statearr_43479_43510[(2)] = inst_43461);

(statearr_43479_43510[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43472 === (13))){
var state_43471__$1 = state_43471;
var statearr_43480_43511 = state_43471__$1;
(statearr_43480_43511[(2)] = null);

(statearr_43480_43511[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43472 === (6))){
var inst_43431 = (state_43471[(7)]);
var inst_43456 = inst_43431.length;
var inst_43457 = (inst_43456 > (0));
var state_43471__$1 = state_43471;
if(cljs.core.truth_(inst_43457)){
var statearr_43481_43512 = state_43471__$1;
(statearr_43481_43512[(1)] = (12));

} else {
var statearr_43482_43513 = state_43471__$1;
(statearr_43482_43513[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43472 === (3))){
var inst_43469 = (state_43471[(2)]);
var state_43471__$1 = state_43471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43471__$1,inst_43469);
} else {
if((state_val_43472 === (12))){
var inst_43431 = (state_43471[(7)]);
var inst_43459 = cljs.core.vec.call(null,inst_43431);
var state_43471__$1 = state_43471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43471__$1,(15),out,inst_43459);
} else {
if((state_val_43472 === (2))){
var state_43471__$1 = state_43471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43471__$1,(4),ch);
} else {
if((state_val_43472 === (11))){
var inst_43439 = (state_43471[(10)]);
var inst_43435 = (state_43471[(9)]);
var inst_43449 = (state_43471[(2)]);
var inst_43450 = [];
var inst_43451 = inst_43450.push(inst_43435);
var inst_43431 = inst_43450;
var inst_43432 = inst_43439;
var state_43471__$1 = (function (){var statearr_43483 = state_43471;
(statearr_43483[(7)] = inst_43431);

(statearr_43483[(8)] = inst_43432);

(statearr_43483[(11)] = inst_43449);

(statearr_43483[(12)] = inst_43451);

return statearr_43483;
})();
var statearr_43484_43514 = state_43471__$1;
(statearr_43484_43514[(2)] = null);

(statearr_43484_43514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43472 === (9))){
var inst_43431 = (state_43471[(7)]);
var inst_43447 = cljs.core.vec.call(null,inst_43431);
var state_43471__$1 = state_43471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43471__$1,(11),out,inst_43447);
} else {
if((state_val_43472 === (5))){
var inst_43439 = (state_43471[(10)]);
var inst_43435 = (state_43471[(9)]);
var inst_43432 = (state_43471[(8)]);
var inst_43439__$1 = f.call(null,inst_43435);
var inst_43440 = cljs.core._EQ_.call(null,inst_43439__$1,inst_43432);
var inst_43441 = cljs.core.keyword_identical_QMARK_.call(null,inst_43432,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43442 = (inst_43440) || (inst_43441);
var state_43471__$1 = (function (){var statearr_43485 = state_43471;
(statearr_43485[(10)] = inst_43439__$1);

return statearr_43485;
})();
if(cljs.core.truth_(inst_43442)){
var statearr_43486_43515 = state_43471__$1;
(statearr_43486_43515[(1)] = (8));

} else {
var statearr_43487_43516 = state_43471__$1;
(statearr_43487_43516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43472 === (14))){
var inst_43464 = (state_43471[(2)]);
var inst_43465 = cljs.core.async.close_BANG_.call(null,out);
var state_43471__$1 = (function (){var statearr_43489 = state_43471;
(statearr_43489[(13)] = inst_43464);

return statearr_43489;
})();
var statearr_43490_43517 = state_43471__$1;
(statearr_43490_43517[(2)] = inst_43465);

(statearr_43490_43517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43472 === (10))){
var inst_43454 = (state_43471[(2)]);
var state_43471__$1 = state_43471;
var statearr_43491_43518 = state_43471__$1;
(statearr_43491_43518[(2)] = inst_43454);

(statearr_43491_43518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43472 === (8))){
var inst_43431 = (state_43471[(7)]);
var inst_43439 = (state_43471[(10)]);
var inst_43435 = (state_43471[(9)]);
var inst_43444 = inst_43431.push(inst_43435);
var tmp43488 = inst_43431;
var inst_43431__$1 = tmp43488;
var inst_43432 = inst_43439;
var state_43471__$1 = (function (){var statearr_43492 = state_43471;
(statearr_43492[(7)] = inst_43431__$1);

(statearr_43492[(14)] = inst_43444);

(statearr_43492[(8)] = inst_43432);

return statearr_43492;
})();
var statearr_43493_43519 = state_43471__$1;
(statearr_43493_43519[(2)] = null);

(statearr_43493_43519[(1)] = (2));


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
});})(c__28419__auto___43505,out))
;
return ((function (switch__28354__auto__,c__28419__auto___43505,out){
return (function() {
var cljs$core$async$state_machine__28355__auto__ = null;
var cljs$core$async$state_machine__28355__auto____0 = (function (){
var statearr_43497 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43497[(0)] = cljs$core$async$state_machine__28355__auto__);

(statearr_43497[(1)] = (1));

return statearr_43497;
});
var cljs$core$async$state_machine__28355__auto____1 = (function (state_43471){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_43471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e43498){if((e43498 instanceof Object)){
var ex__28358__auto__ = e43498;
var statearr_43499_43520 = state_43471;
(statearr_43499_43520[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43521 = state_43471;
state_43471 = G__43521;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
cljs$core$async$state_machine__28355__auto__ = function(state_43471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28355__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28355__auto____1.call(this,state_43471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28355__auto____0;
cljs$core$async$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28355__auto____1;
return cljs$core$async$state_machine__28355__auto__;
})()
;})(switch__28354__auto__,c__28419__auto___43505,out))
})();
var state__28421__auto__ = (function (){var statearr_43500 = f__28420__auto__.call(null);
(statearr_43500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto___43505);

return statearr_43500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(c__28419__auto___43505,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map