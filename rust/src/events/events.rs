use num_derive::FromPrimitive;    

//Events as sent from JS (straight enum)
#[cfg_attr(feature = "ts_test", derive(EnumIter, AsRefStr))]
#[derive(FromPrimitive, Copy, Clone, Debug)]
#[repr(u32)]
pub enum BridgeEvent {
    AddTodo,
    UpdateTodo,
    RemoveTodo,
}

//Events as we want to deal with them in Rust
pub enum Event {
    ChangePage(Page),
    AddTodo(String),
    UpdateTodo(shipyard::Key, String),
    RemoveTodo(shipyard::Key)
}

#[derive(FromPrimitive, Copy, Clone, Debug)]
#[repr(u32)]
pub enum Page {
    Init,
}