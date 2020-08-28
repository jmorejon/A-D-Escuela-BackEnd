import { Request, Response } from 'express';
import pool from '../database';


class ApiController {
//Materia

public async insertarMateria(req: Request, res: Response) {
  const materia = await pool.query('call insertar_materia(?, ?)', [req.body.nombre, req.body.contenido]);        
  res.json(materia);
}

public async obtenerMateria(req: Request, res: Response) {
  const {id} = req.params;
  const materia = await pool.query('call obtener_materia(?)',[id]);
  res.json(materia);
}

public async obtenerMaterias(req: Request, res: Response) {
  const materia = await pool.query('select * from materia');
  res.json(materia);
}
  
public async actualizarMateria(req: Request, res: Response) {
  let emp = req.body;
  const materia = await pool.query('call actualizar_materia(?, ?, ?)',[emp.id, emp.nombre, emp.contenido]);
  res.json(materia);
}

public async eliminarMateria(req: Request, res: Response) {
  const {id} = req.params;
  const materia = await pool.query('call eliminar_materia(?)',[id]);
  res.json(materia);
}

public async insertarAlumno(req: Request, res: Response) {
  const alumno = await pool.query('call insertar_obtener_alumno(?, ?, ?, ?, ?, ?, ?, ?)', 
  [req.body.nombre, req.body.apellido, req.body.direccion, req.body.telefono, req.body.cui, req.body.encargado, req.body.fecha_nacimiento, req.body.estado]);        
  res.json(alumno);
  
}

public async obtenerAlumno(req: Request, res: Response) {
  const {id} = req.params;
  const alumno = await pool.query('call obtener_alumno(?)',[id]);
  res.json(alumno);
}

public async obtenerAlumnos(req: Request, res: Response) {
  const alumno = await pool.query('select * from alumno');
  res.json(alumno);
}
  
public async actualizarAlumno(req: Request, res: Response) {
  let emp = req.body;
  const alumno = await pool.query('call actualizar_alumno(?, ?, ?, ?, ?, ?, ?, ?, ?)',
  [req.body.alumno, req.body.nombre, req.body.apellido, req.body.direccion, req.body.telefono, req.body.cui, req.body.encargado, req.body.fecha_nacimiento, req.body.estado]);
  res.json(alumno);
}
  
  
public async eliminarAlumno(req: Request, res: Response) {
  const {id} = req.params;
  const alumno = await pool.query('call eliminar_alumno(?)',[id]);
  res.json(alumno);
}


//Ciclo

public async getCiclos(req: Request, res: Response) {
  const ciclos = await pool.query('select * from ciclo');        
      res.json(ciclos);
}

public async crearCiclo(req: Request, res: Response) {
  const ciclo = await pool.query('call insertar_ciclo(?)', [req.body.anio]);        
      res.json(ciclo);
}

public async obtenerCiclo(req: Request, res: Response) {
  const {id} = req.params;
  const ciclo = await pool.query('call obtener_ciclo(?)',[id]);
  res.json(ciclo);
}

public async actualizarCiclo(req: Request, res: Response) {
  let emp = req.body;
  const ciclo = await pool.query('call actualizar_ciclo(?, ?)',[emp.ciclo, emp.anio]);
  res.json(ciclo);
}
  
  
  public async eliminarCiclo(req: Request, res: Response) {
  const {id} = req.params;
  const ciclo = await pool.query('call eliminar_ciclo(?)',[id]);
  res.json(ciclo);
}


}

export const apiController = new ApiController();