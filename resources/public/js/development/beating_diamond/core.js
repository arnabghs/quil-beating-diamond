// Compiled by ClojureScript 1.10.520 {}
goog.provide('beating_diamond.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
beating_diamond.core.setup = (function beating_diamond$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
beating_diamond.core.update_state = (function beating_diamond$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.1)], null);
});
beating_diamond.core.draw_state = (function beating_diamond$core$draw_state(state){
quil.core.background.call(null,(240));

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var x = ((150) * quil.core.cos.call(null,angle));
var y = ((150) * quil.core.sin.call(null,angle));
var tr__34361__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__34361__auto__);

return quil.core.ellipse.call(null,x,y,(100),(100));
}finally {quil.core.pop_matrix.call(null);
}});
beating_diamond.core.run_sketch = (function beating_diamond$core$run_sketch(){
beating_diamond.core.beating_diamond = (function beating_diamond$core$run_sketch_$_beating_diamond(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"beating-diamond",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,beating_diamond.core.update_state))?(function() { 
var G__34640__delegate = function (args){
return cljs.core.apply.call(null,beating_diamond.core.update_state,args);
};
var G__34640 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34641__i = 0, G__34641__a = new Array(arguments.length -  0);
while (G__34641__i < G__34641__a.length) {G__34641__a[G__34641__i] = arguments[G__34641__i + 0]; ++G__34641__i;}
  args = new cljs.core.IndexedSeq(G__34641__a,0,null);
} 
return G__34640__delegate.call(this,args);};
G__34640.cljs$lang$maxFixedArity = 0;
G__34640.cljs$lang$applyTo = (function (arglist__34642){
var args = cljs.core.seq(arglist__34642);
return G__34640__delegate(args);
});
G__34640.cljs$core$IFn$_invoke$arity$variadic = G__34640__delegate;
return G__34640;
})()
:beating_diamond.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,beating_diamond.core.setup))?(function() { 
var G__34643__delegate = function (args){
return cljs.core.apply.call(null,beating_diamond.core.setup,args);
};
var G__34643 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34644__i = 0, G__34644__a = new Array(arguments.length -  0);
while (G__34644__i < G__34644__a.length) {G__34644__a[G__34644__i] = arguments[G__34644__i + 0]; ++G__34644__i;}
  args = new cljs.core.IndexedSeq(G__34644__a,0,null);
} 
return G__34643__delegate.call(this,args);};
G__34643.cljs$lang$maxFixedArity = 0;
G__34643.cljs$lang$applyTo = (function (arglist__34645){
var args = cljs.core.seq(arglist__34645);
return G__34643__delegate(args);
});
G__34643.cljs$core$IFn$_invoke$arity$variadic = G__34643__delegate;
return G__34643;
})()
:beating_diamond.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,beating_diamond.core.draw_state))?(function() { 
var G__34646__delegate = function (args){
return cljs.core.apply.call(null,beating_diamond.core.draw_state,args);
};
var G__34646 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34647__i = 0, G__34647__a = new Array(arguments.length -  0);
while (G__34647__i < G__34647__a.length) {G__34647__a[G__34647__i] = arguments[G__34647__i + 0]; ++G__34647__i;}
  args = new cljs.core.IndexedSeq(G__34647__a,0,null);
} 
return G__34646__delegate.call(this,args);};
G__34646.cljs$lang$maxFixedArity = 0;
G__34646.cljs$lang$applyTo = (function (arglist__34648){
var args = cljs.core.seq(arglist__34648);
return G__34646__delegate(args);
});
G__34646.cljs$core$IFn$_invoke$arity$variadic = G__34646__delegate;
return G__34646;
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

//# sourceMappingURL=core.js.map?rel=1581262318938
