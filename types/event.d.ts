declare global {
interface EventTargetWithValue extends EventTarget{
    value:string
}

interface EventWithTargetValue extends Event {
    target:EventTargetWithValue
}
}
