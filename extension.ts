/**
 * Writing data for hacking stem experiments
 */
//% weight=94 color=#EC7505 icon="\uf1b3"
namespace hourOfCode {
    // fire hazards for agent to detect in HoC world (deadbush=32, double_plant=175)
    export enum FireHazards {
        //% block="dead bush"
        DeadBush = Block.DeadBush,
        //% block="dry grass"
        DryGrass = Block.Sunflower
    }

    //% block="agent detect %FireHazards %dir"
    //% weight=30
    export function agentDetectFireHazard(flammableThing: FireHazards, dir: SixDirection) {
        return agent.inspect(AgentInspection.Block, dir) == flammableThing
    }
    
    //% block="agent analyze %dir"
    //% weight=40
    export function analyze(dir: SixDirection) {
        if (agentDetectFireHazard(FireHazards.DeadBush, dir) || agentDetectFireHazard(FireHazards.DryGrass, dir)) {
            mobs.execute(
                mobs.target(TargetSelectorKind.NearestPlayer),
                positions.create(0, 0, 0),
                "playsound random.levelup @p"
            )
        }
    }

    // condition for level completion: gold block placed at arbitrary location. to be finalized by world creators
    //% block
    //% weight=20
    export function hazardsRemain() {
        return !(blocks.testForBlock(Block.GoldBlock, positions.create(0, -5, 0).toWorld()))
    }
} 
