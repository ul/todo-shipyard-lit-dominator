use num_derive::FromPrimitive;    
use crate::events::Event;

pub struct ItemLabel (pub String);
pub struct ItemComplete(pub bool); 

#[derive(FromPrimitive, Copy, Clone, Debug)]
#[repr(u32)]
pub enum Filter {
    All,
    Active,
    Completed
}

impl Default for Filter {
    fn default() -> Self {
        Filter::All
    }
}


#[derive(Eq, PartialEq)]
pub enum Phase {
    InitialLoad,
    Ready
}
impl Default for Phase {
    fn default() -> Self {
        Phase::InitialLoad 
    }
}
