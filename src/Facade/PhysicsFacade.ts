
export class PhysicsFacade{
    private world: Box2D.Dynamics.b2World;
    
    constructor(gravity: number){
        const vectorGravity = new Box2D.Common.Math.b2Vec2(0, gravity);
        this.world = new Box2D.Dynamics.b2World(vectorGravity, true);
    }

    public createBody(positionX: number, positionY: number, width: number, height: number, friction: number) : Box2D.Dynamics.b2Body{
        const bodyDef = new Box2D.Dynamics.b2BodyDef();
        bodyDef.position.Set(positionX, positionY);
        const body = this.world.CreateBody(bodyDef);
        const shape = new Box2D.Collision.Shapes.b2PolygonShape();
        shape.SetAsBox(width/2, height/2);
        const fixtureDef = new Box2D.Dynamics.b2FixtureDef();
        fixtureDef.shape = shape;
        fixtureDef.friction = friction;
        body.CreateFixture(fixtureDef);
        return body;
    }
    
    public step(timeStep: number, velocityIteration: number, positionIteration: number){
        this.world.Step(timeStep, velocityIteration, positionIteration);
    }

    public getWorld() : Box2D.Dynamics.b2World {
        return this.world
    }

}