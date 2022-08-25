declare global {
interface EventTargetWithValue extends EventTarget{
    value:string
}

interface EventInInput extends Event {
    target:EventTargetWithValue
}
}
