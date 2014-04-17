function tab1Visibility (tab1, tab2, fieldOne){
if (Xrm.Page.getAttribute(fieldOne).getValue() != 100000008 && Xrm.Page.getAttribute(fieldOne).getValue() != null ) {
Xrm.Page.ui.tabs.get(tab1).setVisible(true); //Show Tab
}
else if (Xrm.Page.getAttribute(fieldOne).getValue() == 100000008) {
Xrm.Page.ui.tabs.get(tab1).setVisible(false);
}
else if (Xrm.Page.getAttribute(fieldOne).getValue() == null) {
Xrm.Page.ui.tabs.get(tab1).setVisible(false);
}
};

function tab2Visibility (tab1, tab2, fieldOne){
if (Xrm.Page.getAttribute(fieldOne).getValue() != 100000008 && Xrm.Page.getAttribute(fieldOne).getValue() != null && Xrm.Page.getAttribute(fieldTwo).getValue() == 100000000) {
Xrm.Page.ui.tabs.get(tab2).setVisible(true); //Show Tab
}
else if (Xrm.Page.getAttribute(fieldOne).getValue() == 100000008) {
Xrm.Page.ui.tabs.get(tab2).setVisible(false);
}
else if (Xrm.Page.getAttribute(fieldOne).getValue() == null) {
Xrm.Page.ui.tabs.get(tab2).setVisible(false);
}
else if (Xrm.Page.getAttribute(fieldTwo).getValue() == null) {
Xrm.Page.ui.tabs.get(tab2).setVisible(false);
}
else if (Xrm.Page.getAttribute(fieldTwo).getValue() != 100000000) {
Xrm.Page.ui.tabs.get(tab2).setVisible(false);
}
};