import { Request, Response } from 'express';
import pool from '../database';


class ApiController {
//Materia

public async insertarMateria(req: Request, res: Response) {
  const materia = await pool.query('insertar_materia(?, ?)', [req.body.nombre, req.body.contenido]);        
      res.json(materia);
  
}

public async obtenerMateria(req: Request, res: Response) {
  const {id} = req.params;
  const materia = await pool.query('obtener_materia(?)',[id]);
  res.json(materia);
  
}

public async obtenerMaterias(req: Request, res: Response) {
  const materia = await pool.query('select * from materia');
  res.json(materia);
}
  
public async actualizarMateria(req: Request, res: Response) {
  let emp = req.body;
  const materia = await pool.query('actualizar_materia(?, ?, ?)',[emp.id, emp.nombre, emp.contenido]);
  res.json(materia);
}
  
  
  public async eliminarMateria(req: Request, res: Response) {
  let emp = req.body;
  const materia = await pool.query('eliminar_materia(?)',[emp.id]);
  res.json(materia);
}

//Ciclo

public async getCiclos(req: Request, res: Response) {
  const ciclos = await pool.query('select * from ciclo');        
      res.json(ciclos);
  
}

public async crearCiclo(req: Request, res: Response) {
  let emp = req.body;
  await pool.query('insert into ciclo (anio) values (?)',[emp.year]);
  res.json({estado: true});
  
}

public async eliminarCiclo(req: Request, res: Response) {
  let emp = req.body;
  await pool.query('delete from ciclo where ciclo=?',[emp.ciclo]);
  res.json({estado: true});
}


}

export const apiController = new ApiController();