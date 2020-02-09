// Compiled by ClojureScript 1.10.520 {}
goog.provide('beating_diamond.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
beating_diamond.core.sum_of = cljs.core.partial.call(null,cljs.core.mapv,cljs.core._PLUS_);
beating_diamond.core.top_right_diag = (function beating_diamond$core$top_right_diag(x){
var iter__4523__auto__ = (function beating_diamond$core$top_right_diag_$_iter__35893(s__35894){
return (new cljs.core.LazySeq(null,(function (){
var s__35894__$1 = s__35894;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__35894__$1);
if(temp__5735__auto__){
var s__35894__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35894__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__35894__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__35896 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__35895 = (0);
while(true){
if((i__35895 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__35895);
cljs.core.chunk_append.call(null,b__35896,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(i - x)], null));

var G__35897 = (i__35895 + (1));
i__35895 = G__35897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35896),beating_diamond$core$top_right_diag_$_iter__35893.call(null,cljs.core.chunk_rest.call(null,s__35894__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35896),null);
}
} else {
var i = cljs.core.first.call(null,s__35894__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(i - x)], null),beating_diamond$core$top_right_diag_$_iter__35893.call(null,cljs.core.rest.call(null,s__35894__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(x + (1))));
});
beating_diamond.core.top_left_diag = (function beating_diamond$core$top_left_diag(x){
var iter__4523__auto__ = (function beating_diamond$core$top_left_diag_$_iter__35898(s__35899){
return (new cljs.core.LazySeq(null,(function (){
var s__35899__$1 = s__35899;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__35899__$1);
if(temp__5735__auto__){
var s__35899__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35899__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__35899__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__35901 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__35900 = (0);
while(true){
if((i__35900 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__35900);
cljs.core.chunk_append.call(null,b__35901,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- i),(i - x)], null));

var G__35902 = (i__35900 + (1));
i__35900 = G__35902;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35901),beating_diamond$core$top_left_diag_$_iter__35898.call(null,cljs.core.chunk_rest.call(null,s__35899__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35901),null);
}
} else {
var i = cljs.core.first.call(null,s__35899__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- i),(i - x)], null),beating_diamond$core$top_left_diag_$_iter__35898.call(null,cljs.core.rest.call(null,s__35899__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(x + (1))));
});
beating_diamond.core.bot_left_diag = (function beating_diamond$core$bot_left_diag(x){
var iter__4523__auto__ = (function beating_diamond$core$bot_left_diag_$_iter__35903(s__35904){
return (new cljs.core.LazySeq(null,(function (){
var s__35904__$1 = s__35904;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__35904__$1);
if(temp__5735__auto__){
var s__35904__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35904__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__35904__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__35906 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__35905 = (0);
while(true){
if((i__35905 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__35905);
cljs.core.chunk_append.call(null,b__35906,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i - x),i], null));

var G__35907 = (i__35905 + (1));
i__35905 = G__35907;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35906),beating_diamond$core$bot_left_diag_$_iter__35903.call(null,cljs.core.chunk_rest.call(null,s__35904__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35906),null);
}
} else {
var i = cljs.core.first.call(null,s__35904__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i - x),i], null),beating_diamond$core$bot_left_diag_$_iter__35903.call(null,cljs.core.rest.call(null,s__35904__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,x,(-1),(-1)));
});
beating_diamond.core.bot_right_diag = (function beating_diamond$core$bot_right_diag(x){
var iter__4523__auto__ = (function beating_diamond$core$bot_right_diag_$_iter__35908(s__35909){
return (new cljs.core.LazySeq(null,(function (){
var s__35909__$1 = s__35909;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__35909__$1);
if(temp__5735__auto__){
var s__35909__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35909__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__35909__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__35911 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__35910 = (0);
while(true){
if((i__35910 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__35910);
cljs.core.chunk_append.call(null,b__35911,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - i),i], null));

var G__35912 = (i__35910 + (1));
i__35910 = G__35912;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35911),beating_diamond$core$bot_right_diag_$_iter__35908.call(null,cljs.core.chunk_rest.call(null,s__35909__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35911),null);
}
} else {
var i = cljs.core.first.call(null,s__35909__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - i),i], null),beating_diamond$core$bot_right_diag_$_iter__35908.call(null,cljs.core.rest.call(null,s__35909__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,x,(-1),(-1)));
});
beating_diamond.core.all_diags = cljs.core.juxt.call(null,beating_diamond.core.top_left_diag,beating_diamond.core.top_right_diag,beating_diamond.core.bot_left_diag,beating_diamond.core.bot_right_diag);
beating_diamond.core.diags_from_center = (function beating_diamond$core$diags_from_center(center,x){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,beating_diamond.core.sum_of,center),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.cat,beating_diamond.core.all_diags.call(null,x)));
});
beating_diamond.core.setup = (function beating_diamond$core$setup(){
quil.core.frame_rate.call(null,(5));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"rgb","rgb",1432123467));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sizes","sizes",-273528126),cljs.core.range.call(null,(13),(0),(-3)),new cljs.core.Keyword(null,"tile-size","tile-size",441420757),(10),new cljs.core.Keyword(null,"modifier","modifier",1634442788),(0),new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.dec], null)], null);
});
beating_diamond.core.update_state = (function beating_diamond$core$update_state(state){
var first_size = cljs.core.first.call(null,state.call(null,new cljs.core.Keyword(null,"sizes","sizes",-273528126)));
var sec_mod = cljs.core.second.call(null,new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(state));
var first_mod = cljs.core.first.call(null,new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(state));
if((((first_size === (0))) || ((first_size >= (25))))){
return cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"modifiers","modifiers",50378834),cljs.core.reverse),new cljs.core.Keyword(null,"sizes","sizes",-273528126),cljs.core.partial.call(null,cljs.core.map,sec_mod));
} else {
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"sizes","sizes",-273528126),cljs.core.partial.call(null,cljs.core.map,first_mod));
}
});
beating_diamond.core.draw_diamond = (function beating_diamond$core$draw_diamond(size,tile_size){
var coords = beating_diamond.core.diags_from_center.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((quil.core.width.call(null) / tile_size) / (2)),((quil.core.height.call(null) / tile_size) / (2))], null),size);
var seq__35913 = cljs.core.seq.call(null,coords);
var chunk__35914 = null;
var count__35915 = (0);
var i__35916 = (0);
while(true){
if((i__35916 < count__35915)){
var vec__35923 = cljs.core._nth.call(null,chunk__35914,i__35916);
var x = cljs.core.nth.call(null,vec__35923,(0),null);
var y = cljs.core.nth.call(null,vec__35923,(1),null);
cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null));

quil.core.no_stroke.call(null);

quil.core.rect.call(null,(y * tile_size),(x * tile_size),tile_size,tile_size);


var G__35929 = seq__35913;
var G__35930 = chunk__35914;
var G__35931 = count__35915;
var G__35932 = (i__35916 + (1));
seq__35913 = G__35929;
chunk__35914 = G__35930;
count__35915 = G__35931;
i__35916 = G__35932;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35913);
if(temp__5735__auto__){
var seq__35913__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35913__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35913__$1);
var G__35933 = cljs.core.chunk_rest.call(null,seq__35913__$1);
var G__35934 = c__4550__auto__;
var G__35935 = cljs.core.count.call(null,c__4550__auto__);
var G__35936 = (0);
seq__35913 = G__35933;
chunk__35914 = G__35934;
count__35915 = G__35935;
i__35916 = G__35936;
continue;
} else {
var vec__35926 = cljs.core.first.call(null,seq__35913__$1);
var x = cljs.core.nth.call(null,vec__35926,(0),null);
var y = cljs.core.nth.call(null,vec__35926,(1),null);
cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null));

quil.core.no_stroke.call(null);

quil.core.rect.call(null,(y * tile_size),(x * tile_size),tile_size,tile_size);


var G__35937 = cljs.core.next.call(null,seq__35913__$1);
var G__35938 = null;
var G__35939 = (0);
var G__35940 = (0);
seq__35913 = G__35937;
chunk__35914 = G__35938;
count__35915 = G__35939;
i__35916 = G__35940;
continue;
}
} else {
return null;
}
}
break;
}
});
beating_diamond.core.draw_state = (function beating_diamond$core$draw_state(p__35941){
var map__35942 = p__35941;
var map__35942__$1 = (((((!((map__35942 == null))))?(((((map__35942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35942):map__35942);
var sizes = cljs.core.get.call(null,map__35942__$1,new cljs.core.Keyword(null,"sizes","sizes",-273528126));
var tile_size = cljs.core.get.call(null,map__35942__$1,new cljs.core.Keyword(null,"tile-size","tile-size",441420757));
quil.core.background.call(null,(240));

var seq__35944 = cljs.core.seq.call(null,sizes);
var chunk__35945 = null;
var count__35946 = (0);
var i__35947 = (0);
while(true){
if((i__35947 < count__35946)){
var size = cljs.core._nth.call(null,chunk__35945,i__35947);
beating_diamond.core.draw_diamond.call(null,size,tile_size);


var G__35948 = seq__35944;
var G__35949 = chunk__35945;
var G__35950 = count__35946;
var G__35951 = (i__35947 + (1));
seq__35944 = G__35948;
chunk__35945 = G__35949;
count__35946 = G__35950;
i__35947 = G__35951;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35944);
if(temp__5735__auto__){
var seq__35944__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35944__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35944__$1);
var G__35952 = cljs.core.chunk_rest.call(null,seq__35944__$1);
var G__35953 = c__4550__auto__;
var G__35954 = cljs.core.count.call(null,c__4550__auto__);
var G__35955 = (0);
seq__35944 = G__35952;
chunk__35945 = G__35953;
count__35946 = G__35954;
i__35947 = G__35955;
continue;
} else {
var size = cljs.core.first.call(null,seq__35944__$1);
beating_diamond.core.draw_diamond.call(null,size,tile_size);


var G__35956 = cljs.core.next.call(null,seq__35944__$1);
var G__35957 = null;
var G__35958 = (0);
var G__35959 = (0);
seq__35944 = G__35956;
chunk__35945 = G__35957;
count__35946 = G__35958;
i__35947 = G__35959;
continue;
}
} else {
return null;
}
}
break;
}
});
beating_diamond.core.run_sketch = (function beating_diamond$core$run_sketch(){
beating_diamond.core.beating_diamond = (function beating_diamond$core$run_sketch_$_beating_diamond(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"beating-diamond",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,beating_diamond.core.update_state))?(function() { 
var G__35960__delegate = function (args){
return cljs.core.apply.call(null,beating_diamond.core.update_state,args);
};
var G__35960 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35961__i = 0, G__35961__a = new Array(arguments.length -  0);
while (G__35961__i < G__35961__a.length) {G__35961__a[G__35961__i] = arguments[G__35961__i + 0]; ++G__35961__i;}
  args = new cljs.core.IndexedSeq(G__35961__a,0,null);
} 
return G__35960__delegate.call(this,args);};
G__35960.cljs$lang$maxFixedArity = 0;
G__35960.cljs$lang$applyTo = (function (arglist__35962){
var args = cljs.core.seq(arglist__35962);
return G__35960__delegate(args);
});
G__35960.cljs$core$IFn$_invoke$arity$variadic = G__35960__delegate;
return G__35960;
})()
:beating_diamond.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,beating_diamond.core.setup))?(function() { 
var G__35963__delegate = function (args){
return cljs.core.apply.call(null,beating_diamond.core.setup,args);
};
var G__35963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35964__i = 0, G__35964__a = new Array(arguments.length -  0);
while (G__35964__i < G__35964__a.length) {G__35964__a[G__35964__i] = arguments[G__35964__i + 0]; ++G__35964__i;}
  args = new cljs.core.IndexedSeq(G__35964__a,0,null);
} 
return G__35963__delegate.call(this,args);};
G__35963.cljs$lang$maxFixedArity = 0;
G__35963.cljs$lang$applyTo = (function (arglist__35965){
var args = cljs.core.seq(arglist__35965);
return G__35963__delegate(args);
});
G__35963.cljs$core$IFn$_invoke$arity$variadic = G__35963__delegate;
return G__35963;
})()
:beating_diamond.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,beating_diamond.core.draw_state))?(function() { 
var G__35966__delegate = function (args){
return cljs.core.apply.call(null,beating_diamond.core.draw_state,args);
};
var G__35966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35967__i = 0, G__35967__a = new Array(arguments.length -  0);
while (G__35967__i < G__35967__a.length) {G__35967__a[G__35967__i] = arguments[G__35967__i + 0]; ++G__35967__i;}
  args = new cljs.core.IndexedSeq(G__35967__a,0,null);
} 
return G__35966__delegate.call(this,args);};
G__35966.cljs$lang$maxFixedArity = 0;
G__35966.cljs$lang$applyTo = (function (arglist__35968){
var args = cljs.core.seq(arglist__35968);
return G__35966__delegate(args);
});
G__35966.cljs$core$IFn$_invoke$arity$variadic = G__35966__delegate;
return G__35966;
})()
:beating_diamond.core.draw_state));
});
goog.exportSymbol('beating_diamond.core.beating_diamond', beating_diamond.core.beating_diamond);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__33955__33956__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__33955__33956__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),beating_diamond.core.beating_diamond,new cljs.core.Keyword(null,"host-id","host-id",742376279),"beating-diamond"], null));
}
});
goog.exportSymbol('beating_diamond.core.run_sketch', beating_diamond.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1581263029147
