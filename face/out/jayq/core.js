// Compiled by ClojureScript 1.7.170 {}
goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
jayq.core.crate_meta = (function jayq$core$crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function jayq$core$__GT_selector(sel){
if(typeof sel === 'string'){
return sel;
} else {
if(cljs.core.fn_QMARK_.call(null,sel)){
var temp__4655__auto__ = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__4655__auto__)){
var cm = temp__4655__auto__;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm),cljs.core.str("]")].join('');
} else {
return sel;
}
} else {
if((sel instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,sel);
} else {
return sel;

}
}
}
});
jayq.core.$ = (function jayq$core$$(var_args){
var args43666 = [];
var len__26323__auto___43669 = arguments.length;
var i__26324__auto___43670 = (0);
while(true){
if((i__26324__auto___43670 < len__26323__auto___43669)){
args43666.push((arguments[i__26324__auto___43670]));

var G__43671 = (i__26324__auto___43670 + (1));
i__26324__auto___43670 = G__43671;
continue;
} else {
}
break;
}

var G__43668 = args43666.length;
switch (G__43668) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43666.length)].join('')));

}
});

jayq.core.$.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return jQuery(jayq.core.__GT_selector.call(null,sel));
});

jayq.core.$.cljs$core$IFn$_invoke$arity$2 = (function (sel,context){
return jQuery(jayq.core.__GT_selector.call(null,sel),context);
});

jayq.core.$.cljs$lang$maxFixedArity = 2;
jQuery.prototype.cljs$core$ISeqable$ = true;

jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.get((0)))){
return this$__$1;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ISeq$ = true;

jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.get((0));
});

jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this$__$1 = this;
if((cljs.core.count.call(null,this$__$1) > (1))){
return this$__$1.slice((1));
} else {
return cljs.core.List.EMPTY;
}
});

jQuery.prototype.cljs$core$ICounted$ = true;

jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.length;
});

jQuery.prototype.cljs$core$IIndexed$ = true;

jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
return null;
}
});

jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
if((void 0 === not_found)){
return null;
} else {
return not_found;
}
}
});

jQuery.prototype.cljs$core$ISequential$ = true;

jQuery.prototype.cljs$core$ILookup$ = true;

jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
var or__25265__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,not_found);
});

jQuery.prototype.cljs$core$IReduce$ = true;

jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f);
});

jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f,start);
});

jQuery.prototype.cljs$core$IFn$ = true;

jQuery.prototype.call = (function() {
var G__43674 = null;
var G__43674__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__43674__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__43674 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__43674__2.call(this,self__,k);
case 3:
return G__43674__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43674.cljs$core$IFn$_invoke$arity$2 = G__43674__2;
G__43674.cljs$core$IFn$_invoke$arity$3 = G__43674__3;
return G__43674;
})()
;

jQuery.prototype.apply = (function (self__,args43673){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args43673)));
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});
jayq.core.anim = (function jayq$core$anim(var_args){
var args__26330__auto__ = [];
var len__26323__auto___43680 = arguments.length;
var i__26324__auto___43681 = (0);
while(true){
if((i__26324__auto___43681 < len__26323__auto___43680)){
args__26330__auto__.push((arguments[i__26324__auto___43681]));

var G__43682 = (i__26324__auto___43681 + (1));
i__26324__auto___43681 = G__43682;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((2) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((2)),(0))):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26331__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__43678){
var vec__43679 = p__43678;
var speed = cljs.core.nth.call(null,vec__43679,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43679,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq43675){
var G__43676 = cljs.core.first.call(null,seq43675);
var seq43675__$1 = cljs.core.next.call(null,seq43675);
var G__43677 = cljs.core.first.call(null,seq43675__$1);
var seq43675__$2 = cljs.core.next.call(null,seq43675__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__43676,G__43677,seq43675__$2);
});
jayq.core.text = (function jayq$core$text(var_args){
var args43683 = [];
var len__26323__auto___43686 = arguments.length;
var i__26324__auto___43687 = (0);
while(true){
if((i__26324__auto___43687 < len__26323__auto___43686)){
args43683.push((arguments[i__26324__auto___43687]));

var G__43688 = (i__26324__auto___43687 + (1));
i__26324__auto___43687 = G__43688;
continue;
} else {
}
break;
}

var G__43685 = args43683.length;
switch (G__43685) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43683.length)].join('')));

}
});

jayq.core.text.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.text();
});

jayq.core.text.cljs$core$IFn$_invoke$arity$2 = (function ($elem,txt){
return $elem.text(txt);
});

jayq.core.text.cljs$lang$maxFixedArity = 2;
jayq.core.css = (function jayq$core$css(var_args){
var args43690 = [];
var len__26323__auto___43693 = arguments.length;
var i__26324__auto___43694 = (0);
while(true){
if((i__26324__auto___43694 < len__26323__auto___43693)){
args43690.push((arguments[i__26324__auto___43694]));

var G__43695 = (i__26324__auto___43694 + (1));
i__26324__auto___43694 = G__43695;
continue;
} else {
}
break;
}

var G__43692 = args43690.length;
switch (G__43692) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43690.length)].join('')));

}
});

jayq.core.css.cljs$core$IFn$_invoke$arity$2 = (function ($elem,opts){
return $elem.css(cljs.core.clj__GT_js.call(null,opts));
});

jayq.core.css.cljs$core$IFn$_invoke$arity$3 = (function ($elem,p,v){
return $elem.css(cljs.core.name.call(null,p),v);
});

jayq.core.css.cljs$lang$maxFixedArity = 3;
jayq.core.attr = (function jayq$core$attr(var_args){
var args43697 = [];
var len__26323__auto___43700 = arguments.length;
var i__26324__auto___43701 = (0);
while(true){
if((i__26324__auto___43701 < len__26323__auto___43700)){
args43697.push((arguments[i__26324__auto___43701]));

var G__43702 = (i__26324__auto___43701 + (1));
i__26324__auto___43701 = G__43702;
continue;
} else {
}
break;
}

var G__43699 = args43697.length;
switch (G__43699) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43697.length)].join('')));

}
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.attr(cljs.core.name.call(null,n),v);
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.attr(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.attr.cljs$lang$maxFixedArity = 3;
jayq.core.prop = (function jayq$core$prop(var_args){
var args43704 = [];
var len__26323__auto___43707 = arguments.length;
var i__26324__auto___43708 = (0);
while(true){
if((i__26324__auto___43708 < len__26323__auto___43707)){
args43704.push((arguments[i__26324__auto___43708]));

var G__43709 = (i__26324__auto___43708 + (1));
i__26324__auto___43708 = G__43709;
continue;
} else {
}
break;
}

var G__43706 = args43704.length;
switch (G__43706) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43704.length)].join('')));

}
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.prop(cljs.core.name.call(null,n),v);
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.prop(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.prop.cljs$lang$maxFixedArity = 3;
jayq.core.remove_attr = (function jayq$core$remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name.call(null,a));
});
jayq.core.remove_prop = (function jayq$core$remove_prop($elem,a){
return $elem.removeProp(cljs.core.name.call(null,a));
});
jayq.core.data = (function jayq$core$data(var_args){
var args43711 = [];
var len__26323__auto___43714 = arguments.length;
var i__26324__auto___43715 = (0);
while(true){
if((i__26324__auto___43715 < len__26323__auto___43714)){
args43711.push((arguments[i__26324__auto___43715]));

var G__43716 = (i__26324__auto___43715 + (1));
i__26324__auto___43715 = G__43716;
continue;
} else {
}
break;
}

var G__43713 = args43711.length;
switch (G__43713) {
case 1:
return jayq.core.data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43711.length)].join('')));

}
});

jayq.core.data.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.data();
});

jayq.core.data.cljs$core$IFn$_invoke$arity$2 = (function ($elem,k){
return $elem.data(cljs.core.clj__GT_js.call(null,k));
});

jayq.core.data.cljs$core$IFn$_invoke$arity$3 = (function ($elem,k,v){
return $elem.data(cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));
});

jayq.core.data.cljs$lang$maxFixedArity = 3;
jayq.core.add_class = (function jayq$core$add_class($elem,cl){
return $elem.addClass(cljs.core.name.call(null,cl));
});
jayq.core.remove_class = (function jayq$core$remove_class(var_args){
var args43718 = [];
var len__26323__auto___43721 = arguments.length;
var i__26324__auto___43722 = (0);
while(true){
if((i__26324__auto___43722 < len__26323__auto___43721)){
args43718.push((arguments[i__26324__auto___43722]));

var G__43723 = (i__26324__auto___43722 + (1));
i__26324__auto___43722 = G__43723;
continue;
} else {
}
break;
}

var G__43720 = args43718.length;
switch (G__43720) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43718.length)].join('')));

}
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.removeClass();
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.removeClass(cljs.core.name.call(null,cl));
});

jayq.core.remove_class.cljs$lang$maxFixedArity = 2;
jayq.core.toggle_class = (function jayq$core$toggle_class(var_args){
var args43725 = [];
var len__26323__auto___43728 = arguments.length;
var i__26324__auto___43729 = (0);
while(true){
if((i__26324__auto___43729 < len__26323__auto___43728)){
args43725.push((arguments[i__26324__auto___43729]));

var G__43730 = (i__26324__auto___43729 + (1));
i__26324__auto___43729 = G__43730;
continue;
} else {
}
break;
}

var G__43727 = args43725.length;
switch (G__43727) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43725.length)].join('')));

}
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.toggleClass(cljs.core.name.call(null,cl));
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function ($elem,cl,switch$){
return $elem.toggleClass(cljs.core.name.call(null,cl),cljs.core.boolean$.call(null,switch$));
});

jayq.core.toggle_class.cljs$lang$maxFixedArity = 3;
jayq.core.has_class = (function jayq$core$has_class($elem,cl){
return $elem.hasClass(cljs.core.name.call(null,cl));
});
jayq.core.is = (function jayq$core$is($elem,selector){
return $elem.is(jayq.core.__GT_selector.call(null,selector));
});
jayq.core.after = (function jayq$core$after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function jayq$core$before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function jayq$core$append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function jayq$core$prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.append_to = (function jayq$core$append_to($elem,target){
return $elem.appendTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.prepend_to = (function jayq$core$prepend_to($elem,target){
return $elem.prependTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_before = (function jayq$core$insert_before($elem,target){
return $elem.insertBefore(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_after = (function jayq$core$insert_after($elem,target){
return $elem.insertAfter(jayq.core.__GT_selector.call(null,target));
});
jayq.core.replace_with = (function jayq$core$replace_with($elem,content){
return $elem.replaceWith(content);
});
jayq.core.remove = (function jayq$core$remove($elem){
return $elem.remove();
});
jayq.core.hide = (function jayq$core$hide(var_args){
var args__26330__auto__ = [];
var len__26323__auto___43736 = arguments.length;
var i__26324__auto___43737 = (0);
while(true){
if((i__26324__auto___43737 < len__26323__auto___43736)){
args__26330__auto__.push((arguments[i__26324__auto___43737]));

var G__43738 = (i__26324__auto___43737 + (1));
i__26324__auto___43737 = G__43738;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43734){
var vec__43735 = p__43734;
var speed = cljs.core.nth.call(null,vec__43735,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43735,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq43732){
var G__43733 = cljs.core.first.call(null,seq43732);
var seq43732__$1 = cljs.core.next.call(null,seq43732);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__43733,seq43732__$1);
});
jayq.core.show = (function jayq$core$show(var_args){
var args__26330__auto__ = [];
var len__26323__auto___43743 = arguments.length;
var i__26324__auto___43744 = (0);
while(true){
if((i__26324__auto___43744 < len__26323__auto___43743)){
args__26330__auto__.push((arguments[i__26324__auto___43744]));

var G__43745 = (i__26324__auto___43744 + (1));
i__26324__auto___43744 = G__43745;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43741){
var vec__43742 = p__43741;
var speed = cljs.core.nth.call(null,vec__43742,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43742,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq43739){
var G__43740 = cljs.core.first.call(null,seq43739);
var seq43739__$1 = cljs.core.next.call(null,seq43739);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__43740,seq43739__$1);
});
jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__26330__auto__ = [];
var len__26323__auto___43750 = arguments.length;
var i__26324__auto___43751 = (0);
while(true){
if((i__26324__auto___43751 < len__26323__auto___43750)){
args__26330__auto__.push((arguments[i__26324__auto___43751]));

var G__43752 = (i__26324__auto___43751 + (1));
i__26324__auto___43751 = G__43752;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43748){
var vec__43749 = p__43748;
var speed = cljs.core.nth.call(null,vec__43749,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43749,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq43746){
var G__43747 = cljs.core.first.call(null,seq43746);
var seq43746__$1 = cljs.core.next.call(null,seq43746);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__43747,seq43746__$1);
});
jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__26330__auto__ = [];
var len__26323__auto___43757 = arguments.length;
var i__26324__auto___43758 = (0);
while(true){
if((i__26324__auto___43758 < len__26323__auto___43757)){
args__26330__auto__.push((arguments[i__26324__auto___43758]));

var G__43759 = (i__26324__auto___43758 + (1));
i__26324__auto___43758 = G__43759;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43755){
var vec__43756 = p__43755;
var speed = cljs.core.nth.call(null,vec__43756,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43756,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq43753){
var G__43754 = cljs.core.first.call(null,seq43753);
var seq43753__$1 = cljs.core.next.call(null,seq43753);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__43754,seq43753__$1);
});
jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__26330__auto__ = [];
var len__26323__auto___43764 = arguments.length;
var i__26324__auto___43765 = (0);
while(true){
if((i__26324__auto___43765 < len__26323__auto___43764)){
args__26330__auto__.push((arguments[i__26324__auto___43765]));

var G__43766 = (i__26324__auto___43765 + (1));
i__26324__auto___43765 = G__43766;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43762){
var vec__43763 = p__43762;
var speed = cljs.core.nth.call(null,vec__43763,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43763,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq43760){
var G__43761 = cljs.core.first.call(null,seq43760);
var seq43760__$1 = cljs.core.next.call(null,seq43760);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__43761,seq43760__$1);
});
jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__26330__auto__ = [];
var len__26323__auto___43771 = arguments.length;
var i__26324__auto___43772 = (0);
while(true){
if((i__26324__auto___43772 < len__26323__auto___43771)){
args__26330__auto__.push((arguments[i__26324__auto___43772]));

var G__43773 = (i__26324__auto___43772 + (1));
i__26324__auto___43772 = G__43773;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43769){
var vec__43770 = p__43769;
var speed = cljs.core.nth.call(null,vec__43770,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43770,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq43767){
var G__43768 = cljs.core.first.call(null,seq43767);
var seq43767__$1 = cljs.core.next.call(null,seq43767);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__43768,seq43767__$1);
});
jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__26330__auto__ = [];
var len__26323__auto___43778 = arguments.length;
var i__26324__auto___43779 = (0);
while(true){
if((i__26324__auto___43779 < len__26323__auto___43778)){
args__26330__auto__.push((arguments[i__26324__auto___43779]));

var G__43780 = (i__26324__auto___43779 + (1));
i__26324__auto___43779 = G__43780;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__43776){
var vec__43777 = p__43776;
var speed = cljs.core.nth.call(null,vec__43777,(0),null);
var on_finish = cljs.core.nth.call(null,vec__43777,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq43774){
var G__43775 = cljs.core.first.call(null,seq43774);
var seq43774__$1 = cljs.core.next.call(null,seq43774);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__43775,seq43774__$1);
});
jayq.core.siblings = (function jayq$core$siblings(var_args){
var args43781 = [];
var len__26323__auto___43784 = arguments.length;
var i__26324__auto___43785 = (0);
while(true){
if((i__26324__auto___43785 < len__26323__auto___43784)){
args43781.push((arguments[i__26324__auto___43785]));

var G__43786 = (i__26324__auto___43785 + (1));
i__26324__auto___43785 = G__43786;
continue;
} else {
}
break;
}

var G__43783 = args43781.length;
switch (G__43783) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43781.length)].join('')));

}
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.siblings();
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.siblings(cljs.core.name.call(null,selector));
});

jayq.core.siblings.cljs$lang$maxFixedArity = 2;
jayq.core.parent = (function jayq$core$parent($elem){
return $elem.parent();
});
jayq.core.parents = (function jayq$core$parents(var_args){
var args43788 = [];
var len__26323__auto___43791 = arguments.length;
var i__26324__auto___43792 = (0);
while(true){
if((i__26324__auto___43792 < len__26323__auto___43791)){
args43788.push((arguments[i__26324__auto___43792]));

var G__43793 = (i__26324__auto___43792 + (1));
i__26324__auto___43792 = G__43793;
continue;
} else {
}
break;
}

var G__43790 = args43788.length;
switch (G__43790) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43788.length)].join('')));

}
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parents();
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parents(cljs.core.name.call(null,selector));
});

jayq.core.parents.cljs$lang$maxFixedArity = 2;
jayq.core.parents_until = (function jayq$core$parents_until(var_args){
var args43795 = [];
var len__26323__auto___43798 = arguments.length;
var i__26324__auto___43799 = (0);
while(true){
if((i__26324__auto___43799 < len__26323__auto___43798)){
args43795.push((arguments[i__26324__auto___43799]));

var G__43800 = (i__26324__auto___43799 + (1));
i__26324__auto___43799 = G__43800;
continue;
} else {
}
break;
}

var G__43797 = args43795.length;
switch (G__43797) {
case 1:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43795.length)].join('')));

}
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parentsUntil();
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.parents_until.cljs$lang$maxFixedArity = 3;
jayq.core.children = (function jayq$core$children(var_args){
var args43802 = [];
var len__26323__auto___43805 = arguments.length;
var i__26324__auto___43806 = (0);
while(true){
if((i__26324__auto___43806 < len__26323__auto___43805)){
args43802.push((arguments[i__26324__auto___43806]));

var G__43807 = (i__26324__auto___43806 + (1));
i__26324__auto___43806 = G__43807;
continue;
} else {
}
break;
}

var G__43804 = args43802.length;
switch (G__43804) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43802.length)].join('')));

}
});

jayq.core.children.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.children(cljs.core.name.call(null,selector));
});

jayq.core.children.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.children();
});

jayq.core.children.cljs$lang$maxFixedArity = 2;
jayq.core.next = (function jayq$core$next(var_args){
var args43809 = [];
var len__26323__auto___43812 = arguments.length;
var i__26324__auto___43813 = (0);
while(true){
if((i__26324__auto___43813 < len__26323__auto___43812)){
args43809.push((arguments[i__26324__auto___43813]));

var G__43814 = (i__26324__auto___43813 + (1));
i__26324__auto___43813 = G__43814;
continue;
} else {
}
break;
}

var G__43811 = args43809.length;
switch (G__43811) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43809.length)].join('')));

}
});

jayq.core.next.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.next();
});

jayq.core.next.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.next(cljs.core.name.call(null,selector));
});

jayq.core.next.cljs$lang$maxFixedArity = 2;
jayq.core.prev = (function jayq$core$prev(var_args){
var args43816 = [];
var len__26323__auto___43819 = arguments.length;
var i__26324__auto___43820 = (0);
while(true){
if((i__26324__auto___43820 < len__26323__auto___43819)){
args43816.push((arguments[i__26324__auto___43820]));

var G__43821 = (i__26324__auto___43820 + (1));
i__26324__auto___43820 = G__43821;
continue;
} else {
}
break;
}

var G__43818 = args43816.length;
switch (G__43818) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43816.length)].join('')));

}
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prev();
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prev(cljs.core.name.call(null,selector));
});

jayq.core.prev.cljs$lang$maxFixedArity = 2;
jayq.core.next_all = (function jayq$core$next_all(var_args){
var args43823 = [];
var len__26323__auto___43826 = arguments.length;
var i__26324__auto___43827 = (0);
while(true){
if((i__26324__auto___43827 < len__26323__auto___43826)){
args43823.push((arguments[i__26324__auto___43827]));

var G__43828 = (i__26324__auto___43827 + (1));
i__26324__auto___43827 = G__43828;
continue;
} else {
}
break;
}

var G__43825 = args43823.length;
switch (G__43825) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43823.length)].join('')));

}
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextAll();
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextAll(cljs.core.name.call(null,selector));
});

jayq.core.next_all.cljs$lang$maxFixedArity = 2;
jayq.core.prev_all = (function jayq$core$prev_all(var_args){
var args43830 = [];
var len__26323__auto___43833 = arguments.length;
var i__26324__auto___43834 = (0);
while(true){
if((i__26324__auto___43834 < len__26323__auto___43833)){
args43830.push((arguments[i__26324__auto___43834]));

var G__43835 = (i__26324__auto___43834 + (1));
i__26324__auto___43834 = G__43835;
continue;
} else {
}
break;
}

var G__43832 = args43830.length;
switch (G__43832) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43830.length)].join('')));

}
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevAll();
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevAll(cljs.core.name.call(null,selector));
});

jayq.core.prev_all.cljs$lang$maxFixedArity = 2;
jayq.core.next_until = (function jayq$core$next_until(var_args){
var args43837 = [];
var len__26323__auto___43840 = arguments.length;
var i__26324__auto___43841 = (0);
while(true){
if((i__26324__auto___43841 < len__26323__auto___43840)){
args43837.push((arguments[i__26324__auto___43841]));

var G__43842 = (i__26324__auto___43841 + (1));
i__26324__auto___43841 = G__43842;
continue;
} else {
}
break;
}

var G__43839 = args43837.length;
switch (G__43839) {
case 1:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43837.length)].join('')));

}
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextUntil();
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.next_until.cljs$lang$maxFixedArity = 3;
jayq.core.prev_until = (function jayq$core$prev_until(var_args){
var args43844 = [];
var len__26323__auto___43847 = arguments.length;
var i__26324__auto___43848 = (0);
while(true){
if((i__26324__auto___43848 < len__26323__auto___43847)){
args43844.push((arguments[i__26324__auto___43848]));

var G__43849 = (i__26324__auto___43848 + (1));
i__26324__auto___43848 = G__43849;
continue;
} else {
}
break;
}

var G__43846 = args43844.length;
switch (G__43846) {
case 1:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43844.length)].join('')));

}
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevUntil();
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.prev_until.cljs$lang$maxFixedArity = 3;
jayq.core.find = (function jayq$core$find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.closest = (function jayq$core$closest(var_args){
var args__26330__auto__ = [];
var len__26323__auto___43856 = arguments.length;
var i__26324__auto___43857 = (0);
while(true){
if((i__26324__auto___43857 < len__26323__auto___43856)){
args__26330__auto__.push((arguments[i__26324__auto___43857]));

var G__43858 = (i__26324__auto___43857 + (1));
i__26324__auto___43857 = G__43858;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((2) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((2)),(0))):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26331__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__43854){
var vec__43855 = p__43854;
var context = cljs.core.nth.call(null,vec__43855,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq43851){
var G__43852 = cljs.core.first.call(null,seq43851);
var seq43851__$1 = cljs.core.next.call(null,seq43851);
var G__43853 = cljs.core.first.call(null,seq43851__$1);
var seq43851__$2 = cljs.core.next.call(null,seq43851__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__43852,G__43853,seq43851__$2);
});
jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
var args43859 = [];
var len__26323__auto___43862 = arguments.length;
var i__26324__auto___43863 = (0);
while(true){
if((i__26324__auto___43863 < len__26323__auto___43862)){
args43859.push((arguments[i__26324__auto___43863]));

var G__43864 = (i__26324__auto___43863 + (1));
i__26324__auto___43863 = G__43864;
continue;
} else {
}
break;
}

var G__43861 = args43859.length;
switch (G__43861) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43859.length)].join('')));

}
});

jayq.core.html.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.html(v);
});

jayq.core.html.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.html();
});

jayq.core.html.cljs$lang$maxFixedArity = 2;
jayq.core.inner = jayq.core.html;
jayq.core.empty = (function jayq$core$empty($elem){
return $elem.empty();
});
jayq.core.val = (function jayq$core$val(var_args){
var args43866 = [];
var len__26323__auto___43869 = arguments.length;
var i__26324__auto___43870 = (0);
while(true){
if((i__26324__auto___43870 < len__26323__auto___43869)){
args43866.push((arguments[i__26324__auto___43870]));

var G__43871 = (i__26324__auto___43870 + (1));
i__26324__auto___43870 = G__43871;
continue;
} else {
}
break;
}

var G__43868 = args43866.length;
switch (G__43868) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43866.length)].join('')));

}
});

jayq.core.val.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.val(v);
});

jayq.core.val.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.val();
});

jayq.core.val.cljs$lang$maxFixedArity = 2;
jayq.core.serialize = (function jayq$core$serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function jayq$core$queue(var_args){
var args43873 = [];
var len__26323__auto___43876 = arguments.length;
var i__26324__auto___43877 = (0);
while(true){
if((i__26324__auto___43877 < len__26323__auto___43876)){
args43873.push((arguments[i__26324__auto___43877]));

var G__43878 = (i__26324__auto___43877 + (1));
i__26324__auto___43877 = G__43878;
continue;
} else {
}
break;
}

var G__43875 = args43873.length;
switch (G__43875) {
case 3:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43873.length)].join('')));

}
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$3 = (function ($elem,x,y){
return $elem.queue(x,y);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.queue(x);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.queue();
});

jayq.core.queue.cljs$lang$maxFixedArity = 3;
jayq.core.dequeue = (function jayq$core$dequeue(var_args){
var args43880 = [];
var len__26323__auto___43883 = arguments.length;
var i__26324__auto___43884 = (0);
while(true){
if((i__26324__auto___43884 < len__26323__auto___43883)){
args43880.push((arguments[i__26324__auto___43884]));

var G__43885 = (i__26324__auto___43884 + (1));
i__26324__auto___43884 = G__43885;
continue;
} else {
}
break;
}

var G__43882 = args43880.length;
switch (G__43882) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43880.length)].join('')));

}
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,queue_name){
return $elem.dequeue(queue_name);
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.dequeue();
});

jayq.core.dequeue.cljs$lang$maxFixedArity = 2;
jayq.core.document_ready = (function jayq$core$document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.mimetype_converter = (function jayq$core$mimetype_converter(s){
return cljs.reader.read_string.call(null,[cljs.core.str(s)].join(''));
});
jQuery.ajaxSetup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accepts","accepts",1429714104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),"application/edn, text/edn",new cljs.core.Keyword(null,"clojure","clojure",438975815),"application/clojure, text/clojure"], null),new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.PersistentArrayMap(null, 1, ["clojure",/edn|clojure/], null),new cljs.core.Keyword(null,"converters","converters",195533259),new cljs.core.PersistentArrayMap(null, 2, ["text edn",jayq.core.mimetype_converter,"text clojure",jayq.core.mimetype_converter], null)], null)));
jayq.core.clj_content_type_QMARK_ = (function jayq$core$clj_content_type_QMARK_(x){
return cljs.core.re_find.call(null,/^(text|application)\/(clojure|edn)/,x);
});
jayq.core.__GT_content_type = (function jayq$core$__GT_content_type(ct){
if(typeof ct === 'string'){
return ct;
} else {
if((ct instanceof cljs.core.Keyword)){
return cljs.core.subs.call(null,[cljs.core.str(ct)].join(''),(1));
} else {
return null;
}
}
});
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__43889){
var map__43892 = p__43889;
var map__43892__$1 = ((((!((map__43892 == null)))?((((map__43892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43892):map__43892);
var request = map__43892__$1;
var data = cljs.core.get.call(null,map__43892__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__43892__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__43892,map__43892__$1,request,data,contentType){
return (function (p1__43888_SHARP_){
if(cljs.core.truth_((function (){var and__25253__auto__ = ct;
if(cljs.core.truth_(and__25253__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__25253__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__43888_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__43888_SHARP_;
}
});})(ct,map__43892,map__43892__$1,request,data,contentType))
.call(null,((function (ct,map__43892,map__43892__$1,request,data,contentType){
return (function (p1__43887_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__43887_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__43887_SHARP_;
}
});})(ct,map__43892,map__43892__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var args43894 = [];
var len__26323__auto___43897 = arguments.length;
var i__26324__auto___43898 = (0);
while(true){
if((i__26324__auto___43898 < len__26323__auto___43897)){
args43894.push((arguments[i__26324__auto___43898]));

var G__43899 = (i__26324__auto___43898 + (1));
i__26324__auto___43898 = G__43899;
continue;
} else {
}
break;
}

var G__43896 = args43894.length;
switch (G__43896) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43894.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;
jayq.core.xhr = (function jayq$core$xhr(p__43901,content,callback){
var vec__43903 = p__43901;
var method = cljs.core.nth.call(null,vec__43903,(0),null);
var uri = cljs.core.nth.call(null,vec__43903,(1),null);
var params = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),clojure.string.upper_case.call(null,cljs.core.name.call(null,method)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js.call(null,content),new cljs.core.Keyword(null,"success","success",1890645906),callback], null));
return jQuery.ajax(uri,params);
});
/**
 * Reads clojure data from element content (preferably a script tag with type=edn/clojure)
 */
jayq.core.read = (function jayq$core$read($elem){
return cljs.reader.read_string.call(null,jayq.core.html.call(null,$elem));
});
jayq.core.$contains = jQuery.contains;
jayq.core.bind = (function jayq$core$bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.unbind = (function jayq$core$unbind(var_args){
var args__26330__auto__ = [];
var len__26323__auto___43909 = arguments.length;
var i__26324__auto___43910 = (0);
while(true){
if((i__26324__auto___43910 < len__26323__auto___43909)){
args__26330__auto__.push((arguments[i__26324__auto___43910]));

var G__43911 = (i__26324__auto___43910 + (1));
i__26324__auto___43910 = G__43911;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((2) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((2)),(0))):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26331__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__43907){
var vec__43908 = p__43907;
var func = cljs.core.nth.call(null,vec__43908,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq43904){
var G__43905 = cljs.core.first.call(null,seq43904);
var seq43904__$1 = cljs.core.next.call(null,seq43904);
var G__43906 = cljs.core.first.call(null,seq43904__$1);
var seq43904__$2 = cljs.core.next.call(null,seq43904__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__43905,G__43906,seq43904__$2);
});
jayq.core.trigger = (function jayq$core$trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function jayq$core$delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function jayq$core$__GT_event(e){
if(cljs.core.coll_QMARK_.call(null,e)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else {
return cljs.core.clj__GT_js.call(null,e);
}
});
jayq.core.on = (function jayq$core$on(var_args){
var args__26330__auto__ = [];
var len__26323__auto___43917 = arguments.length;
var i__26324__auto___43918 = (0);
while(true){
if((i__26324__auto___43918 < len__26323__auto___43917)){
args__26330__auto__.push((arguments[i__26324__auto___43918]));

var G__43919 = (i__26324__auto___43918 + (1));
i__26324__auto___43918 = G__43919;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((2) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((2)),(0))):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26331__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__43915){
var vec__43916 = p__43915;
var sel = cljs.core.nth.call(null,vec__43916,(0),null);
var data = cljs.core.nth.call(null,vec__43916,(1),null);
var handler = cljs.core.nth.call(null,vec__43916,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq43912){
var G__43913 = cljs.core.first.call(null,seq43912);
var seq43912__$1 = cljs.core.next.call(null,seq43912);
var G__43914 = cljs.core.first.call(null,seq43912__$1);
var seq43912__$2 = cljs.core.next.call(null,seq43912__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__43913,G__43914,seq43912__$2);
});
jayq.core.one = (function jayq$core$one(var_args){
var args__26330__auto__ = [];
var len__26323__auto___43925 = arguments.length;
var i__26324__auto___43926 = (0);
while(true){
if((i__26324__auto___43926 < len__26323__auto___43925)){
args__26330__auto__.push((arguments[i__26324__auto___43926]));

var G__43927 = (i__26324__auto___43926 + (1));
i__26324__auto___43926 = G__43927;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((2) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((2)),(0))):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26331__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__43923){
var vec__43924 = p__43923;
var sel = cljs.core.nth.call(null,vec__43924,(0),null);
var data = cljs.core.nth.call(null,vec__43924,(1),null);
var handler = cljs.core.nth.call(null,vec__43924,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq43920){
var G__43921 = cljs.core.first.call(null,seq43920);
var seq43920__$1 = cljs.core.next.call(null,seq43920);
var G__43922 = cljs.core.first.call(null,seq43920__$1);
var seq43920__$2 = cljs.core.next.call(null,seq43920__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__43921,G__43922,seq43920__$2);
});
jayq.core.off = (function jayq$core$off(var_args){
var args__26330__auto__ = [];
var len__26323__auto___43933 = arguments.length;
var i__26324__auto___43934 = (0);
while(true){
if((i__26324__auto___43934 < len__26323__auto___43933)){
args__26330__auto__.push((arguments[i__26324__auto___43934]));

var G__43935 = (i__26324__auto___43934 + (1));
i__26324__auto___43934 = G__43935;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((2) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((2)),(0))):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26331__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__43931){
var vec__43932 = p__43931;
var sel = cljs.core.nth.call(null,vec__43932,(0),null);
var handler = cljs.core.nth.call(null,vec__43932,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq43928){
var G__43929 = cljs.core.first.call(null,seq43928);
var seq43928__$1 = cljs.core.next.call(null,seq43928);
var G__43930 = cljs.core.first.call(null,seq43928__$1);
var seq43928__$2 = cljs.core.next.call(null,seq43928__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__43929,G__43930,seq43928__$2);
});
jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var args43936 = [];
var len__26323__auto___43939 = arguments.length;
var i__26324__auto___43940 = (0);
while(true){
if((i__26324__auto___43940 < len__26323__auto___43939)){
args43936.push((arguments[i__26324__auto___43940]));

var G__43941 = (i__26324__auto___43940 + (1));
i__26324__auto___43940 = G__43941;
continue;
} else {
}
break;
}

var G__43938 = args43936.length;
switch (G__43938) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43936.length)].join('')));

}
});

jayq.core.height.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.height(x);
});

jayq.core.height.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.height();
});

jayq.core.height.cljs$lang$maxFixedArity = 2;
jayq.core.width = (function jayq$core$width(var_args){
var args43943 = [];
var len__26323__auto___43946 = arguments.length;
var i__26324__auto___43947 = (0);
while(true){
if((i__26324__auto___43947 < len__26323__auto___43946)){
args43943.push((arguments[i__26324__auto___43947]));

var G__43948 = (i__26324__auto___43947 + (1));
i__26324__auto___43947 = G__43948;
continue;
} else {
}
break;
}

var G__43945 = args43943.length;
switch (G__43945) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43943.length)].join('')));

}
});

jayq.core.width.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.width(x);
});

jayq.core.width.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.width();
});

jayq.core.width.cljs$lang$maxFixedArity = 2;
jayq.core.inner_height = (function jayq$core$inner_height($elem){
return $elem.innerHeight();
});
jayq.core.inner_width = (function jayq$core$inner_width($elem){
return $elem.innerWidth();
});
jayq.core.outer_height = (function jayq$core$outer_height($elem){
return $elem.outerHeight();
});
jayq.core.outer_width = (function jayq$core$outer_width($elem){
return $elem.outerWidth();
});
jayq.core.offset = (function jayq$core$offset(var_args){
var args43950 = [];
var len__26323__auto___43953 = arguments.length;
var i__26324__auto___43954 = (0);
while(true){
if((i__26324__auto___43954 < len__26323__auto___43953)){
args43950.push((arguments[i__26324__auto___43954]));

var G__43955 = (i__26324__auto___43954 + (1));
i__26324__auto___43954 = G__43955;
continue;
} else {
}
break;
}

var G__43952 = args43950.length;
switch (G__43952) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43950.length)].join('')));

}
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$2 = (function ($elem,coords){
return cljs.core.clj__GT_js.call(null,coords).offset();
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return cljs.core.js__GT_clj.call(null,$elem.offset(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});

jayq.core.offset.cljs$lang$maxFixedArity = 2;
jayq.core.offset_parent = (function jayq$core$offset_parent($elem){
return $elem.offsetParent();
});
jayq.core.position = (function jayq$core$position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
jayq.core.scroll_left = (function jayq$core$scroll_left(var_args){
var args43957 = [];
var len__26323__auto___43960 = arguments.length;
var i__26324__auto___43961 = (0);
while(true){
if((i__26324__auto___43961 < len__26323__auto___43960)){
args43957.push((arguments[i__26324__auto___43961]));

var G__43962 = (i__26324__auto___43961 + (1));
i__26324__auto___43961 = G__43962;
continue;
} else {
}
break;
}

var G__43959 = args43957.length;
switch (G__43959) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43957.length)].join('')));

}
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollLeft();
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollLeft(x);
});

jayq.core.scroll_left.cljs$lang$maxFixedArity = 2;
jayq.core.scroll_top = (function jayq$core$scroll_top(var_args){
var args43964 = [];
var len__26323__auto___43967 = arguments.length;
var i__26324__auto___43968 = (0);
while(true){
if((i__26324__auto___43968 < len__26323__auto___43967)){
args43964.push((arguments[i__26324__auto___43968]));

var G__43969 = (i__26324__auto___43968 + (1));
i__26324__auto___43968 = G__43969;
continue;
} else {
}
break;
}

var G__43966 = args43964.length;
switch (G__43966) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43964.length)].join('')));

}
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollTop();
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollTop(x);
});

jayq.core.scroll_top.cljs$lang$maxFixedArity = 2;
jayq.core.$deferred = jQuery.Deferred;
jayq.core.$when = jQuery.when;
jayq.core.then = (function jayq$core$then(var_args){
var args43971 = [];
var len__26323__auto___43974 = arguments.length;
var i__26324__auto___43975 = (0);
while(true){
if((i__26324__auto___43975 < len__26323__auto___43974)){
args43971.push((arguments[i__26324__auto___43975]));

var G__43976 = (i__26324__auto___43975 + (1));
i__26324__auto___43975 = G__43976;
continue;
} else {
}
break;
}

var G__43973 = args43971.length;
switch (G__43973) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43971.length)].join('')));

}
});

jayq.core.then.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_fn,fail_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn));
});

jayq.core.then.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_fn,fail_fn,progress_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn),cljs.core.clj__GT_js.call(null,progress_fn));
});

jayq.core.then.cljs$lang$maxFixedArity = 4;
jayq.core.done = (function jayq$core$done(var_args){
var args__26330__auto__ = [];
var len__26323__auto___43980 = arguments.length;
var i__26324__auto___43981 = (0);
while(true){
if((i__26324__auto___43981 < len__26323__auto___43980)){
args__26330__auto__.push((arguments[i__26324__auto___43981]));

var G__43982 = (i__26324__auto___43981 + (1));
i__26324__auto___43981 = G__43982;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq43978){
var G__43979 = cljs.core.first.call(null,seq43978);
var seq43978__$1 = cljs.core.next.call(null,seq43978);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__43979,seq43978__$1);
});
jayq.core.fail = (function jayq$core$fail(var_args){
var args__26330__auto__ = [];
var len__26323__auto___43985 = arguments.length;
var i__26324__auto___43986 = (0);
while(true){
if((i__26324__auto___43986 < len__26323__auto___43985)){
args__26330__auto__.push((arguments[i__26324__auto___43986]));

var G__43987 = (i__26324__auto___43986 + (1));
i__26324__auto___43986 = G__43987;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq43983){
var G__43984 = cljs.core.first.call(null,seq43983);
var seq43983__$1 = cljs.core.next.call(null,seq43983);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__43984,seq43983__$1);
});
jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var args43988 = [];
var len__26323__auto___43991 = arguments.length;
var i__26324__auto___43992 = (0);
while(true){
if((i__26324__auto___43992 < len__26323__auto___43991)){
args43988.push((arguments[i__26324__auto___43992]));

var G__43993 = (i__26324__auto___43992 + (1));
i__26324__auto___43992 = G__43993;
continue;
} else {
}
break;
}

var G__43990 = args43988.length;
switch (G__43990) {
case 1:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43988.length)].join('')));

}
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (deferred){
return deferred.promise();
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$2 = (function (deferred,type){
return deferred.promise(type);
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$3 = (function (deferred,type,target){
return deferred.promise(type,target);
});

jayq.core.promise.cljs$lang$maxFixedArity = 3;
jayq.core.always = (function jayq$core$always(var_args){
var args__26330__auto__ = [];
var len__26323__auto___43997 = arguments.length;
var i__26324__auto___43998 = (0);
while(true){
if((i__26324__auto___43998 < len__26323__auto___43997)){
args__26330__auto__.push((arguments[i__26324__auto___43998]));

var G__43999 = (i__26324__auto___43998 + (1));
i__26324__auto___43998 = G__43999;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq43995){
var G__43996 = cljs.core.first.call(null,seq43995);
var seq43995__$1 = cljs.core.next.call(null,seq43995);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__43996,seq43995__$1);
});
jayq.core.reject = (function jayq$core$reject(deferred,args){
return deferred.reject(args);
});
jayq.core.reject_with = (function jayq$core$reject_with(deferred,context,args){
return deferred.rejectWith(context,args);
});
jayq.core.notify = (function jayq$core$notify(deferred,args){
return deferred.notify(args);
});
jayq.core.notify_with = (function jayq$core$notify_with(deferred,context,args){
return deferred.notifyWith(context,args);
});
jayq.core.resolve = (function jayq$core$resolve(deferred,args){
return deferred.resolve(args);
});
jayq.core.resolve_with = (function jayq$core$resolve_with(deferred,context,args){
return deferred.resolveWith(context,args);
});
jayq.core.pipe = (function jayq$core$pipe(var_args){
var args44000 = [];
var len__26323__auto___44003 = arguments.length;
var i__26324__auto___44004 = (0);
while(true){
if((i__26324__auto___44004 < len__26323__auto___44003)){
args44000.push((arguments[i__26324__auto___44004]));

var G__44005 = (i__26324__auto___44004 + (1));
i__26324__auto___44004 = G__44005;
continue;
} else {
}
break;
}

var G__44002 = args44000.length;
switch (G__44002) {
case 2:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44000.length)].join('')));

}
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$2 = (function (deferred,done_filter){
return deferred.pipe(done_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_filter,fail_filter){
return deferred.pipe(done_filter,fail_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_filter,fail_filter,progress_filter){
return deferred.pipe(done_filter,fail_filter,progress_filter);
});

jayq.core.pipe.cljs$lang$maxFixedArity = 4;
jayq.core.state = (function jayq$core$state(deferred){
return cljs.core.keyword.call(null,deferred.state());
});
jayq.core.deferred_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),jayq.core.$when,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
var dfd = jayq.core.$deferred.call(null);
jayq.core.done.call(null,x,((function (dfd){
return (function (v){
return jayq.core.done.call(null,f.call(null,v),cljs.core.partial.call(null,jayq.core.resolve,dfd));
});})(dfd))
);

return jayq.core.promise.call(null,dfd);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);
jayq.core.ajax_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.identity,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
return jayq.core.done.call(null,jayq.core.ajax.call(null,x),f);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);

//# sourceMappingURL=core.js.map