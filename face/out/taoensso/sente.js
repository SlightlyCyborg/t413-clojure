// Compiled by ClojureScript 1.7.170 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('clojure.string');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(11),(0)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.11);
}
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281);
} else {
var vec__44010 = x;
var ev_id = cljs.core.nth.call(null,vec__44010,(0),null);
var _ = cljs.core.nth.call(null,vec__44010,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772);
} else {
return null;

}
}

}
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
if(cljs.core.truth_(taoensso.sente.event_QMARK_.call(null,x))){
return x;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
}
});
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__4657__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var _QMARK_err = temp__4657__auto__;
var err_fmt = [cljs.core.str((function (){var G__44012 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__44012) {
case "wrong-type":
return "Malformed event (wrong type).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-id-type":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "else":
return "Malformed event (unknown error).";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(_QMARK_err)].join('')));

}
})()),cljs.core.str(" Event should be of `[ev-id ?ev-data]` form: %s")].join('');
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,err_fmt,[cljs.core.str(x)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"malformed-event","malformed-event",-2090896605),x], null));
} else {
return null;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__25253__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__25253__auto__){
var and__25253__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__25253__auto____$1)){
var map__44016 = x;
var map__44016__$1 = ((((!((map__44016 == null)))?((((map__44016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44016):map__44016);
var ch_recv = cljs.core.get.call(null,map__44016__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__44016__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__44016__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__44016__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__25253__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__25253__auto____$2)){
var and__25253__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__25253__auto____$3){
var and__25253__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(cljs.core.truth_(and__25253__auto____$4)){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__25253__auto____$4;
}
} else {
return and__25253__auto____$3;
}
} else {
return and__25253__auto____$2;
}
} else {
return and__25253__auto____$1;
}
} else {
return and__25253__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__25253__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__25253__auto__){
var and__25253__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__25253__auto____$1)){
var map__44020 = x;
var map__44020__$1 = ((((!((map__44020 == null)))?((((map__44020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44020):map__44020);
var ch_recv = cljs.core.get.call(null,map__44020__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__44020__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__44020__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__44020__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__44020__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__44020__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__44020__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__25253__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__25253__auto____$2)){
var and__25253__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__25253__auto____$3){
var and__25253__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(cljs.core.truth_(and__25253__auto____$4)){
var and__25253__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__25253__auto____$5){
var and__25253__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(cljs.core.truth_(and__25253__auto____$6)){
var and__25253__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__25253__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__25253__auto____$7;
}
} else {
return and__25253__auto____$6;
}
} else {
return and__25253__auto____$5;
}
} else {
return and__25253__auto____$4;
}
} else {
return and__25253__auto____$3;
}
} else {
return and__25253__auto____$2;
}
} else {
return and__25253__auto____$1;
}
} else {
return and__25253__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__44022){
var map__44026 = p__44022;
var map__44026__$1 = ((((!((map__44026 == null)))?((((map__44026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44026):map__44026);
var ev_msg = map__44026__$1;
var event = cljs.core.get.call(null,map__44026__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__44026__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__44028 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__44028,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__44028,(1),null);
var valid_event = vec__44028;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (vec__44028,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__44026,map__44026__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__44028,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__44026,map__44026__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null);
} else {
return cljs.core.async.put_BANG_.call(null,ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj);
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,taoensso.sente.cb_error_QMARK_.call(null,cb_reply_clj));
});
/**
 * pstr->clj
 */
taoensso.sente.unpack_STAR_ = (function taoensso$sente$unpack_STAR_(packer,pstr){
try{return taoensso.sente.interfaces.unpack.call(null,packer,(function (){var __x = pstr;
try{if(typeof __x === 'string'){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e44032){if((e44032 instanceof Error)){
var __t = e44032;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? pstr)",__x,__t,null);
} else {
throw e44032;

}
}})());
}catch (e44031){var t = e44031;
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (t){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t))
,null)),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack_STAR_ = (function taoensso$sente$pack_STAR_(var_args){
var args44033 = [];
var len__26323__auto___44036 = arguments.length;
var i__26324__auto___44037 = (0);
while(true){
if((i__26324__auto___44037 < len__26323__auto___44036)){
args44033.push((arguments[i__26324__auto___44037]));

var G__44038 = (i__26324__auto___44037 + (1));
i__26324__auto___44037 = G__44038;
continue;
} else {
}
break;
}

var G__44035 = args44033.length;
switch (G__44035) {
case 3:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44033.length)].join('')));

}
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
return [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
return [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$lang$maxFixedArity = 4;
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var args__26330__auto__ = [];
var len__26323__auto___44041 = arguments.length;
var i__26324__auto___44042 = (0);
while(true){
if((i__26324__auto___44042 < len__26323__auto___44041)){
args__26330__auto__.push((arguments[i__26324__auto___44042]));

var G__44043 = (i__26324__auto___44042 + (1));
i__26324__auto___44042 = G__44043;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((0) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((0)),(0))):null);
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(argseq__26331__auto__);
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing: %s -> %s",args,pstr], null);
});})(pstr))
,null)),null);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = (0);

taoensso.sente.pack.cljs$lang$applyTo = (function (seq44040){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44040));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
var __x_44050 = prefixed_pstr;
try{if(typeof __x_44050 === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e44047){if((e44047 instanceof Error)){
var __t_44051 = e44047;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? prefixed-pstr)",__x_44050,__t_44051,null);
} else {
throw e44047;

}
}
var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__44049 = prefix;
switch (G__44049) {
case "-":
return false;

break;
case "+":
return true;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(prefix)].join('')));

}
})();
var vec__44048 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__44048,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__44048,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (prefix,pstr,clj,wrapped_QMARK_,vec__44048,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(prefix,pstr,clj,wrapped_QMARK_,vec__44048,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_;

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_;
/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation (experimental).
 * 
 *   [1] e.g. `taoensso.sente.server-adapters.http-kit/http-kit-adapter` or
 *         `taoensso.sente.server-adapters.immutant/immutant-adapter`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__26330__auto__ = [];
var len__26323__auto___44222 = arguments.length;
var i__26324__auto___44223 = (0);
while(true){
if((i__26324__auto___44223 < len__26323__auto___44222)){
args__26330__auto__.push((arguments[i__26324__auto___44223]));

var G__44224 = (i__26324__auto___44223 + (1));
i__26324__auto___44223 = G__44224;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_adapter,p__44056){
var vec__44057 = p__44056;
var map__44058 = cljs.core.nth.call(null,vec__44057,(0),null);
var map__44058__$1 = ((((!((map__44058 == null)))?((((map__44058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44058):map__44058);
var recv_buf_or_n = cljs.core.get.call(null,map__44058__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__44058__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__44058__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__44058__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__44058__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__25265__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
var or__25265__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__25265__auto____$1)){
return or__25265__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__44058__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__44058__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var __x = send_buf_ms_ajax;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e44060){if((e44060 instanceof Error)){
var __t = e44060;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ajax)",__x,__t,null);
} else {
throw e44060;

}
}})(),(function (){var __x = send_buf_ms_ws;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e44061){if((e44061 instanceof Error)){
var __t = e44061;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",__x,__t,null);
} else {
throw e44061;

}
}})()], null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol("enc","pos-int?","enc/pos-int?",-1205796829,null),new cljs.core.Symbol(null,"send-buf-ms-ajax","send-buf-ms-ajax",-1108306732,null),new cljs.core.Symbol(null,"send-buf-ms-ws","send-buf-ms-ws",490945289,null))))].join('')));
}

if(cljs.core.truth_((function (){var __x = web_server_adapter;
try{if(((function (__x,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__44053_SHARP_){
if(!((p1__44053_SHARP_ == null))){
if((false) || (p1__44053_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__44053_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__44053_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__44053_SHARP_);
}
});})(__x,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e44062){if((e44062 instanceof Error)){
var __t = e44062;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__44053#] (satisfies? interfaces/IServerChanAdapter p1__44053#)) web-server-adapter)",__x,__t,null);
} else {
throw e44062;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__44053#","p1__44053#",744598900,null)], null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol("interfaces","IServerChanAdapter","interfaces/IServerChanAdapter",-455981296,null),new cljs.core.Symbol(null,"p1__44053#","p1__44053#",744598900,null))),new cljs.core.Symbol(null,"web-server-adapter","web-server-adapter",-1122606046,null))))].join('')));
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var user_id_fn__$1 = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__25265__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type,uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e44064){if((e44064 instanceof Error)){
var __t = e44064;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.encore/nnil? uid)",__x,__t,null);
} else {
throw e44064;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"uid","uid",192762127,null))))].join('')));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__44065){
var map__44066 = p__44065;
var map__44066__$1 = ((((!((map__44066 == null)))?((((map__44066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44066):map__44066);
var old_m = map__44066__$1;
var ws = cljs.core.get.call(null,map__44066__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__44066__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__44066__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__44068 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__44068) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.call(null,ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.call(null,ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((!(cljs.core.contains_QMARK_.call(null,old_any,uid))) && (cljs.core.contains_QMARK_.call(null,new_any,uid))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e44069){if((e44069 instanceof Error)){
var __t = e44069;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.encore/nnil? uid)",__x,__t,null);
} else {
throw e44069;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"uid","uid",192762127,null))))].join('')));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__44070){
var map__44071 = p__44070;
var map__44071__$1 = ((((!((map__44071 == null)))?((((map__44071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44071):map__44071);
var old_m = map__44071__$1;
var ws = cljs.core.get.call(null,map__44071__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__44071__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__44071__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref.call(null,conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.call(null,ws,uid):cljs.core.disj.call(null,ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.call(null,ajax,uid):cljs.core.disj.call(null,ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.call(null,any,uid):cljs.core.disj.call(null,any,uid))], null);
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_.call(null,old_any,uid)) && (!(cljs.core.contains_QMARK_.call(null,new_any,uid)))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__44226__delegate = function (user_id,ev,p__44073){
var vec__44074 = p__44073;
var map__44075 = cljs.core.nth.call(null,vec__44074,(0),null);
var map__44075__$1 = ((((!((map__44075 == null)))?((((map__44075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44075):map__44075);
var opts = map__44075__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__44075__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_44227 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __44228 = taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (uid_44227,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_44227,ev], null);
});})(uid_44227,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);
var __44229__$1 = (cljs.core.truth_(uid_44227)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"uid","uid",192762127,null)))].join('')))})());
var __44230__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_44231 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__44232 = ((function (uid_44227,__44228,__44229__$1,__44230__$2,ev_uuid_44231,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type){
var temp__4657__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),((function (uid_44227,__44228,__44229__$1,__44230__$2,ev_uuid_44231,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__44077 = cljs.core.get.call(null,m,uid_44227);
var ___$3 = cljs.core.nth.call(null,vec__44077,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__44077,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_44231)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_44227),cljs.core.get.call(null,m,uid_44227));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_44227,__44228,__44229__$1,__44230__$2,ev_uuid_44231,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4657__auto__)){
var pulled = temp__4657__auto__;
var vec__44078 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__44078,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__44078,(1),null);
var __x_44233 = buffered_evs;
try{if(cljs.core.vector_QMARK_.call(null,__x_44233)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e44079){if((e44079 instanceof Error)){
var __t_44234 = e44079;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? buffered-evs)",__x_44233,__t_44234,null);
} else {
throw e44079;

}
}
var __x_44235 = ev_uuids;
try{if(cljs.core.set_QMARK_.call(null,__x_44235)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e44080){if((e44080 instanceof Error)){
var __t_44236 = e44080;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(set? ev-uuids)",__x_44235,__t_44236,null);
} else {
throw e44080;

}
}
var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__44078,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_44227,__44228,__44229__$1,__44230__$2,ev_uuid_44231,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__44078,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_44227,__44228,__44229__$1,__44230__$2,ev_uuid_44231,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var G__44081 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__44081) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_44227,buffered_evs_ppstr);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_44227,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
} else {
return null;
}
});})(uid_44227,__44228,__44229__$1,__44230__$2,ev_uuid_44231,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (uid_44227,__44228,__44229__$1,__44230__$2,ev_uuid_44231,flush_buffer_BANG__44232,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_44227], null);
});})(uid_44227,__44228,__44229__$1,__44230__$2,ev_uuid_44231,flush_buffer_BANG__44232,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

if(cljs.core.truth_(flush_QMARK_)){
var seq__44082_44238 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__44083_44239 = null;
var count__44084_44240 = (0);
var i__44085_44241 = (0);
while(true){
if((i__44085_44241 < count__44084_44240)){
var type_44242 = cljs.core._nth.call(null,chunk__44083_44239,i__44085_44241);
flush_buffer_BANG__44232.call(null,type_44242);

var G__44243 = seq__44082_44238;
var G__44244 = chunk__44083_44239;
var G__44245 = count__44084_44240;
var G__44246 = (i__44085_44241 + (1));
seq__44082_44238 = G__44243;
chunk__44083_44239 = G__44244;
count__44084_44240 = G__44245;
i__44085_44241 = G__44246;
continue;
} else {
var temp__4657__auto___44247 = cljs.core.seq.call(null,seq__44082_44238);
if(temp__4657__auto___44247){
var seq__44082_44248__$1 = temp__4657__auto___44247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44082_44248__$1)){
var c__26068__auto___44249 = cljs.core.chunk_first.call(null,seq__44082_44248__$1);
var G__44250 = cljs.core.chunk_rest.call(null,seq__44082_44248__$1);
var G__44251 = c__26068__auto___44249;
var G__44252 = cljs.core.count.call(null,c__26068__auto___44249);
var G__44253 = (0);
seq__44082_44238 = G__44250;
chunk__44083_44239 = G__44251;
count__44084_44240 = G__44252;
i__44085_44241 = G__44253;
continue;
} else {
var type_44254 = cljs.core.first.call(null,seq__44082_44248__$1);
flush_buffer_BANG__44232.call(null,type_44254);

var G__44255 = cljs.core.next.call(null,seq__44082_44248__$1);
var G__44256 = null;
var G__44257 = (0);
var G__44258 = (0);
seq__44082_44238 = G__44255;
chunk__44083_44239 = G__44256;
count__44084_44240 = G__44257;
i__44085_44241 = G__44258;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__44086_44259 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_44227], null))));
var chunk__44087_44260 = null;
var count__44088_44261 = (0);
var i__44089_44262 = (0);
while(true){
if((i__44089_44262 < count__44088_44261)){
var server_ch_44263 = cljs.core._nth.call(null,chunk__44087_44260,i__44089_44262);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_44263);

var G__44264 = seq__44086_44259;
var G__44265 = chunk__44087_44260;
var G__44266 = count__44088_44261;
var G__44267 = (i__44089_44262 + (1));
seq__44086_44259 = G__44264;
chunk__44087_44260 = G__44265;
count__44088_44261 = G__44266;
i__44089_44262 = G__44267;
continue;
} else {
var temp__4657__auto___44268 = cljs.core.seq.call(null,seq__44086_44259);
if(temp__4657__auto___44268){
var seq__44086_44269__$1 = temp__4657__auto___44268;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44086_44269__$1)){
var c__26068__auto___44270 = cljs.core.chunk_first.call(null,seq__44086_44269__$1);
var G__44271 = cljs.core.chunk_rest.call(null,seq__44086_44269__$1);
var G__44272 = c__26068__auto___44270;
var G__44273 = cljs.core.count.call(null,c__26068__auto___44270);
var G__44274 = (0);
seq__44086_44259 = G__44271;
chunk__44087_44260 = G__44272;
count__44088_44261 = G__44273;
i__44089_44262 = G__44274;
continue;
} else {
var server_ch_44275 = cljs.core.first.call(null,seq__44086_44269__$1);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_44275);

var G__44276 = cljs.core.next.call(null,seq__44086_44269__$1);
var G__44277 = null;
var G__44278 = (0);
var G__44279 = (0);
seq__44086_44259 = G__44276;
chunk__44087_44260 = G__44277;
count__44088_44261 = G__44278;
i__44089_44262 = G__44279;
continue;
}
} else {
}
}
break;
}

var seq__44090_44280 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_44227], null))));
var chunk__44091_44281 = null;
var count__44092_44282 = (0);
var i__44093_44283 = (0);
while(true){
if((i__44093_44283 < count__44092_44282)){
var vec__44094_44284 = cljs.core._nth.call(null,chunk__44091_44281,i__44093_44283);
var _QMARK_server_ch_44285 = cljs.core.nth.call(null,vec__44094_44284,(0),null);
var __44286__$3 = cljs.core.nth.call(null,vec__44094_44284,(1),null);
var temp__4657__auto___44287 = _QMARK_server_ch_44285;
if(cljs.core.truth_(temp__4657__auto___44287)){
var server_ch_44288 = temp__4657__auto___44287;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_44288);
} else {
}

var G__44289 = seq__44090_44280;
var G__44290 = chunk__44091_44281;
var G__44291 = count__44092_44282;
var G__44292 = (i__44093_44283 + (1));
seq__44090_44280 = G__44289;
chunk__44091_44281 = G__44290;
count__44092_44282 = G__44291;
i__44093_44283 = G__44292;
continue;
} else {
var temp__4657__auto___44293 = cljs.core.seq.call(null,seq__44090_44280);
if(temp__4657__auto___44293){
var seq__44090_44294__$1 = temp__4657__auto___44293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44090_44294__$1)){
var c__26068__auto___44295 = cljs.core.chunk_first.call(null,seq__44090_44294__$1);
var G__44296 = cljs.core.chunk_rest.call(null,seq__44090_44294__$1);
var G__44297 = c__26068__auto___44295;
var G__44298 = cljs.core.count.call(null,c__26068__auto___44295);
var G__44299 = (0);
seq__44090_44280 = G__44296;
chunk__44091_44281 = G__44297;
count__44092_44282 = G__44298;
i__44093_44283 = G__44299;
continue;
} else {
var vec__44095_44300 = cljs.core.first.call(null,seq__44090_44294__$1);
var _QMARK_server_ch_44301 = cljs.core.nth.call(null,vec__44095_44300,(0),null);
var __44302__$3 = cljs.core.nth.call(null,vec__44095_44300,(1),null);
var temp__4657__auto___44303__$1 = _QMARK_server_ch_44301;
if(cljs.core.truth_(temp__4657__auto___44303__$1)){
var server_ch_44304 = temp__4657__auto___44303__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_44304);
} else {
}

var G__44305 = cljs.core.next.call(null,seq__44090_44294__$1);
var G__44306 = null;
var G__44307 = (0);
var G__44308 = (0);
seq__44090_44280 = G__44305;
chunk__44091_44281 = G__44306;
count__44092_44282 = G__44307;
i__44093_44283 = G__44308;
continue;
}
} else {
}
}
break;
}
} else {
var seq__44096_44309 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__44097_44310 = null;
var count__44098_44311 = (0);
var i__44099_44312 = (0);
while(true){
if((i__44099_44312 < count__44098_44311)){
var type_44313 = cljs.core._nth.call(null,chunk__44097_44310,i__44099_44312);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_44313,uid_44227], null),((function (seq__44096_44309,chunk__44097_44310,count__44098_44311,i__44099_44312,type_44313,uid_44227,__44228,__44229__$1,__44230__$2,ev_uuid_44231,flush_buffer_BANG__44232,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_44231], true)], null);
} else {
var vec__44100 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__44100,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__44100,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_44231)], null);
}
});})(seq__44096_44309,chunk__44097_44310,count__44098_44311,i__44099_44312,type_44313,uid_44227,__44228,__44229__$1,__44230__$2,ev_uuid_44231,flush_buffer_BANG__44232,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__44314 = seq__44096_44309;
var G__44315 = chunk__44097_44310;
var G__44316 = count__44098_44311;
var G__44317 = (i__44099_44312 + (1));
seq__44096_44309 = G__44314;
chunk__44097_44310 = G__44315;
count__44098_44311 = G__44316;
i__44099_44312 = G__44317;
continue;
} else {
var temp__4657__auto___44318 = cljs.core.seq.call(null,seq__44096_44309);
if(temp__4657__auto___44318){
var seq__44096_44319__$1 = temp__4657__auto___44318;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44096_44319__$1)){
var c__26068__auto___44320 = cljs.core.chunk_first.call(null,seq__44096_44319__$1);
var G__44321 = cljs.core.chunk_rest.call(null,seq__44096_44319__$1);
var G__44322 = c__26068__auto___44320;
var G__44323 = cljs.core.count.call(null,c__26068__auto___44320);
var G__44324 = (0);
seq__44096_44309 = G__44321;
chunk__44097_44310 = G__44322;
count__44098_44311 = G__44323;
i__44099_44312 = G__44324;
continue;
} else {
var type_44325 = cljs.core.first.call(null,seq__44096_44319__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_44325,uid_44227], null),((function (seq__44096_44309,chunk__44097_44310,count__44098_44311,i__44099_44312,type_44325,seq__44096_44319__$1,temp__4657__auto___44318,uid_44227,__44228,__44229__$1,__44230__$2,ev_uuid_44231,flush_buffer_BANG__44232,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_44231], true)], null);
} else {
var vec__44101 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__44101,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__44101,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_44231)], null);
}
});})(seq__44096_44309,chunk__44097_44310,count__44098_44311,i__44099_44312,type_44325,seq__44096_44319__$1,temp__4657__auto___44318,uid_44227,__44228,__44229__$1,__44230__$2,ev_uuid_44231,flush_buffer_BANG__44232,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__44326 = cljs.core.next.call(null,seq__44096_44319__$1);
var G__44327 = null;
var G__44328 = (0);
var G__44329 = (0);
seq__44096_44309 = G__44326;
chunk__44097_44310 = G__44327;
count__44098_44311 = G__44328;
i__44099_44312 = G__44329;
continue;
}
} else {
}
}
break;
}

var c__28419__auto___44330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28419__auto___44330,uid_44227,__44228,__44229__$1,__44230__$2,ev_uuid_44231,flush_buffer_BANG__44232,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (c__28419__auto___44330,uid_44227,__44228,__44229__$1,__44230__$2,ev_uuid_44231,flush_buffer_BANG__44232,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_44111){
var state_val_44112 = (state_44111[(1)]);
if((state_val_44112 === (1))){
var state_44111__$1 = state_44111;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_44113_44331 = state_44111__$1;
(statearr_44113_44331[(1)] = (2));

} else {
var statearr_44114_44332 = state_44111__$1;
(statearr_44114_44332[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44112 === (2))){
var state_44111__$1 = state_44111;
var statearr_44115_44333 = state_44111__$1;
(statearr_44115_44333[(2)] = null);

(statearr_44115_44333[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44112 === (3))){
var inst_44104 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var state_44111__$1 = state_44111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44111__$1,(5),inst_44104);
} else {
if((state_val_44112 === (4))){
var inst_44108 = (state_44111[(2)]);
var inst_44109 = flush_buffer_BANG__44232.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_44111__$1 = (function (){var statearr_44116 = state_44111;
(statearr_44116[(7)] = inst_44108);

return statearr_44116;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44111__$1,inst_44109);
} else {
if((state_val_44112 === (5))){
var inst_44106 = (state_44111[(2)]);
var state_44111__$1 = state_44111;
var statearr_44117_44334 = state_44111__$1;
(statearr_44117_44334[(2)] = inst_44106);

(statearr_44117_44334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__28419__auto___44330,uid_44227,__44228,__44229__$1,__44230__$2,ev_uuid_44231,flush_buffer_BANG__44232,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28354__auto__,c__28419__auto___44330,uid_44227,__44228,__44229__$1,__44230__$2,ev_uuid_44231,flush_buffer_BANG__44232,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28355__auto__ = null;
var taoensso$sente$state_machine__28355__auto____0 = (function (){
var statearr_44121 = [null,null,null,null,null,null,null,null];
(statearr_44121[(0)] = taoensso$sente$state_machine__28355__auto__);

(statearr_44121[(1)] = (1));

return statearr_44121;
});
var taoensso$sente$state_machine__28355__auto____1 = (function (state_44111){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_44111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e44122){if((e44122 instanceof Object)){
var ex__28358__auto__ = e44122;
var statearr_44123_44335 = state_44111;
(statearr_44123_44335[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44336 = state_44111;
state_44111 = G__44336;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
taoensso$sente$state_machine__28355__auto__ = function(state_44111){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28355__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28355__auto____1.call(this,state_44111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28355__auto____0;
taoensso$sente$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28355__auto____1;
return taoensso$sente$state_machine__28355__auto__;
})()
;})(switch__28354__auto__,c__28419__auto___44330,uid_44227,__44228,__44229__$1,__44230__$2,ev_uuid_44231,flush_buffer_BANG__44232,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__28421__auto__ = (function (){var statearr_44124 = f__28420__auto__.call(null);
(statearr_44124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto___44330);

return statearr_44124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(c__28419__auto___44330,uid_44227,__44228,__44229__$1,__44230__$2,ev_uuid_44231,flush_buffer_BANG__44232,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__28419__auto___44337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28419__auto___44337,uid_44227,__44228,__44229__$1,__44230__$2,ev_uuid_44231,flush_buffer_BANG__44232,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (c__28419__auto___44337,uid_44227,__44228,__44229__$1,__44230__$2,ev_uuid_44231,flush_buffer_BANG__44232,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_44134){
var state_val_44135 = (state_44134[(1)]);
if((state_val_44135 === (1))){
var state_44134__$1 = state_44134;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_44136_44338 = state_44134__$1;
(statearr_44136_44338[(1)] = (2));

} else {
var statearr_44137_44339 = state_44134__$1;
(statearr_44137_44339[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44135 === (2))){
var state_44134__$1 = state_44134;
var statearr_44138_44340 = state_44134__$1;
(statearr_44138_44340[(2)] = null);

(statearr_44138_44340[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44135 === (3))){
var inst_44127 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var state_44134__$1 = state_44134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44134__$1,(5),inst_44127);
} else {
if((state_val_44135 === (4))){
var inst_44131 = (state_44134[(2)]);
var inst_44132 = flush_buffer_BANG__44232.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_44134__$1 = (function (){var statearr_44139 = state_44134;
(statearr_44139[(7)] = inst_44131);

return statearr_44139;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44134__$1,inst_44132);
} else {
if((state_val_44135 === (5))){
var inst_44129 = (state_44134[(2)]);
var state_44134__$1 = state_44134;
var statearr_44140_44341 = state_44134__$1;
(statearr_44140_44341[(2)] = inst_44129);

(statearr_44140_44341[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__28419__auto___44337,uid_44227,__44228,__44229__$1,__44230__$2,ev_uuid_44231,flush_buffer_BANG__44232,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28354__auto__,c__28419__auto___44337,uid_44227,__44228,__44229__$1,__44230__$2,ev_uuid_44231,flush_buffer_BANG__44232,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28355__auto__ = null;
var taoensso$sente$state_machine__28355__auto____0 = (function (){
var statearr_44144 = [null,null,null,null,null,null,null,null];
(statearr_44144[(0)] = taoensso$sente$state_machine__28355__auto__);

(statearr_44144[(1)] = (1));

return statearr_44144;
});
var taoensso$sente$state_machine__28355__auto____1 = (function (state_44134){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_44134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e44145){if((e44145 instanceof Object)){
var ex__28358__auto__ = e44145;
var statearr_44146_44342 = state_44134;
(statearr_44146_44342[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44343 = state_44134;
state_44134 = G__44343;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
taoensso$sente$state_machine__28355__auto__ = function(state_44134){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28355__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28355__auto____1.call(this,state_44134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28355__auto____0;
taoensso$sente$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28355__auto____1;
return taoensso$sente$state_machine__28355__auto__;
})()
;})(switch__28354__auto__,c__28419__auto___44337,uid_44227,__44228,__44229__$1,__44230__$2,ev_uuid_44231,flush_buffer_BANG__44232,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__28421__auto__ = (function (){var statearr_44147 = f__28420__auto__.call(null);
(statearr_44147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto___44337);

return statearr_44147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(c__28419__auto___44337,uid_44227,__44228,__44229__$1,__44230__$2,ev_uuid_44231,flush_buffer_BANG__44232,vec__44074,map__44075,map__44075__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}

return null;
};
var G__44226 = function (user_id,ev,var_args){
var p__44073 = null;
if (arguments.length > 2) {
var G__44344__i = 0, G__44344__a = new Array(arguments.length -  2);
while (G__44344__i < G__44344__a.length) {G__44344__a[G__44344__i] = arguments[G__44344__i + 2]; ++G__44344__i;}
  p__44073 = new cljs.core.IndexedSeq(G__44344__a,0);
} 
return G__44226__delegate.call(this,user_id,ev,p__44073);};
G__44226.cljs$lang$maxFixedArity = 2;
G__44226.cljs$lang$applyTo = (function (arglist__44345){
var user_id = cljs.core.first(arglist__44345);
arglist__44345 = cljs.core.next(arglist__44345);
var ev = cljs.core.first(arglist__44345);
var p__44073 = cljs.core.rest(arglist__44345);
return G__44226__delegate(user_id,ev,p__44073);
});
G__44226.cljs$core$IFn$_invoke$arity$variadic = G__44226__delegate;
return G__44226;
})()
;})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__44148 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__44148,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__44148,(1),null);
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?((function (params,ppstr,client_id,vec__44148,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__44148,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): %s",resp_clj], null);
});})(params,ppstr,client_id,vec__44148,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
});})(params,ppstr,client_id,vec__44148,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
return null;
} else {
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__44148,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): dummy-cb-200"], null);
});})(params,ppstr,client_id,vec__44148,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337)),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var csrf_token = csrf_token_fn.call(null,ring_req);
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var websocket_QMARK_ = new cljs.core.Keyword(null,"websocket?","websocket?",1552493139).cljs$core$IFn$_invoke$arity$1(ring_req);
var receive_event_msg_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__44346__delegate = function (event,p__44149){
var vec__44150 = p__44149;
var _QMARK_reply_fn = cljs.core.nth.call(null,vec__44150,(0),null);
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
};
var G__44346 = function (event,var_args){
var p__44149 = null;
if (arguments.length > 1) {
var G__44347__i = 0, G__44347__a = new Array(arguments.length -  1);
while (G__44347__i < G__44347__a.length) {G__44347__a[G__44347__i] = arguments[G__44347__i + 1]; ++G__44347__i;}
  p__44149 = new cljs.core.IndexedSeq(G__44347__a,0);
} 
return G__44346__delegate.call(this,event,p__44149);};
G__44346.cljs$lang$maxFixedArity = 1;
G__44346.cljs$lang$applyTo = (function (arglist__44348){
var event = cljs.core.first(arglist__44348);
var p__44149 = cljs.core.rest(arglist__44348);
return G__44346__delegate(event,p__44149);
});
G__44346.cljs$core$IFn$_invoke$arity$variadic = G__44346__delegate;
return G__44346;
})()
;})(csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var handshake_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handshake!"], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = ((!((_QMARK_handshake_data == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev),cljs.core.not.call(null,websocket_QMARK_));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,[cljs.core.str(server_ch)].join('')], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

taoensso.encore.reset_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id], null),server_ch);

if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954)], null));
} else {
}

return handshake_BANG_.call(null,server_ch);
} else {
var initial_conn_from_client_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_ch,taoensso.encore.now_udt.call(null)], null),(_QMARK_v == null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
var handshake_QMARK_ = (function (){var or__25265__auto__ = initial_conn_from_client_QMARK_;
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954)], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return handshake_BANG_.call(null,server_ch);
} else {
return null;
}
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,req_ppstr){
var vec__44151 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__44151,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__44151,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__44151,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (vec__44151,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__44151,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__44151,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,status){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
if(cljs.core.empty_QMARK_.call(null,new_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return new_m;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var c__28419__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28419__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (c__28419__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_44165){
var state_val_44166 = (state_44165[(1)]);
if((state_val_44166 === (1))){
var inst_44152 = cljs.core.async.timeout.call(null,(5000));
var state_44165__$1 = state_44165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44165__$1,(2),inst_44152);
} else {
if((state_val_44166 === (2))){
var inst_44154 = (state_44165[(2)]);
var inst_44155 = upd_connected_uid_BANG_.call(null,uid);
var state_44165__$1 = (function (){var statearr_44167 = state_44165;
(statearr_44167[(7)] = inst_44154);

return statearr_44167;
})();
if(cljs.core.truth_(inst_44155)){
var statearr_44168_44349 = state_44165__$1;
(statearr_44168_44349[(1)] = (3));

} else {
var statearr_44169_44350 = state_44165__$1;
(statearr_44169_44350[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44166 === (3))){
var inst_44157 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44158 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_44159 = (new cljs.core.PersistentVector(null,1,(5),inst_44157,inst_44158,null));
var inst_44160 = receive_event_msg_BANG_.call(null,inst_44159);
var state_44165__$1 = state_44165;
var statearr_44170_44351 = state_44165__$1;
(statearr_44170_44351[(2)] = inst_44160);

(statearr_44170_44351[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44166 === (4))){
var state_44165__$1 = state_44165;
var statearr_44171_44352 = state_44165__$1;
(statearr_44171_44352[(2)] = null);

(statearr_44171_44352[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44166 === (5))){
var inst_44163 = (state_44165[(2)]);
var state_44165__$1 = state_44165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44165__$1,inst_44163);
} else {
return null;
}
}
}
}
}
});})(c__28419__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28354__auto__,c__28419__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28355__auto__ = null;
var taoensso$sente$state_machine__28355__auto____0 = (function (){
var statearr_44175 = [null,null,null,null,null,null,null,null];
(statearr_44175[(0)] = taoensso$sente$state_machine__28355__auto__);

(statearr_44175[(1)] = (1));

return statearr_44175;
});
var taoensso$sente$state_machine__28355__auto____1 = (function (state_44165){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_44165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e44176){if((e44176 instanceof Object)){
var ex__28358__auto__ = e44176;
var statearr_44177_44353 = state_44165;
(statearr_44177_44353[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44354 = state_44165;
state_44165 = G__44354;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
taoensso$sente$state_machine__28355__auto__ = function(state_44165){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28355__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28355__auto____1.call(this,state_44165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28355__auto____0;
taoensso$sente$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28355__auto____1;
return taoensso$sente$state_machine__28355__auto__;
})()
;})(switch__28354__auto__,c__28419__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__28421__auto__ = (function (){var statearr_44178 = f__28420__auto__.call(null);
(statearr_44178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto__);

return statearr_44178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(c__28419__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__28419__auto__;
} else {
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,new cljs.core.Keyword(null,"ajax","ajax",814345549),client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__44179){
var vec__44180 = p__44179;
var server_ch__$1 = cljs.core.nth.call(null,vec__44180,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__44180,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var udt_disconnected = taoensso.encore.now_udt.call(null);
var c__28419__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28419__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (c__28419__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_44203){
var state_val_44204 = (state_44203[(1)]);
if((state_val_44204 === (1))){
var inst_44181 = cljs.core.async.timeout.call(null,(5000));
var state_44203__$1 = state_44203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44203__$1,(2),inst_44181);
} else {
if((state_val_44204 === (2))){
var inst_44183 = (state_44203[(2)]);
var inst_44184 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44185 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_44186 = (new cljs.core.PersistentVector(null,2,(5),inst_44184,inst_44185,null));
var inst_44187 = (function (){return ((function (inst_44183,inst_44184,inst_44185,inst_44186,state_val_44204,c__28419__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var vec__44205 = cljs.core.get.call(null,_QMARK_m,client_id);
var _ = cljs.core.nth.call(null,vec__44205,(0),null);
var _QMARK_udt_last_connected = cljs.core.nth.call(null,vec__44205,(1),null);
var disconnected_QMARK_ = (function (){var and__25253__auto__ = _QMARK_udt_last_connected;
if(cljs.core.truth_(and__25253__auto__)){
return (udt_disconnected >= _QMARK_udt_last_connected);
} else {
return and__25253__auto__;
}
})();
if(cljs.core.not.call(null,disconnected_QMARK_)){
return taoensso.encore.swapped.call(null,_QMARK_m,cljs.core.not.call(null,new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586)));
} else {
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
return taoensso.encore.swapped.call(null,((cljs.core.empty_QMARK_.call(null,new_m))?new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782):new_m),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586));
}
});
;})(inst_44183,inst_44184,inst_44185,inst_44186,state_val_44204,c__28419__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_44188 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_44186,inst_44187);
var state_44203__$1 = (function (){var statearr_44206 = state_44203;
(statearr_44206[(7)] = inst_44183);

return statearr_44206;
})();
if(cljs.core.truth_(inst_44188)){
var statearr_44207_44355 = state_44203__$1;
(statearr_44207_44355[(1)] = (3));

} else {
var statearr_44208_44356 = state_44203__$1;
(statearr_44208_44356[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44204 === (3))){
var inst_44190 = upd_connected_uid_BANG_.call(null,uid);
var state_44203__$1 = state_44203;
if(cljs.core.truth_(inst_44190)){
var statearr_44209_44357 = state_44203__$1;
(statearr_44209_44357[(1)] = (6));

} else {
var statearr_44210_44358 = state_44203__$1;
(statearr_44210_44358[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44204 === (4))){
var state_44203__$1 = state_44203;
var statearr_44211_44359 = state_44203__$1;
(statearr_44211_44359[(2)] = null);

(statearr_44211_44359[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44204 === (5))){
var inst_44201 = (state_44203[(2)]);
var state_44203__$1 = state_44203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44203__$1,inst_44201);
} else {
if((state_val_44204 === (6))){
var inst_44192 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44193 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_44194 = (new cljs.core.PersistentVector(null,1,(5),inst_44192,inst_44193,null));
var inst_44195 = receive_event_msg_BANG_.call(null,inst_44194);
var state_44203__$1 = state_44203;
var statearr_44212_44360 = state_44203__$1;
(statearr_44212_44360[(2)] = inst_44195);

(statearr_44212_44360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44204 === (7))){
var state_44203__$1 = state_44203;
var statearr_44213_44361 = state_44203__$1;
(statearr_44213_44361[(2)] = null);

(statearr_44213_44361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44204 === (8))){
var inst_44198 = (state_44203[(2)]);
var state_44203__$1 = state_44203;
var statearr_44214_44362 = state_44203__$1;
(statearr_44214_44362[(2)] = inst_44198);

(statearr_44214_44362[(1)] = (5));


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
});})(c__28419__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28354__auto__,c__28419__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28355__auto__ = null;
var taoensso$sente$state_machine__28355__auto____0 = (function (){
var statearr_44218 = [null,null,null,null,null,null,null,null];
(statearr_44218[(0)] = taoensso$sente$state_machine__28355__auto__);

(statearr_44218[(1)] = (1));

return statearr_44218;
});
var taoensso$sente$state_machine__28355__auto____1 = (function (state_44203){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_44203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e44219){if((e44219 instanceof Object)){
var ex__28358__auto__ = e44219;
var statearr_44220_44363 = state_44203;
(statearr_44220_44363[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44364 = state_44203;
state_44203 = G__44364;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
taoensso$sente$state_machine__28355__auto__ = function(state_44203){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28355__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28355__auto____1.call(this,state_44203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28355__auto____0;
taoensso$sente$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28355__auto____1;
return taoensso$sente$state_machine__28355__auto__;
})()
;})(switch__28354__auto__,c__28419__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__28421__auto__ = (function (){var statearr_44221 = f__28420__auto__.call(null);
(statearr_44221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto__);

return statearr_44221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(c__28419__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__28419__auto__;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__44057,map__44058,map__44058__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq44054){
var G__44055 = cljs.core.first.call(null,seq44054);
var seq44054__$1 = cljs.core.next.call(null,seq44054);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44055,seq44054__$1);
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null);

var seq__44369 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null))));
var chunk__44370 = null;
var count__44371 = (0);
var i__44372 = (0);
while(true){
if((i__44372 < count__44371)){
var server_ch = cljs.core._nth.call(null,chunk__44370,i__44372);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__44373 = seq__44369;
var G__44374 = chunk__44370;
var G__44375 = count__44371;
var G__44376 = (i__44372 + (1));
seq__44369 = G__44373;
chunk__44370 = G__44374;
count__44371 = G__44375;
i__44372 = G__44376;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44369);
if(temp__4657__auto__){
var seq__44369__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44369__$1)){
var c__26068__auto__ = cljs.core.chunk_first.call(null,seq__44369__$1);
var G__44377 = cljs.core.chunk_rest.call(null,seq__44369__$1);
var G__44378 = c__26068__auto__;
var G__44379 = cljs.core.count.call(null,c__26068__auto__);
var G__44380 = (0);
seq__44369 = G__44377;
chunk__44370 = G__44378;
count__44371 = G__44379;
i__44372 = G__44380;
continue;
} else {
var server_ch = cljs.core.first.call(null,seq__44369__$1);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__44381 = cljs.core.next.call(null,seq__44369__$1);
var G__44382 = null;
var G__44383 = (0);
var G__44384 = (0);
seq__44369 = G__44381;
chunk__44370 = G__44382;
count__44371 = G__44383;
i__44372 = G__44384;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(var_args){
var args__26330__auto__ = [];
var len__26323__auto___44487 = arguments.length;
var i__26324__auto___44488 = (0);
while(true){
if((i__26324__auto___44488 < len__26323__auto___44487)){
args__26330__auto__.push((arguments[i__26324__auto___44488]));

var G__44489 = (i__26324__auto___44488 + (1));
i__26324__auto___44488 = G__44489;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((3) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((3)),(0))):null);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26331__auto__);
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conns_,uid,buffered_evs_pstr,p__44389){
var vec__44390 = p__44389;
var map__44391 = cljs.core.nth.call(null,vec__44390,(0),null);
var map__44391__$1 = ((((!((map__44391 == null)))?((((map__44391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44391):map__44391);
var nmax_attempts = cljs.core.get.call(null,map__44391__$1,new cljs.core.Keyword(null,"nmax-attempts","nmax-attempts",1471144610),(7));
var ms_base = cljs.core.get.call(null,map__44391__$1,new cljs.core.Keyword(null,"ms-base","ms-base",-1962784511),(90));
var ms_rand = cljs.core.get.call(null,map__44391__$1,new cljs.core.Keyword(null,"ms-rand","ms-rand",1169398874),(90));

taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (vec__44390,map__44391,map__44391__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
});})(vec__44390,map__44391,map__44391__$1,nmax_attempts,ms_base,ms_rand))
,null)),null);

var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__28419__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28419__auto__,client_ids_unsatisfied,vec__44390,map__44391,map__44391__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (c__28419__auto__,client_ids_unsatisfied,vec__44390,map__44391,map__44391__$1,nmax_attempts,ms_base,ms_rand){
return (function (state_44450){
var state_val_44451 = (state_44450[(1)]);
if((state_val_44451 === (7))){
var state_44450__$1 = state_44450;
var statearr_44452_44490 = state_44450__$1;
(statearr_44452_44490[(2)] = true);

(statearr_44452_44490[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44451 === (1))){
var inst_44393 = cljs.core.PersistentHashSet.EMPTY;
var inst_44394 = (0);
var inst_44395 = inst_44393;
var state_44450__$1 = (function (){var statearr_44453 = state_44450;
(statearr_44453[(7)] = inst_44395);

(statearr_44453[(8)] = inst_44394);

return statearr_44453;
})();
var statearr_44454_44491 = state_44450__$1;
(statearr_44454_44491[(2)] = null);

(statearr_44454_44491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44451 === (4))){
var inst_44401 = (state_44450[(9)]);
var inst_44419 = (state_44450[(2)]);
var state_44450__$1 = (function (){var statearr_44455 = state_44450;
(statearr_44455[(10)] = inst_44419);

return statearr_44455;
})();
if(cljs.core.truth_(inst_44401)){
var statearr_44456_44492 = state_44450__$1;
(statearr_44456_44492[(1)] = (10));

} else {
var statearr_44457_44493 = state_44450__$1;
(statearr_44457_44493[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44451 === (15))){
var inst_44435 = (state_44450[(2)]);
var state_44450__$1 = state_44450;
if(cljs.core.truth_(inst_44435)){
var statearr_44458_44494 = state_44450__$1;
(statearr_44458_44494[(1)] = (16));

} else {
var statearr_44459_44495 = state_44450__$1;
(statearr_44459_44495[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44451 === (13))){
var inst_44428 = (state_44450[(11)]);
var inst_44431 = cljs.core.complement.call(null,inst_44428);
var inst_44432 = cljs.core.some.call(null,inst_44431,client_ids_unsatisfied);
var state_44450__$1 = state_44450;
var statearr_44460_44496 = state_44450__$1;
(statearr_44460_44496[(2)] = inst_44432);

(statearr_44460_44496[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44451 === (6))){
var inst_44401 = (state_44450[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44450,(5),Error,null,(4));
var inst_44408 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44409 = [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.map_QMARK_];
var inst_44410 = (new cljs.core.PersistentVector(null,3,(5),inst_44408,inst_44409,null));
var inst_44411 = taoensso.truss.impl._invar_pred.call(null,inst_44410);
var inst_44412 = inst_44411.call(null,inst_44401);
var state_44450__$1 = state_44450;
if(cljs.core.truth_(inst_44412)){
var statearr_44461_44497 = state_44450__$1;
(statearr_44461_44497[(1)] = (7));

} else {
var statearr_44462_44498 = state_44450__$1;
(statearr_44462_44498[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44451 === (17))){
var state_44450__$1 = state_44450;
var statearr_44463_44499 = state_44450__$1;
(statearr_44463_44499[(2)] = null);

(statearr_44463_44499[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44451 === (3))){
var inst_44448 = (state_44450[(2)]);
var state_44450__$1 = state_44450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44450__$1,inst_44448);
} else {
if((state_val_44451 === (12))){
var inst_44429 = (state_44450[(12)]);
var inst_44395 = (state_44450[(7)]);
var inst_44394 = (state_44450[(8)]);
var inst_44427 = (state_44450[(2)]);
var inst_44428 = cljs.core.into.call(null,inst_44395,inst_44427);
var inst_44429__$1 = (inst_44394 < nmax_attempts);
var state_44450__$1 = (function (){var statearr_44464 = state_44450;
(statearr_44464[(12)] = inst_44429__$1);

(statearr_44464[(11)] = inst_44428);

return statearr_44464;
})();
if(cljs.core.truth_(inst_44429__$1)){
var statearr_44465_44500 = state_44450__$1;
(statearr_44465_44500[(1)] = (13));

} else {
var statearr_44466_44501 = state_44450__$1;
(statearr_44466_44501[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44451 === (2))){
var inst_44395 = (state_44450[(7)]);
var inst_44394 = (state_44450[(8)]);
var inst_44397 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44398 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_44399 = (new cljs.core.PersistentVector(null,2,(5),inst_44397,inst_44398,null));
var inst_44400 = (function (){var n = inst_44394;
var client_ids_satisfied = inst_44395;
return ((function (n,client_ids_satisfied,inst_44395,inst_44394,inst_44397,inst_44398,inst_44399,state_val_44451,c__28419__auto__,client_ids_unsatisfied,vec__44390,map__44391,map__44391__$1,nmax_attempts,ms_base,ms_rand){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_44395,inst_44394,inst_44397,inst_44398,inst_44399,state_val_44451,c__28419__auto__,client_ids_unsatisfied,vec__44390,map__44391,map__44391__$1,nmax_attempts,ms_base,ms_rand){
return (function (m__$1,k){
var vec__44467 = cljs.core.get.call(null,m__$1,k);
var _QMARK_server_ch = cljs.core.nth.call(null,vec__44467,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__44467,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_44395,inst_44394,inst_44397,inst_44398,inst_44399,state_val_44451,c__28419__auto__,client_ids_unsatisfied,vec__44390,map__44391,map__44391__$1,nmax_attempts,ms_base,ms_rand))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_44395,inst_44394,inst_44397,inst_44398,inst_44399,state_val_44451,c__28419__auto__,client_ids_unsatisfied,vec__44390,map__44391,map__44391__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_44401 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_44399,inst_44400);
var state_44450__$1 = (function (){var statearr_44468 = state_44450;
(statearr_44468[(9)] = inst_44401);

return statearr_44468;
})();
var statearr_44469_44502 = state_44450__$1;
(statearr_44469_44502[(2)] = null);

(statearr_44469_44502[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44451 === (19))){
var inst_44428 = (state_44450[(11)]);
var inst_44394 = (state_44450[(8)]);
var inst_44441 = (state_44450[(2)]);
var inst_44442 = (inst_44394 + (1));
var inst_44394__$1 = inst_44442;
var inst_44395 = inst_44428;
var state_44450__$1 = (function (){var statearr_44470 = state_44450;
(statearr_44470[(7)] = inst_44395);

(statearr_44470[(8)] = inst_44394__$1);

(statearr_44470[(13)] = inst_44441);

return statearr_44470;
})();
var statearr_44471_44503 = state_44450__$1;
(statearr_44471_44503[(2)] = null);

(statearr_44471_44503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44451 === (11))){
var state_44450__$1 = state_44450;
var statearr_44472_44504 = state_44450__$1;
(statearr_44472_44504[(2)] = null);

(statearr_44472_44504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44451 === (9))){
var inst_44417 = (state_44450[(2)]);
var state_44450__$1 = state_44450;
var statearr_44473_44505 = state_44450__$1;
(statearr_44473_44505[(2)] = inst_44417);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44450__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44451 === (5))){
var inst_44401 = (state_44450[(9)]);
var inst_44402 = (state_44450[(2)]);
var inst_44403 = "([:or nil? map?] ?pulled)";
var inst_44404 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,inst_44403,inst_44401,inst_44402,null);
var state_44450__$1 = state_44450;
var statearr_44474_44506 = state_44450__$1;
(statearr_44474_44506[(2)] = inst_44404);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44450__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44451 === (14))){
var inst_44429 = (state_44450[(12)]);
var state_44450__$1 = state_44450;
var statearr_44475_44507 = state_44450__$1;
(statearr_44475_44507[(2)] = inst_44429);

(statearr_44475_44507[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44451 === (16))){
var inst_44437 = cljs.core.rand_int.call(null,ms_rand);
var inst_44438 = (ms_base + inst_44437);
var inst_44439 = cljs.core.async.timeout.call(null,inst_44438);
var state_44450__$1 = state_44450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44450__$1,(19),inst_44439);
} else {
if((state_val_44451 === (10))){
var inst_44401 = (state_44450[(9)]);
var inst_44395 = (state_44450[(7)]);
var inst_44394 = (state_44450[(8)]);
var inst_44422 = (function (){var n = inst_44394;
var client_ids_satisfied = inst_44395;
var _QMARK_pulled = inst_44401;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_44401,inst_44395,inst_44394,state_val_44451,c__28419__auto__,client_ids_unsatisfied,vec__44390,map__44391,map__44391__$1,nmax_attempts,ms_base,ms_rand){
return (function (s,client_id,p__44421){
var vec__44476 = p__44421;
var _QMARK_server_ch = cljs.core.nth.call(null,vec__44476,(0),null);
var _ = cljs.core.nth.call(null,vec__44476,(1),null);
if(((_QMARK_server_ch == null)) || (cljs.core.not.call(null,taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_server_ch,buffered_evs_pstr,new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103))))){
return s;
} else {
return cljs.core.conj.call(null,s,client_id);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_44401,inst_44395,inst_44394,state_val_44451,c__28419__auto__,client_ids_unsatisfied,vec__44390,map__44391,map__44391__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_44423 = cljs.core.PersistentHashSet.EMPTY;
var inst_44424 = cljs.core.reduce_kv.call(null,inst_44422,inst_44423,inst_44401);
var state_44450__$1 = state_44450;
var statearr_44477_44508 = state_44450__$1;
(statearr_44477_44508[(2)] = inst_44424);

(statearr_44477_44508[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44451 === (18))){
var inst_44446 = (state_44450[(2)]);
var state_44450__$1 = state_44450;
var statearr_44478_44509 = state_44450__$1;
(statearr_44478_44509[(2)] = inst_44446);

(statearr_44478_44509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44451 === (8))){
var inst_44415 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_44450__$1 = state_44450;
var statearr_44479_44510 = state_44450__$1;
(statearr_44479_44510[(2)] = inst_44415);

(statearr_44479_44510[(1)] = (9));


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
});})(c__28419__auto__,client_ids_unsatisfied,vec__44390,map__44391,map__44391__$1,nmax_attempts,ms_base,ms_rand))
;
return ((function (switch__28354__auto__,c__28419__auto__,client_ids_unsatisfied,vec__44390,map__44391,map__44391__$1,nmax_attempts,ms_base,ms_rand){
return (function() {
var taoensso$sente$state_machine__28355__auto__ = null;
var taoensso$sente$state_machine__28355__auto____0 = (function (){
var statearr_44483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44483[(0)] = taoensso$sente$state_machine__28355__auto__);

(statearr_44483[(1)] = (1));

return statearr_44483;
});
var taoensso$sente$state_machine__28355__auto____1 = (function (state_44450){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_44450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e44484){if((e44484 instanceof Object)){
var ex__28358__auto__ = e44484;
var statearr_44485_44511 = state_44450;
(statearr_44485_44511[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44512 = state_44450;
state_44450 = G__44512;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
taoensso$sente$state_machine__28355__auto__ = function(state_44450){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28355__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28355__auto____1.call(this,state_44450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28355__auto____0;
taoensso$sente$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28355__auto____1;
return taoensso$sente$state_machine__28355__auto__;
})()
;})(switch__28354__auto__,c__28419__auto__,client_ids_unsatisfied,vec__44390,map__44391,map__44391__$1,nmax_attempts,ms_base,ms_rand))
})();
var state__28421__auto__ = (function (){var statearr_44486 = f__28420__auto__.call(null);
(statearr_44486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto__);

return statearr_44486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(c__28419__auto__,client_ids_unsatisfied,vec__44390,map__44391,map__44391__$1,nmax_attempts,ms_base,ms_rand))
);

return c__28419__auto__;
}
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$maxFixedArity = (3);

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$applyTo = (function (seq44385){
var G__44386 = cljs.core.first.call(null,seq44385);
var seq44385__$1 = cljs.core.next.call(null,seq44385);
var G__44387 = cljs.core.first.call(null,seq44385__$1);
var seq44385__$2 = cljs.core.next.call(null,seq44385__$1);
var G__44388 = cljs.core.first.call(null,seq44385__$2);
var seq44385__$3 = cljs.core.next.call(null,seq44385__$2);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44386,G__44387,G__44388,seq44385__$3);
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

/**
 * Implementation detail
 */
taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
var x__25920__auto__ = (((chsk == null))?null:chsk);
var m__25921__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__25920__auto__)]);
if(!((m__25921__auto__ == null))){
return m__25921__auto__.call(null,chsk);
} else {
var m__25921__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__25921__auto____$1 == null))){
return m__25921__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-connect!",chsk);
}
}
}
});

/**
 * Implementation detail
 */
taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__25920__auto__ = (((chsk == null))?null:chsk);
var m__25921__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__25920__auto__)]);
if(!((m__25921__auto__ == null))){
return m__25921__auto__.call(null,chsk,ev,opts);
} else {
var m__25921__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__25921__auto____$1 == null))){
return m__25921__auto____$1.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-send!",chsk);
}
}
}
});

/**
 * DEPRECATED: Please use `chsk-disconnect!` instead
 */
taoensso.sente.chsk_destroy_BANG_ = (function taoensso$sente$chsk_destroy_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1(chsk);
} else {
var x__25920__auto__ = (((chsk == null))?null:chsk);
var m__25921__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__25920__auto__)]);
if(!((m__25921__auto__ == null))){
return m__25921__auto__.call(null,chsk);
} else {
var m__25921__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(!((m__25921__auto____$1 == null))){
return m__25921__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-destroy!",chsk);
}
}
}
});

/**
 * Disconnects channel socket
 */
taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1(chsk);
} else {
var x__25920__auto__ = (((chsk == null))?null:chsk);
var m__25921__auto__ = (taoensso.sente.chsk_disconnect_BANG_[goog.typeOf(x__25920__auto__)]);
if(!((m__25921__auto__ == null))){
return m__25921__auto__.call(null,chsk);
} else {
var m__25921__auto____$1 = (taoensso.sente.chsk_disconnect_BANG_["_"]);
if(!((m__25921__auto____$1 == null))){
return m__25921__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-disconnect!",chsk);
}
}
}
});

/**
 * Reconnects channel socket (useful for reauthenticating after login/logout, etc.)
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__25920__auto__ = (((chsk == null))?null:chsk);
var m__25921__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__25920__auto__)]);
if(!((m__25921__auto__ == null))){
return m__25921__auto__.call(null,chsk);
} else {
var m__25921__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(!((m__25921__auto____$1 == null))){
return m__25921__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-reconnect!",chsk);
}
}
}
});

/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var args44513 = [];
var len__26323__auto___44516 = arguments.length;
var i__26324__auto___44517 = (0);
while(true){
if((i__26324__auto___44517 < len__26323__auto___44516)){
args44513.push((arguments[i__26324__auto___44517]));

var G__44518 = (i__26324__auto___44517 + (1));
i__26324__auto___44517 = G__44518;
continue;
} else {
}
break;
}

var G__44515 = args44513.length;
switch (G__44515) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44513.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if(cljs.core.truth_((function (){var or__25265__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__25265__auto__){
return or__25265__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null))),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol("enc","nneg-int?","enc/nneg-int?",803640858,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null))))))].join('')));
}

if(cljs.core.truth_((function (){var or__25265__auto__ = (_QMARK_cb == null);
if(or__25265__auto__){
return or__25265__auto__;
} else {
var or__25265__auto____$1 = cljs.core.ifn_QMARK_.call(null,_QMARK_cb);
if(or__25265__auto____$1){
return or__25265__auto____$1;
} else {
return taoensso.encore.chan_QMARK_.call(null,_QMARK_cb);
}
}
})())){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb should be nil, an ifn, or a channel: %s",cljs.core.type.call(null,_QMARK_cb))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol("enc","chan?","enc/chan?",1377166,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)))))].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4657__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto__)){
var cb_uuid = temp__4657__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4657__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__4657__auto__))
);
} else {
return null;
}
});
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__44520,merge_state){
var map__44524 = p__44520;
var map__44524__$1 = ((((!((map__44524 == null)))?((((map__44524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44524):map__44524);
var chsk = map__44524__$1;
var chs = cljs.core.get.call(null,map__44524__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__44524__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__44526 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__44524,map__44524__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var new_state__$1 = ((cljs.core.not.call(null,(function (){var and__25253__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__25253__auto__)){
var and__25253__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__25253__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__25253__auto____$1;
}
} else {
return and__25253__auto__;
}
})()))?new_state:cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true));
return taoensso.encore.swapped.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__44524,map__44524__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__44526,(0),null);
var new_state = cljs.core.nth.call(null,vec__44526,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(chs),new_state);

return new_state;
} else {
return null;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
var __x_44531 = _QMARK_cb;
try{if(cljs.core.truth_(taoensso.encore.chan_QMARK_.call(null,__x_44531))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e44529){if((e44529 instanceof Error)){
var __t_44532 = e44529;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",__x_44531,__t_44532,null);
} else {
throw e44529;

}
}
taoensso.sente.assert_event.call(null,ev);

var vec__44530 = ev;
var ev_id = cljs.core.nth.call(null,vec__44530,(0),null);
var _ = cljs.core.nth.call(null,vec__44530,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__44530,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__44530,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null);

var buffered_evs = (function (){var __x = clj;
try{if(cljs.core.vector_QMARK_.call(null,__x)){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e44538){if((e44538 instanceof Error)){
var __t = e44538;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",__x,__t,null);
} else {
throw e44538;

}
}})();
var seq__44539 = cljs.core.seq.call(null,buffered_evs);
var chunk__44540 = null;
var count__44541 = (0);
var i__44542 = (0);
while(true){
if((i__44542 < count__44541)){
var ev = cljs.core._nth.call(null,chunk__44540,i__44542);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__44543 = seq__44539;
var G__44544 = chunk__44540;
var G__44545 = count__44541;
var G__44546 = (i__44542 + (1));
seq__44539 = G__44543;
chunk__44540 = G__44544;
count__44541 = G__44545;
i__44542 = G__44546;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44539);
if(temp__4657__auto__){
var seq__44539__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44539__$1)){
var c__26068__auto__ = cljs.core.chunk_first.call(null,seq__44539__$1);
var G__44547 = cljs.core.chunk_rest.call(null,seq__44539__$1);
var G__44548 = c__26068__auto__;
var G__44549 = cljs.core.count.call(null,c__26068__auto__);
var G__44550 = (0);
seq__44539 = G__44547;
chunk__44540 = G__44548;
count__44541 = G__44549;
i__44542 = G__44550;
continue;
} else {
var ev = cljs.core.first.call(null,seq__44539__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__44551 = cljs.core.next.call(null,seq__44539__$1);
var G__44552 = null;
var G__44553 = (0);
var G__44554 = (0);
seq__44539 = G__44551;
chunk__44540 = G__44552;
count__44541 = G__44553;
i__44542 = G__44554;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handle_when_handshake_BANG_ = (function taoensso$sente$handle_when_handshake_BANG_(chsk,chs,clj){
var handshake_QMARK_ = (cljs.core.vector_QMARK_.call(null,clj)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,clj),new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686)));
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["handle-when-handshake (%s): %s",((handshake_QMARK_)?new cljs.core.Keyword(null,"handshake","handshake",68079331):new cljs.core.Keyword(null,"non-handshake","non-handshake",576986062)),clj], null);
});})(handshake_QMARK_))
,null)),null);

if(handshake_QMARK_){
var vec__44557 = clj;
var _ = cljs.core.nth.call(null,vec__44557,(0),null);
var vec__44558 = cljs.core.nth.call(null,vec__44557,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__44558,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__44558,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__44558,(2),null);
var handshake_ev = vec__44557;
if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (vec__44557,_,vec__44558,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__44557,_,vec__44558,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_))
,null)),null);
} else {
}

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token], null));

taoensso.sente.assert_event.call(null,handshake_ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.kalive_ms = kalive_ms;
this.kalive_timer_ = kalive_timer_;
this.kalive_due_QMARK__ = kalive_due_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.active_retry_id_ = active_retry_id_;
this.retry_count_ = retry_count_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25879__auto__,k__25880__auto__){
var self__ = this;
var this__25879__auto____$1 = this;
return cljs.core._lookup.call(null,this__25879__auto____$1,k__25880__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25881__auto__,k44560,else__25882__auto__){
var self__ = this;
var this__25881__auto____$1 = this;
var G__44562 = (((k44560 instanceof cljs.core.Keyword))?k44560.fqn:null);
switch (G__44562) {
case "client-id":
return self__.client_id;

break;
case "kalive-ms":
return self__.kalive_ms;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "active-retry-id_":
return self__.active_retry_id_;

break;
case "kalive-due?_":
return self__.kalive_due_QMARK__;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "kalive-timer_":
return self__.kalive_timer_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44560,else__25882__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25893__auto__,writer__25894__auto__,opts__25895__auto__){
var self__ = this;
var this__25893__auto____$1 = this;
var pr_pair__25896__auto__ = ((function (this__25893__auto____$1){
return (function (keyval__25897__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25894__auto__,cljs.core.pr_writer,""," ","",opts__25895__auto__,keyval__25897__auto__);
});})(this__25893__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25894__auto__,pr_pair__25896__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__25895__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44559){
var self__ = this;
var G__44559__$1 = this;
return (new cljs.core.RecordIter((0),G__44559__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25877__auto__){
var self__ = this;
var this__25877__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25873__auto__){
var self__ = this;
var this__25873__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25883__auto__){
var self__ = this;
var this__25883__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25874__auto__){
var self__ = this;
var this__25874__auto____$1 = this;
var h__25700__auto__ = self__.__hash;
if(!((h__25700__auto__ == null))){
return h__25700__auto__;
} else {
var h__25700__auto____$1 = cljs.core.hash_imap.call(null,this__25874__auto____$1);
self__.__hash = h__25700__auto____$1;

return h__25700__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25875__auto__,other__25876__auto__){
var self__ = this;
var this__25875__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25253__auto__ = other__25876__auto__;
if(cljs.core.truth_(and__25253__auto__)){
var and__25253__auto____$1 = (this__25875__auto____$1.constructor === other__25876__auto__.constructor);
if(and__25253__auto____$1){
return cljs.core.equiv_map.call(null,this__25875__auto____$1,other__25876__auto__);
} else {
return and__25253__auto____$1;
}
} else {
return and__25253__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25888__auto__,k__25889__auto__){
var self__ = this;
var this__25888__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__25889__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25888__auto____$1),self__.__meta),k__25889__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25889__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25886__auto__,k__25887__auto__,G__44559){
var self__ = this;
var this__25886__auto____$1 = this;
var pred__44563 = cljs.core.keyword_identical_QMARK_;
var expr__44564 = k__25887__auto__;
if(cljs.core.truth_(pred__44563.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__44564))){
return (new taoensso.sente.ChWebSocket(G__44559,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44563.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__44564))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__44559,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44563.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__44564))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__44559,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44563.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__44564))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__44559,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44563.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__44564))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__44559,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44563.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__44564))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__44559,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44563.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__44564))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__44559,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44563.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__44564))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,G__44559,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44563.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__44564))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,G__44559,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44563.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__44564))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,G__44559,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44563.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__44564))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__44559,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44563.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__44564))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__44559,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44563.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__44564))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,G__44559,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44563.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__44564))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,G__44559,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25887__auto__,G__44559),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25891__auto__){
var self__ = this;
var this__25891__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25878__auto__,G__44559){
var self__ = this;
var this__25878__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,G__44559,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25884__auto__,entry__25885__auto__){
var self__ = this;
var this__25884__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25885__auto__)){
return cljs.core._assoc.call(null,this__25884__auto____$1,cljs.core._nth.call(null,entry__25885__auto__,(0)),cljs.core._nth.call(null,entry__25885__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25884__auto____$1,entry__25885__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__44566){
var self__ = this;
var map__44567 = p__44566;
var map__44567__$1 = ((((!((map__44567 == null)))?((((map__44567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44567):map__44567);
var opts = map__44567__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__44567__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__44567__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__44567__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__44567,map__44567__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__44567,map__44567__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4657__auto___44603 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___44603)){
var cb_uuid_44604 = temp__4657__auto___44603;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_44604], null),(function (){var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e44569){if((e44569 instanceof Error)){
var __t = e44569;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.encore/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e44569;

}
}})());

var temp__4657__auto___44605__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4657__auto___44605__$1)){
var timeout_ms_44606 = temp__4657__auto___44605__$1;
var c__28419__auto___44607 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28419__auto___44607,timeout_ms_44606,temp__4657__auto___44605__$1,cb_uuid_44604,temp__4657__auto___44603,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__44567,map__44567__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (c__28419__auto___44607,timeout_ms_44606,temp__4657__auto___44605__$1,cb_uuid_44604,temp__4657__auto___44603,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__44567,map__44567__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (state_44580){
var state_val_44581 = (state_44580[(1)]);
if((state_val_44581 === (1))){
var inst_44570 = cljs.core.async.timeout.call(null,timeout_ms_44606);
var state_44580__$1 = state_44580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44580__$1,(2),inst_44570);
} else {
if((state_val_44581 === (2))){
var inst_44573 = (state_44580[(7)]);
var inst_44572 = (state_44580[(2)]);
var inst_44573__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_44580__$1 = (function (){var statearr_44582 = state_44580;
(statearr_44582[(7)] = inst_44573__$1);

(statearr_44582[(8)] = inst_44572);

return statearr_44582;
})();
if(cljs.core.truth_(inst_44573__$1)){
var statearr_44583_44608 = state_44580__$1;
(statearr_44583_44608[(1)] = (3));

} else {
var statearr_44584_44609 = state_44580__$1;
(statearr_44584_44609[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44581 === (3))){
var inst_44573 = (state_44580[(7)]);
var inst_44575 = inst_44573.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_44580__$1 = state_44580;
var statearr_44585_44610 = state_44580__$1;
(statearr_44585_44610[(2)] = inst_44575);

(statearr_44585_44610[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44581 === (4))){
var state_44580__$1 = state_44580;
var statearr_44586_44611 = state_44580__$1;
(statearr_44586_44611[(2)] = null);

(statearr_44586_44611[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44581 === (5))){
var inst_44578 = (state_44580[(2)]);
var state_44580__$1 = state_44580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44580__$1,inst_44578);
} else {
return null;
}
}
}
}
}
});})(c__28419__auto___44607,timeout_ms_44606,temp__4657__auto___44605__$1,cb_uuid_44604,temp__4657__auto___44603,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__44567,map__44567__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
;
return ((function (switch__28354__auto__,c__28419__auto___44607,timeout_ms_44606,temp__4657__auto___44605__$1,cb_uuid_44604,temp__4657__auto___44603,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__44567,map__44567__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function() {
var taoensso$sente$state_machine__28355__auto__ = null;
var taoensso$sente$state_machine__28355__auto____0 = (function (){
var statearr_44590 = [null,null,null,null,null,null,null,null,null];
(statearr_44590[(0)] = taoensso$sente$state_machine__28355__auto__);

(statearr_44590[(1)] = (1));

return statearr_44590;
});
var taoensso$sente$state_machine__28355__auto____1 = (function (state_44580){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_44580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e44591){if((e44591 instanceof Object)){
var ex__28358__auto__ = e44591;
var statearr_44592_44612 = state_44580;
(statearr_44592_44612[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44613 = state_44580;
state_44580 = G__44613;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
taoensso$sente$state_machine__28355__auto__ = function(state_44580){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28355__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28355__auto____1.call(this,state_44580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28355__auto____0;
taoensso$sente$state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28355__auto____1;
return taoensso$sente$state_machine__28355__auto__;
})()
;})(switch__28354__auto__,c__28419__auto___44607,timeout_ms_44606,temp__4657__auto___44605__$1,cb_uuid_44604,temp__4657__auto___44603,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__44567,map__44567__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
})();
var state__28421__auto__ = (function (){var statearr_44593 = f__28420__auto__.call(null);
(statearr_44593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto___44607);

return statearr_44593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(c__28419__auto___44607,timeout_ms_44606,temp__4657__auto___44605__$1,cb_uuid_44604,temp__4657__auto___44603,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__44567,map__44567__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e44594){if((e44594 instanceof Error)){
var e = e44594;
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__44567,map__44567__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__44567,map__44567__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

var temp__4657__auto___44614 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___44614)){
var cb_uuid_44615 = temp__4657__auto___44614;
var cb_fn_STAR__44616 = (function (){var or__25265__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_44615);
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e44595){if((e44595 instanceof Error)){
var __t = e44595;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.encore/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e44595;

}
}}
})();
cb_fn_STAR__44616.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e44594;

}
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
return taoensso.sente.chsk_disconnect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"disconnected");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

var temp__4657__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"reconnecting");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4657__auto___44617 = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4657__auto___44617)){
var s_44618 = temp__4657__auto___44617;
s_44618.close((3000),"SENTE_RECONNECT");
} else {
}

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (function (){var or__25265__auto__ = taoensso.encore.oget.call(null,window,"WebSocket");
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return taoensso.encore.oget.call(null,window,"MozWebSocket");
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var WebSocket = temp__4657__auto__;
var retry_id = taoensso.encore.uuid_str.call(null);
var connect_fn = ((function (retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
var retry_fn = ((function (retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = cljs.core.swap_BANG_.call(null,self__.retry_count_,cljs.core.inc);
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
window.clearInterval(cljs.core.deref.call(null,self__.kalive_timer_));

taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s)",retry_count_STAR_], null);
});})(retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);

return window.setTimeout(taoensso$sente$connect_fn,backoff_ms);
} else {
return null;
}
});})(retry_id,WebSocket,temp__4657__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e44599){if((e44599 instanceof Error)){
var e = e44599;
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (e,retry_fn,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket js/Error"], null);
});})(e,retry_fn,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);

return null;
} else {
throw e44599;

}
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__44600 = _QMARK_socket;
(G__44600["onerror"] = ((function (G__44600,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (G__44600,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",ws_ev], null);
});})(G__44600,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);
});})(G__44600,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__44600["onmessage"] = ((function (G__44600,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__44601 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__44601,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__44601,(1),null);
var or__25265__auto__ = (function (){var and__25253__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(and__25253__auto__)){
return cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));
} else {
return and__25253__auto__;
}
})();
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
var temp__4655__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4655__auto__)){
var cb_uuid = temp__4655__auto__;
var temp__4655__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cb_fn = temp__4655__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__25265__auto__,ppstr,vec__44601,clj,_QMARK_cb_uuid,G__44600,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__25265__auto__,ppstr,vec__44601,clj,_QMARK_cb_uuid,G__44600,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
});})(G__44600,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__44600["onopen"] = ((function (G__44600,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__44600,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__44600,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__44600,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__44600["onclose"] = ((function (G__44600,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);
});})(G__44600,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

return G__44600;
})());
}
});})(retry_id,WebSocket,temp__4657__auto__,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,retry_id);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

connect_fn.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"kalive-ms","kalive-ms",1851265548,null),new cljs.core.Symbol(null,"kalive-timer_","kalive-timer_",-1096022620,null),new cljs.core.Symbol(null,"kalive-due?_","kalive-due?_",1679969599,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"active-retry-id_","active-retry-id_",1468292413,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__25913__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__25913__auto__,writer__25914__auto__){
return cljs.core._write.call(null,writer__25914__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__44561){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__44561),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__44561),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__44561),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__44561),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__44561),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__44561),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__44561),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__44561),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__44561),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__44561),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__44561),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__44561),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__44561),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__44561),null,cljs.core.dissoc.call(null,G__44561,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.timeout_ms = timeout_ms;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.active_retry_id_ = active_retry_id_;
this.backoff_ms_fn = backoff_ms_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25879__auto__,k__25880__auto__){
var self__ = this;
var this__25879__auto____$1 = this;
return cljs.core._lookup.call(null,this__25879__auto____$1,k__25880__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25881__auto__,k44620,else__25882__auto__){
var self__ = this;
var this__25881__auto____$1 = this;
var G__44622 = (((k44620 instanceof cljs.core.Keyword))?k44620.fqn:null);
switch (G__44622) {
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "url":
return self__.url;

break;
case "active-retry-id_":
return self__.active_retry_id_;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "timeout-ms":
return self__.timeout_ms;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44620,else__25882__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25893__auto__,writer__25894__auto__,opts__25895__auto__){
var self__ = this;
var this__25893__auto____$1 = this;
var pr_pair__25896__auto__ = ((function (this__25893__auto____$1){
return (function (keyval__25897__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25894__auto__,cljs.core.pr_writer,""," ","",opts__25895__auto__,keyval__25897__auto__);
});})(this__25893__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25894__auto__,pr_pair__25896__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__25895__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44619){
var self__ = this;
var G__44619__$1 = this;
return (new cljs.core.RecordIter((0),G__44619__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25877__auto__){
var self__ = this;
var this__25877__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25873__auto__){
var self__ = this;
var this__25873__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25883__auto__){
var self__ = this;
var this__25883__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25874__auto__){
var self__ = this;
var this__25874__auto____$1 = this;
var h__25700__auto__ = self__.__hash;
if(!((h__25700__auto__ == null))){
return h__25700__auto__;
} else {
var h__25700__auto____$1 = cljs.core.hash_imap.call(null,this__25874__auto____$1);
self__.__hash = h__25700__auto____$1;

return h__25700__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25875__auto__,other__25876__auto__){
var self__ = this;
var this__25875__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25253__auto__ = other__25876__auto__;
if(cljs.core.truth_(and__25253__auto__)){
var and__25253__auto____$1 = (this__25875__auto____$1.constructor === other__25876__auto__.constructor);
if(and__25253__auto____$1){
return cljs.core.equiv_map.call(null,this__25875__auto____$1,other__25876__auto__);
} else {
return and__25253__auto____$1;
}
} else {
return and__25253__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25888__auto__,k__25889__auto__){
var self__ = this;
var this__25888__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__25889__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25888__auto____$1),self__.__meta),k__25889__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25889__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25886__auto__,k__25887__auto__,G__44619){
var self__ = this;
var this__25886__auto____$1 = this;
var pred__44623 = cljs.core.keyword_identical_QMARK_;
var expr__44624 = k__25887__auto__;
if(cljs.core.truth_(pred__44623.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__44624))){
return (new taoensso.sente.ChAjaxSocket(G__44619,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44623.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__44624))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__44619,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44623.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__44624))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__44619,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44623.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__44624))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__44619,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44623.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__44624))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__44619,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44623.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__44624))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__44619,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44623.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__44624))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__44619,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44623.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__44624))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,G__44619,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44623.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__44624))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,G__44619,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44623.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__44624))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,G__44619,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44623.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__44624))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,G__44619,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25887__auto__,G__44619),null));
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25891__auto__){
var self__ = this;
var this__25891__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25878__auto__,G__44619){
var self__ = this;
var this__25878__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,G__44619,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25884__auto__,entry__25885__auto__){
var self__ = this;
var this__25884__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25885__auto__)){
return cljs.core._assoc.call(null,this__25884__auto____$1,cljs.core._nth.call(null,entry__25885__auto__,(0)),cljs.core._nth.call(null,entry__25885__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25884__auto____$1,entry__25885__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__44626){
var self__ = this;
var map__44627 = p__44626;
var map__44627__$1 = ((((!((map__44627 == null)))?((((map__44627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44627):map__44627);
var opts = map__44627__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__44627__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__44627__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__44627__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__44627,map__44627__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__44627,map__44627__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (_QMARK_cb_fn,chsk__$1,map__44627,map__44627__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function taoensso$sente$ajax_cb(p__44629){
var map__44633 = p__44629;
var map__44633__$1 = ((((!((map__44633 == null)))?((((map__44633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44633):map__44633);
var _QMARK_error = cljs.core.get.call(null,map__44633__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__44633__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__44635 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__44635,(0),null);
var _ = cljs.core.nth.call(null,vec__44635,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (content,resp_ppstr,vec__44635,resp_clj,_,map__44633,map__44633__$1,_QMARK_error,_QMARK_content,_QMARK_cb_fn,chsk__$1,map__44627,map__44627__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__44635,resp_clj,_,map__44633,map__44633__$1,_QMARK_error,_QMARK_content,_QMARK_cb_fn,chsk__$1,map__44627,map__44627__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(_QMARK_cb_fn,chsk__$1,map__44627,map__44627__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
return taoensso.sente.chsk_disconnect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"disconnected");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

var temp__4657__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4657__auto__)){
var x = temp__4657__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"reconnecting");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4657__auto___44651 = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4657__auto___44651)){
var x_44652 = temp__4657__auto___44651;
x_44652.abort();
} else {
}

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var retry_id = taoensso.encore.uuid_str.call(null);
var poll_fn = ((function (retry_id,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(retry_id,chsk__$1))
,null)),null);

var retry_fn = ((function (retry_id,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s)",retry_count_STAR_], null);
});})(retry_count_STAR_,backoff_ms,retry_id,chsk__$1))
,null)),null);

return window.setTimeout(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,retry_id,chsk__$1))
,backoff_ms);
} else {
return null;
}
});})(retry_id,chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,retry_id,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__44643){
var map__44647 = p__44643;
var map__44647__$1 = ((((!((map__44647 == null)))?((((map__44647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44647):map__44647);
var _QMARK_error = cljs.core.get.call(null,map__44647__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__44647__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__44649 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__44649,(0),null);
var _ = cljs.core.nth.call(null,vec__44649,(1),null);
var or__25265__auto___44653 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__25265__auto___44653)){
} else {
var buffered_evs_44654 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs_44654);

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}

return taoensso$sente$poll_fn.call(null,(0));
}
});})(retry_fn,retry_id,chsk__$1))
));
});})(retry_id,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,retry_id);

poll_fn.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null),new cljs.core.Symbol(null,"active-retry-id_","active-retry-id_",1468292413,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__25913__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__25913__auto__,writer__25914__auto__){
return cljs.core._write.call(null,writer__25914__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__44621){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__44621),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__44621),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__44621),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__44621),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__44621),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__44621),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__44621),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__44621),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__44621),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__44621),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__44621),null,cljs.core.dissoc.call(null,G__44621,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)),null));
});

taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,chsk_host,chsk_path,type){
var protocol__$1 = (function (){var G__44656 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__44656) {
case "ajax":
return protocol;

break;
case "ws":
if(cljs.core._EQ_.call(null,protocol,"https:")){
return "wss:";
} else {
return "ws:";
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(taoensso.encore.path.call(null,chsk_host,chsk_path))].join('');
});
/**
 * Returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *           ; May `put!` (inject) arbitrary `event`s to this channel.
 *  :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *  :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *  :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *  :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto)
 *  :host           ; Server host (defaults to current page's host)
 *  :params         ; Map of any params to incl. in chsk Ring requests (handy for
 *                  ; application-level auth, etc.)
 *  :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity w/in given
 *                  ; number of milliseconds
 *  :lp-timeout-ms  ; Ping to keep a long-polling (Ajax) conn alive '' [1]
 *  :packer         ; :edn (default), or an IPacker implementation (experimental)
 *  :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`
 *  :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 * 
 *   [1] If you're using Immutant and override the default :lp-timeout-ms, you'll
 *    need to provide the same timeout value to
 *    `taoensso.sente.server-adapters.immutant/make-immutant-adapter` and use
 *    the result of that function as the web server adapter to your server-side
 *    `make-channel-socket-server!`.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__26330__auto__ = [];
var len__26323__auto___44672 = arguments.length;
var i__26324__auto___44673 = (0);
while(true){
if((i__26324__auto___44673 < len__26323__auto___44672)){
args__26330__auto__.push((arguments[i__26324__auto___44673]));

var G__44674 = (i__26324__auto___44673 + (1));
i__26324__auto___44673 = G__44674;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__44661){
var vec__44662 = p__44661;
var map__44663 = cljs.core.nth.call(null,vec__44662,(0),null);
var map__44663__$1 = ((((!((map__44663 == null)))?((((map__44663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44663):map__44663);
var opts = map__44663__$1;
var ajax_opts = cljs.core.get.call(null,map__44663__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__44663__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var lp_timeout_ms = cljs.core.get.call(null,map__44663__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var client_id = cljs.core.get.call(null,map__44663__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__25265__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var packer = cljs.core.get.call(null,map__44663__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__44663__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__44663__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__44663__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__44663__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__44663__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__44663__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__44662,(1),null);
if(cljs.core.truth_((function (){var __x = type;
try{if(cljs.core.truth_(taoensso.truss.impl._invar_pred.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null)).call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e44665){if((e44665 instanceof Error)){
var __t = e44665;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",__x,__t,null);
} else {
throw e44665;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null),new cljs.core.Symbol(null,"type","type",-1480165421,null))))].join('')));
}

if(cljs.core.truth_((function (){var __x = client_id;
try{if(cljs.core.truth_(taoensso.encore.nblank_str_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e44666){if((e44666 instanceof Error)){
var __t = e44666;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",__x,__t,null);
} else {
throw e44666;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol("enc","nblank-str?","enc/nblank-str?",19952870,null),new cljs.core.Symbol(null,"client-id","client-id",1175909387,null))))].join('')));
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (vec__44662,map__44663,map__44663__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__44662,map__44663,map__44663__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (vec__44662,map__44663,map__44663__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__44662,map__44663,map__44663__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var win_location = taoensso.encore.get_window_location.call(null);
var win_protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_location);
var host__$1 = (function (){var or__25265__auto__ = host;
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var path__$1 = (function (){var or__25265__auto__ = path;
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);
var ever_opened_QMARK__ = cljs.core.atom.call(null,false);
var state_STAR_ = ((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__44662,map__44663,map__44663__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__25265__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));
if(or__25265__auto__){
return or__25265__auto__;
} else {
return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})())){
return state;
} else {
cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__44662,map__44663,map__44663__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__44662,map__44663,map__44663__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__44662,map__44663,map__44663__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),(function (){var _LT_server_ch = new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs);
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__44662,map__44663,map__44663__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__44662,map__44663,map__44663__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
} else {
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__44662,map__44663,map__44663__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__44667 = ev;
var id = cljs.core.nth.call(null,vec__44667,(0),null);
var _QMARK_data = cljs.core.nth.call(null,vec__44667,(1),null);
var __x_44675 = (function (){try{return cljs.core.namespace.call(null,id);
}catch (e44668){if((e44668 instanceof Error)){
var __t = e44668;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__44658#] (not= p1__44658# \"chsk\")) (namespace id))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e44668;

}
}})();
try{if(((function (__x_44675,vec__44667,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__44662,map__44663,map__44663__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (p1__44658_SHARP_){
return cljs.core.not_EQ_.call(null,p1__44658_SHARP_,"chsk");
});})(__x_44675,vec__44667,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__44662,map__44663,map__44663__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x_44675)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e44669){if((e44669 instanceof Error)){
var __t_44676 = e44669;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__44658#] (not= p1__44658# \"chsk\")) (namespace id))",__x_44675,__t_44676,null);
} else {
throw e44669;

}
}
return ev;
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__44662,map__44663,map__44663__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
}
})()], null));
var chsk = (function (){var or__25265__auto__ = (function (){var and__25253__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));
if(and__25253__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[client_id,ws_kalive_ms,packer__$1,private_chs,params,cljs.core.atom.call(null,(0)),backoff_ms_fn,cljs.core.atom.call(null,null),(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ws","ws",86841443));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
}
})(),cljs.core.atom.call(null,"pending"),cljs.core.atom.call(null,true),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__25253__auto__;
}
})();
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
var and__25253__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));
if(and__25253__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"state_","state_",957667102)],[cljs.core.atom.call(null,null),client_id,packer__$1,private_chs,params,backoff_ms_fn,(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
}
})(),cljs.core.atom.call(null,"pending"),ajax_opts,lp_timeout_ms,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__25253__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Failed to create channel socket"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"chsk","chsk",776828446,null)))].join('')))})());
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__44662,map__44663,map__44663__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__44671 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__44671,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__44671,(1),null);
var ev__$1 = vec__44671;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__44662,map__44663,map__44663__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq44659){
var G__44660 = cljs.core.first.call(null,seq44659);
var seq44659__$1 = cljs.core.next.call(null,seq44659);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44660,seq44659__$1);
});
taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__44883 = opts;
var map__44883__$1 = ((((!((map__44883 == null)))?((((map__44883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44883):map__44883);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__44883__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__44883__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__28419__auto___45089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28419__auto___45089,map__44883,map__44883__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
var f__28420__auto__ = (function (){var switch__28354__auto__ = ((function (c__28419__auto___45089,map__44883,map__44883__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (state_45014){
var state_val_45015 = (state_45014[(1)]);
if((state_val_45015 === (7))){
var inst_45010 = (state_45014[(2)]);
var state_45014__$1 = state_45014;
var statearr_45016_45090 = state_45014__$1;
(statearr_45016_45090[(2)] = inst_45010);

(statearr_45016_45090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (20))){
var inst_44892 = (state_45014[(7)]);
var inst_44891 = (state_45014[(8)]);
var inst_44893 = (state_45014[(9)]);
var inst_44919 = (state_45014[(10)]);
var inst_44918 = (state_45014[(11)]);
var inst_44894 = (state_45014[(12)]);
var inst_44929 = (function (){var vec__44886 = inst_44891;
var v = inst_44892;
var p = inst_44893;
var stop_QMARK_ = inst_44894;
var map__44897 = inst_44918;
var event_msg = inst_44918;
var event = inst_44919;
return ((function (vec__44886,v,p,stop_QMARK_,map__44897,event_msg,event,inst_44892,inst_44891,inst_44893,inst_44919,inst_44918,inst_44894,state_val_45015,c__28419__auto___45089,map__44883,map__44883__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});
;})(vec__44886,v,p,stop_QMARK_,map__44897,event_msg,event,inst_44892,inst_44891,inst_44893,inst_44919,inst_44918,inst_44894,state_val_45015,c__28419__auto___45089,map__44883,map__44883__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_44930 = (new cljs.core.Delay(inst_44929,null));
var inst_44931 = taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),inst_44930,null);
var state_45014__$1 = state_45014;
var statearr_45017_45091 = state_45014__$1;
(statearr_45017_45091[(2)] = inst_44931);

(statearr_45017_45091[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (27))){
var inst_44918 = (state_45014[(11)]);
var inst_44936 = (state_45014[(2)]);
var inst_44937 = "(server-event-msg? event-msg)";
var inst_44938 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_44937,inst_44918,inst_44936,null);
var state_45014__$1 = state_45014;
var statearr_45018_45092 = state_45014__$1;
(statearr_45018_45092[(2)] = inst_44938);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45014__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (1))){
var state_45014__$1 = state_45014;
var statearr_45019_45093 = state_45014__$1;
(statearr_45019_45093[(2)] = null);

(statearr_45019_45093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (24))){
var state_45014__$1 = state_45014;
var statearr_45020_45094 = state_45014__$1;
(statearr_45020_45094[(2)] = null);

(statearr_45020_45094[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (39))){
var state_45014__$1 = state_45014;
var statearr_45021_45095 = state_45014__$1;
(statearr_45021_45095[(2)] = null);

(statearr_45021_45095[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (46))){
var inst_44983 = (state_45014[(13)]);
var inst_44991 = (state_45014[(2)]);
var inst_44992 = [inst_44991,null];
var inst_44993 = (new cljs.core.PersistentVector(null,2,(5),inst_44983,inst_44992,null));
var state_45014__$1 = state_45014;
var statearr_45022_45096 = state_45014__$1;
(statearr_45022_45096[(2)] = inst_44993);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45014__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (4))){
var inst_44891 = (state_45014[(8)]);
var inst_44893 = (state_45014[(9)]);
var inst_44894 = (state_45014[(12)]);
var inst_44891__$1 = (state_45014[(2)]);
var inst_44892 = cljs.core.nth.call(null,inst_44891__$1,(0),null);
var inst_44893__$1 = cljs.core.nth.call(null,inst_44891__$1,(1),null);
var inst_44894__$1 = taoensso.encore.kw_identical_QMARK_.call(null,inst_44893__$1,ch_ctrl);
var state_45014__$1 = (function (){var statearr_45023 = state_45014;
(statearr_45023[(7)] = inst_44892);

(statearr_45023[(8)] = inst_44891__$1);

(statearr_45023[(9)] = inst_44893__$1);

(statearr_45023[(12)] = inst_44894__$1);

return statearr_45023;
})();
if(cljs.core.truth_(inst_44894__$1)){
var statearr_45024_45097 = state_45014__$1;
(statearr_45024_45097[(1)] = (5));

} else {
var statearr_45025_45098 = state_45014__$1;
(statearr_45025_45098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (15))){
var inst_44892 = (state_45014[(7)]);
var state_45014__$1 = state_45014;
var statearr_45026_45099 = state_45014__$1;
(statearr_45026_45099[(2)] = inst_44892);

(statearr_45026_45099[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (48))){
var state_45014__$1 = state_45014;
var statearr_45027_45100 = state_45014__$1;
(statearr_45027_45100[(2)] = null);

(statearr_45027_45100[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (21))){
var state_45014__$1 = state_45014;
var statearr_45028_45101 = state_45014__$1;
(statearr_45028_45101[(2)] = null);

(statearr_45028_45101[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (31))){
var inst_44947 = (state_45014[(2)]);
var state_45014__$1 = state_45014;
var statearr_45029_45102 = state_45014__$1;
(statearr_45029_45102[(2)] = inst_44947);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45014__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (32))){
var inst_44964 = (state_45014[(2)]);
var state_45014__$1 = state_45014;
var statearr_45030_45103 = state_45014__$1;
(statearr_45030_45103[(2)] = inst_44964);

(statearr_45030_45103[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (40))){
var inst_45007 = (state_45014[(2)]);
var state_45014__$1 = (function (){var statearr_45031 = state_45014;
(statearr_45031[(14)] = inst_45007);

return statearr_45031;
})();
var statearr_45032_45104 = state_45014__$1;
(statearr_45032_45104[(2)] = null);

(statearr_45032_45104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (33))){
var inst_44918 = (state_45014[(11)]);
var inst_44951 = (state_45014[(2)]);
var inst_44952 = "(client-event-msg? event-msg)";
var inst_44953 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_44952,inst_44918,inst_44951,null);
var state_45014__$1 = state_45014;
var statearr_45033_45105 = state_45014__$1;
(statearr_45033_45105[(2)] = inst_44953);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45014__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (13))){
var inst_44910 = (state_45014[(2)]);
var state_45014__$1 = state_45014;
var statearr_45034_45106 = state_45014__$1;
(statearr_45034_45106[(2)] = inst_44910);

(statearr_45034_45106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (22))){
var inst_44934 = (state_45014[(2)]);
var state_45014__$1 = (function (){var statearr_45035 = state_45014;
(statearr_45035[(15)] = inst_44934);

return statearr_45035;
})();
if(cljs.core.truth_(server_QMARK_)){
var statearr_45036_45107 = state_45014__$1;
(statearr_45036_45107[(1)] = (23));

} else {
var statearr_45037_45108 = state_45014__$1;
(statearr_45037_45108[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (36))){
var inst_44960 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_45014__$1 = state_45014;
var statearr_45038_45109 = state_45014__$1;
(statearr_45038_45109[(2)] = inst_44960);

(statearr_45038_45109[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (41))){
var inst_44995 = (state_45014[(16)]);
var inst_44997 = (state_45014[(17)]);
var inst_44995__$1 = (state_45014[(2)]);
var inst_44996 = cljs.core.nth.call(null,inst_44995__$1,(0),null);
var inst_44997__$1 = cljs.core.nth.call(null,inst_44995__$1,(1),null);
var state_45014__$1 = (function (){var statearr_45039 = state_45014;
(statearr_45039[(16)] = inst_44995__$1);

(statearr_45039[(17)] = inst_44997__$1);

(statearr_45039[(18)] = inst_44996);

return statearr_45039;
})();
if(cljs.core.truth_(inst_44997__$1)){
var statearr_45040_45110 = state_45014__$1;
(statearr_45040_45110[(1)] = (47));

} else {
var statearr_45041_45111 = state_45014__$1;
(statearr_45041_45111[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (43))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45014,(42),Error,null,(41));
var inst_44983 = cljs.core.PersistentVector.EMPTY_NODE;
var state_45014__$1 = (function (){var statearr_45042 = state_45014;
(statearr_45042[(13)] = inst_44983);

return statearr_45042;
})();
if(cljs.core.truth_(error_handler)){
var statearr_45043_45112 = state_45014__$1;
(statearr_45043_45112[(1)] = (44));

} else {
var statearr_45044_45113 = state_45014__$1;
(statearr_45044_45113[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (29))){
var inst_44918 = (state_45014[(11)]);
var state_45014__$1 = state_45014;
var statearr_45045_45114 = state_45014__$1;
(statearr_45045_45114[(2)] = inst_44918);

(statearr_45045_45114[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (44))){
var inst_44918 = (state_45014[(11)]);
var inst_44973 = (state_45014[(19)]);
var inst_44985 = error_handler.call(null,inst_44973,inst_44918);
var state_45014__$1 = state_45014;
var statearr_45046_45115 = state_45014__$1;
(statearr_45046_45115[(2)] = inst_44985);

(statearr_45046_45115[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (6))){
var inst_44892 = (state_45014[(7)]);
var inst_44900 = (inst_44892 == null);
var inst_44901 = cljs.core.not.call(null,inst_44900);
var state_45014__$1 = state_45014;
if(inst_44901){
var statearr_45047_45116 = state_45014__$1;
(statearr_45047_45116[(1)] = (8));

} else {
var statearr_45048_45117 = state_45014__$1;
(statearr_45048_45117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (28))){
var inst_44918 = (state_45014[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45014,(27),Error,null,(26));
var inst_44942 = taoensso.sente.server_event_msg_QMARK_.call(null,inst_44918);
var state_45014__$1 = state_45014;
if(cljs.core.truth_(inst_44942)){
var statearr_45049_45118 = state_45014__$1;
(statearr_45049_45118[(1)] = (29));

} else {
var statearr_45050_45119 = state_45014__$1;
(statearr_45050_45119[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (25))){
var inst_44927 = (state_45014[(20)]);
var inst_44966 = (state_45014[(2)]);
var inst_44967 = event_msg_handler.call(null,inst_44966);
var inst_44968 = [inst_44967,null];
var inst_44969 = (new cljs.core.PersistentVector(null,2,(5),inst_44927,inst_44968,null));
var state_45014__$1 = state_45014;
var statearr_45051_45120 = state_45014__$1;
(statearr_45051_45120[(2)] = inst_44969);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45014__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (34))){
var inst_44918 = (state_45014[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45014,(33),Error,null,(32));
var inst_44957 = taoensso.sente.client_event_msg_QMARK_.call(null,inst_44918);
var state_45014__$1 = state_45014;
if(cljs.core.truth_(inst_44957)){
var statearr_45052_45121 = state_45014__$1;
(statearr_45052_45121[(1)] = (35));

} else {
var statearr_45053_45122 = state_45014__$1;
(statearr_45053_45122[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (17))){
var inst_44971 = (state_45014[(21)]);
var inst_44973 = (state_45014[(19)]);
var inst_44971__$1 = (state_45014[(2)]);
var inst_44972 = cljs.core.nth.call(null,inst_44971__$1,(0),null);
var inst_44973__$1 = cljs.core.nth.call(null,inst_44971__$1,(1),null);
var state_45014__$1 = (function (){var statearr_45054 = state_45014;
(statearr_45054[(22)] = inst_44972);

(statearr_45054[(21)] = inst_44971__$1);

(statearr_45054[(19)] = inst_44973__$1);

return statearr_45054;
})();
if(cljs.core.truth_(inst_44973__$1)){
var statearr_45055_45123 = state_45014__$1;
(statearr_45055_45123[(1)] = (38));

} else {
var statearr_45056_45124 = state_45014__$1;
(statearr_45056_45124[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (3))){
var inst_45012 = (state_45014[(2)]);
var state_45014__$1 = state_45014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45014__$1,inst_45012);
} else {
if((state_val_45015 === (12))){
var state_45014__$1 = state_45014;
var statearr_45057_45125 = state_45014__$1;
(statearr_45057_45125[(2)] = false);

(statearr_45057_45125[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (2))){
var inst_44887 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44888 = [ch_recv,ch_ctrl];
var inst_44889 = (new cljs.core.PersistentVector(null,2,(5),inst_44887,inst_44888,null));
var state_45014__$1 = state_45014;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45014__$1,(4),inst_44889);
} else {
if((state_val_45015 === (23))){
var state_45014__$1 = state_45014;
var statearr_45058_45126 = state_45014__$1;
(statearr_45058_45126[(2)] = null);

(statearr_45058_45126[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (47))){
var inst_44892 = (state_45014[(7)]);
var inst_44995 = (state_45014[(16)]);
var inst_44891 = (state_45014[(8)]);
var inst_44997 = (state_45014[(17)]);
var inst_44893 = (state_45014[(9)]);
var inst_44971 = (state_45014[(21)]);
var inst_44919 = (state_45014[(10)]);
var inst_44918 = (state_45014[(11)]);
var inst_44973 = (state_45014[(19)]);
var inst_44996 = (state_45014[(18)]);
var inst_44894 = (state_45014[(12)]);
var inst_44999 = (function (){var p = inst_44893;
var _QMARK_error = inst_44973;
var vec__44886 = inst_44891;
var vec__44975 = inst_44995;
var v = inst_44892;
var _ = inst_44996;
var e2 = inst_44997;
var vec__44898 = inst_44971;
var _QMARK_error2 = inst_44997;
var event_msg = inst_44918;
var e = inst_44973;
var temp__4657__auto__ = inst_44997;
var event = inst_44919;
var stop_QMARK_ = inst_44894;
var map__44897 = inst_44918;
return ((function (p,_QMARK_error,vec__44886,vec__44975,v,_,e2,vec__44898,_QMARK_error2,event_msg,e,temp__4657__auto__,event,stop_QMARK_,map__44897,inst_44892,inst_44995,inst_44891,inst_44997,inst_44893,inst_44971,inst_44919,inst_44918,inst_44973,inst_44996,inst_44894,state_val_45015,c__28419__auto___45089,map__44883,map__44883__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});
;})(p,_QMARK_error,vec__44886,vec__44975,v,_,e2,vec__44898,_QMARK_error2,event_msg,e,temp__4657__auto__,event,stop_QMARK_,map__44897,inst_44892,inst_44995,inst_44891,inst_44997,inst_44893,inst_44971,inst_44919,inst_44918,inst_44973,inst_44996,inst_44894,state_val_45015,c__28419__auto___45089,map__44883,map__44883__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_45000 = (new cljs.core.Delay(inst_44999,null));
var inst_45001 = taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),inst_45000,null);
var state_45014__$1 = state_45014;
var statearr_45059_45127 = state_45014__$1;
(statearr_45059_45127[(2)] = inst_45001);

(statearr_45059_45127[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (35))){
var inst_44918 = (state_45014[(11)]);
var state_45014__$1 = state_45014;
var statearr_45060_45128 = state_45014__$1;
(statearr_45060_45128[(2)] = inst_44918);

(statearr_45060_45128[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45014,(18),Error,null,(17));
var inst_44927 = cljs.core.PersistentVector.EMPTY_NODE;
var state_45014__$1 = (function (){var statearr_45061 = state_45014;
(statearr_45061[(20)] = inst_44927);

return statearr_45061;
})();
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_45062_45129 = state_45014__$1;
(statearr_45062_45129[(1)] = (20));

} else {
var statearr_45063_45130 = state_45014__$1;
(statearr_45063_45130[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (11))){
var state_45014__$1 = state_45014;
var statearr_45064_45131 = state_45014__$1;
(statearr_45064_45131[(2)] = true);

(statearr_45064_45131[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (9))){
var state_45014__$1 = state_45014;
var statearr_45065_45132 = state_45014__$1;
(statearr_45065_45132[(2)] = false);

(statearr_45065_45132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (5))){
var state_45014__$1 = state_45014;
var statearr_45066_45133 = state_45014__$1;
(statearr_45066_45133[(2)] = null);

(statearr_45066_45133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (14))){
var inst_44892 = (state_45014[(7)]);
var inst_44915 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44892);
var state_45014__$1 = state_45014;
var statearr_45067_45134 = state_45014__$1;
(statearr_45067_45134[(2)] = inst_44915);

(statearr_45067_45134[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (45))){
var inst_44892 = (state_45014[(7)]);
var inst_44891 = (state_45014[(8)]);
var inst_44972 = (state_45014[(22)]);
var inst_44893 = (state_45014[(9)]);
var inst_44971 = (state_45014[(21)]);
var inst_44919 = (state_45014[(10)]);
var inst_44918 = (state_45014[(11)]);
var inst_44973 = (state_45014[(19)]);
var inst_44894 = (state_45014[(12)]);
var inst_44987 = (function (){var p = inst_44893;
var _QMARK_error = inst_44973;
var vec__44886 = inst_44891;
var v = inst_44892;
var temp__4655__auto__ = error_handler;
var _ = inst_44972;
var vec__44898 = inst_44971;
var event_msg = inst_44918;
var e = inst_44973;
var temp__4657__auto__ = inst_44973;
var event = inst_44919;
var stop_QMARK_ = inst_44894;
var map__44897 = inst_44918;
return ((function (p,_QMARK_error,vec__44886,v,temp__4655__auto__,_,vec__44898,event_msg,e,temp__4657__auto__,event,stop_QMARK_,map__44897,inst_44892,inst_44891,inst_44972,inst_44893,inst_44971,inst_44919,inst_44918,inst_44973,inst_44894,state_val_45015,c__28419__auto___45089,map__44883,map__44883__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk router `event-msg-handler` error: %s",event], null);
});
;})(p,_QMARK_error,vec__44886,v,temp__4655__auto__,_,vec__44898,event_msg,e,temp__4657__auto__,event,stop_QMARK_,map__44897,inst_44892,inst_44891,inst_44972,inst_44893,inst_44971,inst_44919,inst_44918,inst_44973,inst_44894,state_val_45015,c__28419__auto___45089,map__44883,map__44883__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_44988 = (new cljs.core.Delay(inst_44987,null));
var inst_44989 = taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,null,new cljs.core.Keyword(null,"f","f",-1597136552),inst_44988,null);
var state_45014__$1 = state_45014;
var statearr_45068_45135 = state_45014__$1;
(statearr_45068_45135[(2)] = inst_44989);

(statearr_45068_45135[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (26))){
var inst_44949 = (state_45014[(2)]);
var state_45014__$1 = state_45014;
var statearr_45069_45136 = state_45014__$1;
(statearr_45069_45136[(2)] = inst_44949);

(statearr_45069_45136[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (16))){
var inst_44918 = (state_45014[(11)]);
var inst_44918__$1 = (state_45014[(2)]);
var inst_44919 = cljs.core.get.call(null,inst_44918__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_45014__$1 = (function (){var statearr_45070 = state_45014;
(statearr_45070[(10)] = inst_44919);

(statearr_45070[(11)] = inst_44918__$1);

return statearr_45070;
})();
var statearr_45071_45137 = state_45014__$1;
(statearr_45071_45137[(2)] = null);

(statearr_45071_45137[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (38))){
var state_45014__$1 = state_45014;
var statearr_45072_45138 = state_45014__$1;
(statearr_45072_45138[(2)] = null);

(statearr_45072_45138[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (30))){
var inst_44945 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_45014__$1 = state_45014;
var statearr_45073_45139 = state_45014__$1;
(statearr_45073_45139[(2)] = inst_44945);

(statearr_45073_45139[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (10))){
var inst_44913 = (state_45014[(2)]);
var state_45014__$1 = state_45014;
if(cljs.core.truth_(inst_44913)){
var statearr_45074_45140 = state_45014__$1;
(statearr_45074_45140[(1)] = (14));

} else {
var statearr_45075_45141 = state_45014__$1;
(statearr_45075_45141[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (18))){
var inst_44920 = (state_45014[(2)]);
var inst_44921 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44922 = [null,inst_44920];
var inst_44923 = (new cljs.core.PersistentVector(null,2,(5),inst_44921,inst_44922,null));
var state_45014__$1 = state_45014;
var statearr_45076_45142 = state_45014__$1;
(statearr_45076_45142[(2)] = inst_44923);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45014__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (42))){
var inst_44976 = (state_45014[(2)]);
var inst_44977 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44978 = [null,inst_44976];
var inst_44979 = (new cljs.core.PersistentVector(null,2,(5),inst_44977,inst_44978,null));
var state_45014__$1 = state_45014;
var statearr_45077_45143 = state_45014__$1;
(statearr_45077_45143[(2)] = inst_44979);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45014__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (37))){
var inst_44962 = (state_45014[(2)]);
var state_45014__$1 = state_45014;
var statearr_45078_45144 = state_45014__$1;
(statearr_45078_45144[(2)] = inst_44962);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45014__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (8))){
var inst_44892 = (state_45014[(7)]);
var inst_44903 = inst_44892.cljs$lang$protocol_mask$partition0$;
var inst_44904 = (inst_44903 & (64));
var inst_44905 = inst_44892.cljs$core$ISeq$;
var inst_44906 = (inst_44904) || (inst_44905);
var state_45014__$1 = state_45014;
if(cljs.core.truth_(inst_44906)){
var statearr_45079_45145 = state_45014__$1;
(statearr_45079_45145[(1)] = (11));

} else {
var statearr_45080_45146 = state_45014__$1;
(statearr_45080_45146[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45015 === (49))){
var inst_45004 = (state_45014[(2)]);
var state_45014__$1 = state_45014;
var statearr_45081_45147 = state_45014__$1;
(statearr_45081_45147[(2)] = inst_45004);

(statearr_45081_45147[(1)] = (40));


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
}
}
}
}
});})(c__28419__auto___45089,map__44883,map__44883__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
;
return ((function (switch__28354__auto__,c__28419__auto___45089,map__44883,map__44883__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__28355__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__28355__auto____0 = (function (){
var statearr_45085 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45085[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__28355__auto__);

(statearr_45085[(1)] = (1));

return statearr_45085;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__28355__auto____1 = (function (state_45014){
while(true){
var ret_value__28356__auto__ = (function (){try{while(true){
var result__28357__auto__ = switch__28354__auto__.call(null,state_45014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28357__auto__;
}
break;
}
}catch (e45086){if((e45086 instanceof Object)){
var ex__28358__auto__ = e45086;
var statearr_45087_45148 = state_45014;
(statearr_45087_45148[(5)] = ex__28358__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45149 = state_45014;
state_45014 = G__45149;
continue;
} else {
return ret_value__28356__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__28355__auto__ = function(state_45014){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__28355__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__28355__auto____1.call(this,state_45014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__28355__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__28355__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__28355__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__28355__auto__;
})()
;})(switch__28354__auto__,c__28419__auto___45089,map__44883,map__44883__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var state__28421__auto__ = (function (){var statearr_45088 = f__28420__auto__.call(null);
(statearr_45088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28419__auto___45089);

return statearr_45088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28421__auto__);
});})(c__28419__auto___45089,map__44883,map__44883__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
);


return ((function (map__44883,map__44883__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__44883,map__44883__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
});
/**
 * Creates a go-loop to call `(event-msg-handler <server-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45157 = arguments.length;
var i__26324__auto___45158 = (0);
while(true){
if((i__26324__auto___45158 < len__26323__auto___45157)){
args__26330__auto__.push((arguments[i__26324__auto___45158]));

var G__45159 = (i__26324__auto___45158 + (1));
i__26324__auto___45158 = G__45159;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((2) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((2)),(0))):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26331__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__45153){
var vec__45154 = p__45153;
var map__45155 = cljs.core.nth.call(null,vec__45154,(0),null);
var map__45155__$1 = ((((!((map__45155 == null)))?((((map__45155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45155):map__45155);
var opts = map__45155__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__45155__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__45155__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq45150){
var G__45151 = cljs.core.first.call(null,seq45150);
var seq45150__$1 = cljs.core.next.call(null,seq45150);
var G__45152 = cljs.core.first.call(null,seq45150__$1);
var seq45150__$2 = cljs.core.next.call(null,seq45150__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45151,G__45152,seq45150__$2);
});
/**
 * Creates a go-loop to call `(event-msg-handler <client-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45167 = arguments.length;
var i__26324__auto___45168 = (0);
while(true){
if((i__26324__auto___45168 < len__26323__auto___45167)){
args__26330__auto__.push((arguments[i__26324__auto___45168]));

var G__45169 = (i__26324__auto___45168 + (1));
i__26324__auto___45168 = G__45169;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((2) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((2)),(0))):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26331__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__45163){
var vec__45164 = p__45163;
var map__45165 = cljs.core.nth.call(null,vec__45164,(0),null);
var map__45165__$1 = ((((!((map__45165 == null)))?((((map__45165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45165):map__45165);
var opts = map__45165__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__45165__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__45165__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq45160){
var G__45161 = cljs.core.first.call(null,seq45160);
var seq45160__$1 = cljs.core.next.call(null,seq45160);
var G__45162 = cljs.core.first.call(null,seq45160__$1);
var seq45160__$2 = cljs.core.next.call(null,seq45160__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45161,G__45162,seq45160__$2);
});
/**
 * Alias for `make-channel-socket-client!`
 */
taoensso.sente.make_channel_socket_BANG_ = (function taoensso$sente$make_channel_socket_BANG_(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45171 = arguments.length;
var i__26324__auto___45172 = (0);
while(true){
if((i__26324__auto___45172 < len__26323__auto___45171)){
args__26330__auto__.push((arguments[i__26324__auto___45172]));

var G__45173 = (i__26324__auto___45172 + (1));
i__26324__auto___45172 = G__45173;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((0) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((0)),(0))):null);
return taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__26331__auto__);
});

taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,taoensso.sente.make_channel_socket_client_BANG_,args);
});

taoensso.sente.make_channel_socket_BANG_.cljs$lang$maxFixedArity = (0);

taoensso.sente.make_channel_socket_BANG_.cljs$lang$applyTo = (function (seq45170){
return taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45170));
});
/**
 * Alias for `start-client-chsk-router!`
 */
taoensso.sente.start_chsk_router_BANG_ = (function taoensso$sente$start_chsk_router_BANG_(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45175 = arguments.length;
var i__26324__auto___45176 = (0);
while(true){
if((i__26324__auto___45176 < len__26323__auto___45175)){
args__26330__auto__.push((arguments[i__26324__auto___45176]));

var G__45177 = (i__26324__auto___45176 + (1));
i__26324__auto___45176 = G__45177;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((0) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((0)),(0))):null);
return taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__26331__auto__);
});

taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,taoensso.sente.start_client_chsk_router_BANG_,args);
});

taoensso.sente.start_chsk_router_BANG_.cljs$lang$maxFixedArity = (0);

taoensso.sente.start_chsk_router_BANG_.cljs$lang$applyTo = (function (seq45174){
return taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45174));
});
/**
 * DEPRECATED: Please use `start-chsk-router!` instead.
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});
/**
 * DEPRECATED. Please use `timbre/set-level!` instead.
 */
taoensso.sente.set_logging_level_BANG_ = (function taoensso$sente$set_logging_level_BANG_(level){
return taoensso.timbre.set_level_BANG_.call(null,level);
});
/**
 * DEPRECATED: Please use `ajax-lite` instead.
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;
/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__45178,websocket_QMARK_){
var map__45181 = p__45178;
var map__45181__$1 = ((((!((map__45181 == null)))?((((map__45181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45181):map__45181);
var location = map__45181__$1;
var adjusted_protocol = cljs.core.get.call(null,map__45181__$1,new cljs.core.Keyword(null,"adjusted-protocol","adjusted-protocol",37431492));
var host = cljs.core.get.call(null,map__45181__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__45181__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
return [cljs.core.str(adjusted_protocol),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__25265__auto__ = path;
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map